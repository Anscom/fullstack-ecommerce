package com.anscom.ecommerce.service;

import com.anscom.ecommerce.constant.MeasurementEnum;
import com.anscom.ecommerce.dto.ImageDto;
import com.anscom.ecommerce.dto.ItemDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface ItemService {
    ItemDto getItemById(long id);

    Page<ItemDto> getItems(Pageable pageable, MeasurementEnum measurement, String color, Long minPrice, Long maxPrice, String keyword, String category);
    ItemDto saveItem(ItemDto itemDto, MultipartFile[] imageFiles);
    List<ImageDto> getImagesByItemId(Long itemId);
    ItemDto updateItem(Long itemId, ItemDto itemDto, MultipartFile[] imageFiles);
    void deleteItem(Long itemId);
    List<ItemDto> getAllItems();
}
