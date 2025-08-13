package com.anscom.ecommerce.service;

import com.anscom.ecommerce.constant.MeasurementEnum;
import com.anscom.ecommerce.dto.ImageDto;
import com.anscom.ecommerce.dto.ItemDto;
import com.anscom.ecommerce.dto.ItemStockDto;
import com.anscom.ecommerce.exception.ItemNotFoundException;
import com.anscom.ecommerce.model.Image;
import com.anscom.ecommerce.model.Item;
import com.anscom.ecommerce.model.ItemStock;
import com.anscom.ecommerce.repository.ImageRepository;
import com.anscom.ecommerce.repository.ItemRepository;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.security.core.parameters.P;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Log4j2
public class ItemServiceImpl implements ItemService {
    private final ItemRepository itemRepository;
    private final ImageRepository imageRepository;

    public ItemServiceImpl(ItemRepository itemRepository, ImageRepository imageRepository) {
        this.itemRepository = itemRepository;
        this.imageRepository = imageRepository;
    }

    @Override
    public ItemDto getItemById(long id) {
        log.info("Fetching item by id {} ", id);
        Item item = itemRepository.findById(id)
                .orElseThrow(() -> new ItemNotFoundException("There's no item with id " + id));
        ItemDto itemDto = newItemDto(item);
        log.info("Fetched item {} ", itemDto);
        return itemDto;
    }

    @Override
    public Page<ItemDto> getItems(Pageable pageable, MeasurementEnum measurement, String color, Long minPrice, Long maxPrice, String keyword, String category) {
        Specification<Item> spec = (root, query, cb) -> cb.conjunction(); // always true

        if(measurement != null) {
            spec = spec.and(((root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("measurement"), measurement)));
        }
        if(color != null && !color.isEmpty()) {
            spec = spec.and((root, query, criteriaBuilder) -> criteriaBuilder.like(root.get("color"), color));
        }
        // Price range filtering
        if (minPrice != null && maxPrice != null) {
            spec = spec.and((root, query, criteriaBuilder) ->
                    criteriaBuilder.between(root.get("price"), minPrice, maxPrice));
        } else if (minPrice != null) {
            spec = spec.and((root, query, criteriaBuilder) ->
                    criteriaBuilder.greaterThanOrEqualTo(root.get("price"), minPrice));
        } else if (maxPrice != null) {
            spec = spec.and((root, query, criteriaBuilder) ->
                    criteriaBuilder.lessThanOrEqualTo(root.get("price"), maxPrice));
        }

        if(keyword != null && !keyword.isEmpty()) {
            spec = spec.and((root, query, criteriaBuilder) -> criteriaBuilder.like(root.get("name"), "%" + keyword + "%"));
        }

        if(category != null) {
            spec = spec.and(((root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("category"), category)));
        }
        return itemRepository.findAll(spec, pageable).map(this::newItemDto);
    }

    @Override
    public ItemDto saveItem(ItemDto itemDto, MultipartFile[] imageFiles) {
        log.info("Saving new item: {}", itemDto);

        try {
            // 1. Create new Item
            Item item = new Item();
            item.setName(itemDto.getName());
            item.setDescription(itemDto.getDescription());
            item.setPrice(itemDto.getPrice());
            item.setGender(itemDto.getGender());
            item.setMaterial(itemDto.getMaterial());
            item.setRating(itemDto.getRating());
            item.setCategory(itemDto.getCategory());
            item.setDiscountPercentage(itemDto.getDiscountPercentage());
            item.setPopular(itemDto.isPopular());

            // ✅ 2. Map DTO stocks to entity stocks
            if (itemDto.getStocks() != null && !itemDto.getStocks().isEmpty()) {
                List<ItemStock> stocks = itemDto.getStocks().stream()
                        .map(stockDto -> {
                            ItemStock stock = new ItemStock();
                            stock.setColor(stockDto.getColor());
                            stock.setSize(stockDto.getSize());
                            stock.setQuantity(stockDto.getQuantity());
                            stock.setItem(item); // set the relationship
                            return stock;
                        })
                        .toList();
                item.setStocks(stocks);
            }

            // 3. Save the item first
            Item savedItem = itemRepository.save(item);

            // ✅ 4. Save multiple images linked to the saved item
            if (imageFiles != null && imageFiles.length > 0) {
                List<Image> imageList = new ArrayList<>();
                for (MultipartFile imageFile : imageFiles) {
                    if (!imageFile.isEmpty()) {
                        Image image = new Image();
                        image.setImageName(imageFile.getOriginalFilename());
                        image.setImageType(imageFile.getContentType());
                        image.setImageData(imageFile.getBytes());
                        image.setItem(savedItem);  // link image to saved item
                        imageList.add(image);
                    }
                }
                imageRepository.saveAll(imageList);
            }

            log.info("Item saved successfully: {}", savedItem.getId());
            return newItemDto(savedItem);

        } catch (Exception e) {
            log.error("Error saving item: {}", e.getMessage(), e);
            return null;
        }
    }


    @Override
    public List<ImageDto> getImagesByItemId(Long itemId) {
        List<Image> images = imageRepository.findByItemId(itemId);  // Ensure correct field reference

        log.info("Fetched {} images for item {}", images.size(), itemId);
        images.forEach(img -> log.info("Image: ID={}, Name={}", img.getId(), img.getImageName()));

        return images.stream()
                .map(this::convertToImageDto)
                .collect(Collectors.toList());
    }

    @Override
    public ItemDto updateItem(Long itemId, ItemDto itemDto, MultipartFile[] imageFiles) {
        log.info("Updating item with ID: {}", itemId);

        try {
            Item existingItem = itemRepository.findById(itemId)
                    .orElseThrow(() -> new RuntimeException("Item not found"));

            // ✅ Update only provided fields
            if (itemDto.getName() != null) existingItem.setName(itemDto.getName());
            if (itemDto.getDescription() != null) existingItem.setDescription(itemDto.getDescription());
            if (itemDto.getPrice() != null) existingItem.setPrice(itemDto.getPrice());
            if (itemDto.getGender() != null) existingItem.setGender(itemDto.getGender());
            if (itemDto.getMaterial() != null) existingItem.setMaterial(itemDto.getMaterial());
            if (itemDto.getRating() != null) existingItem.setRating(itemDto.getRating());
            if (itemDto.getCategory() != null) existingItem.setCategory(itemDto.getCategory());
            if (itemDto.getDiscountPercentage() != null) existingItem.setDiscountPercentage(itemDto.getDiscountPercentage());
            existingItem.setPopular(!existingItem.isPopular());

            // ✅ Update stocks (size + color + quantity)
            if (itemDto.getStocks() != null && !itemDto.getStocks().isEmpty()) {
                existingItem.getStocks().clear(); // remove old ones

                List<ItemStock> updatedStocks = itemDto.getStocks().stream()
                        .map(stockDto -> {
                            ItemStock stock = new ItemStock();
                            stock.setColor(stockDto.getColor());
                            stock.setSize(stockDto.getSize());
                            stock.setQuantity(stockDto.getQuantity());
                            stock.setItem(existingItem);
                            return stock;
                        })
                        .toList();

                existingItem.getStocks().addAll(updatedStocks);
            }

            // ✅ Handle image updates
            if (imageFiles != null && imageFiles.length > 0) {
                imageRepository.deleteByItemId(itemId);

                List<Image> newImages = new ArrayList<>();
                for (MultipartFile imageFile : imageFiles) {
                    if (!imageFile.isEmpty()) {
                        Image newImage = new Image();
                        newImage.setImageName(imageFile.getOriginalFilename());
                        newImage.setImageType(imageFile.getContentType());
                        newImage.setImageData(imageFile.getBytes());
                        newImage.setItem(existingItem);
                        newImages.add(newImage);
                    }
                }
                imageRepository.saveAll(newImages);
            }

            // ✅ Save updated Item
            Item updatedItem = itemRepository.save(existingItem);
            log.info("Item updated successfully: {}", updatedItem.getId());
            return newItemDto(updatedItem);

        } catch (Exception e) {
            log.error("Error updating item: {}", e.getMessage(), e);
            return null;
        }
    }



    @Override
    public void deleteItem(Long itemId) {
        log.info("Deleting item with ID: {}", itemId);
        Item existingItem = itemRepository.findById(itemId).orElseThrow(() -> new RuntimeException("Item not found"));

        imageRepository.deleteByItemId(itemId);
        itemRepository.delete(existingItem);
        log.info("Item deleted successfully: {}", itemId);

    }


    @Override
    public List<ItemDto> getAllItems() {
        List<Item> items = itemRepository.findAll();
        return items.stream().map(this::newItemDto).collect(Collectors.toList());
    }

    private ImageDto convertToImageDto(Image image) {
        return ImageDto.builder()
                .id(image.getId())
                .imageName(image.getImageName())
                .imageType(image.getImageType())
                .build();
    }


    private ItemDto newItemDto(Item item) {
        int imageCount = imageRepository.countByItemId(item.getId());

        // Map stocks to DTO
        List<ItemStockDto> stockDtos = item.getStocks().stream()
                .map(stock -> ItemStockDto.builder()
                        .color(stock.getColor())
                        .size(stock.getSize())
                        .quantity(stock.getQuantity())
                        .build())
                .toList();


        return ItemDto.builder()
                .id(item.getId())
                .name(item.getName())
                .description(item.getDescription())
                .gender(item.getGender())
                .material(item.getMaterial())
                .price(item.getPrice())
                .discountPercentage(item.getDiscountPercentage())
                .rating(item.getRating())
                .category(item.getCategory())
                .popular(item.isPopular())
                .stocks(stockDtos)
                .imageCount(imageCount)
                .build();
    }
}
