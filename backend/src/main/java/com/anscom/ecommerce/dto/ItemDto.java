package com.anscom.ecommerce.dto;

import com.anscom.ecommerce.constant.GenderEnum;
import com.anscom.ecommerce.model.Image;
import com.anscom.ecommerce.model.ItemStock;
import jakarta.persistence.*;
import lombok.Builder;

import java.util.ArrayList;
import java.util.List;

@Builder
public class ItemDto {
    private Long id;

    private String name;
    private String description;

    private GenderEnum gender;

    private String material;
    private Long price;
    private Integer rating;
    private String category;
    private Double discountPercentage; // nullable if no discount
    private boolean popular; // true if admin marks it popular
    private int imageCount;

    private List<ItemStockDto> stocks = new ArrayList<>();

    private List<ImageDto> images = new ArrayList<>(); // Store multiple images

    public ItemDto() {
    }

    public ItemDto(Long id, String name, String description, GenderEnum gender, String material, Long price, Integer rating, String category, Double discountPercentage, boolean popular, int imageCount, List<ItemStockDto> stocks, List<ImageDto> images) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.gender = gender;
        this.material = material;
        this.price = price;
        this.rating = rating;
        this.category = category;
        this.discountPercentage = discountPercentage;
        this.popular = popular;
        this.imageCount = imageCount;
        this.stocks = stocks;
        this.images = images;
    }

    public int getImageCount() {
        return imageCount;
    }

    public void setImageCount(int imageCount) {
        this.imageCount = imageCount;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Double getDiscountPercentage() {
        return discountPercentage;
    }

    public void setDiscountPercentage(Double discountPercentage) {
        this.discountPercentage = discountPercentage;
    }

    public boolean isPopular() {
        return popular;
    }

    public void setPopular(boolean popular) {
        this.popular = popular;
    }

    public List<ImageDto> getImages() {
        return images;
    }

    public void setImages(List<ImageDto> images) {
        this.images = images;
    }

    public List<ItemStockDto> getStocks() {
        return stocks;
    }

    public void setStocks(List<ItemStockDto> stocks) {
        this.stocks = stocks;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Integer getRating() {
        return rating;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }

    public Long getPrice() {
        return price;
    }

    public void setPrice(Long price) {
        this.price = price;
    }

    public String getMaterial() {
        return material;
    }

    public void setMaterial(String material) {
        this.material = material;
    }

    public GenderEnum getGender() {
        return gender;
    }

    public void setGender(GenderEnum gender) {
        this.gender = gender;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
