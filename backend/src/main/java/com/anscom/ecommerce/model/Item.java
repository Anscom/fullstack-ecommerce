package com.anscom.ecommerce.model;

import com.anscom.ecommerce.constant.GenderEnum;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "item")
@Getter
@Setter
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String description;
    @Enumerated(EnumType.STRING)
    private GenderEnum gender;

    private String material;
    private Long price;
    private Integer rating;
    private String category;
    private Double discountPercentage; // nullable if no discount
    private boolean popular; // true if admin marks it popular

    @OneToMany(mappedBy = "item", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ItemStock> stocks = new ArrayList<>();

    @OneToMany(mappedBy = "item", cascade = CascadeType.ALL)
    private List<Image> images = new ArrayList<>(); // Store multiple images

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        Item item = (Item) o;
        return popular == item.popular && Objects.equals(id, item.id) && Objects.equals(name, item.name) && Objects.equals(description, item.description) && gender == item.gender && Objects.equals(material, item.material) && Objects.equals(price, item.price) && Objects.equals(rating, item.rating) && Objects.equals(category, item.category) && Objects.equals(discountPercentage, item.discountPercentage) && Objects.equals(stocks, item.stocks) && Objects.equals(images, item.images);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, description, gender, material, price, rating, category, discountPercentage, popular, stocks, images);
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public GenderEnum getGender() {
        return gender;
    }

    public void setGender(GenderEnum gender) {
        this.gender = gender;
    }

    public String getMaterial() {
        return material;
    }

    public void setMaterial(String material) {
        this.material = material;
    }

    public Long getPrice() {
        return price;
    }

    public void setPrice(Long price) {
        this.price = price;
    }

    public Integer getRating() {
        return rating;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
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

    public List<ItemStock> getStocks() {
        return stocks;
    }

    public void setStocks(List<ItemStock> stocks) {
        this.stocks = stocks;
    }

    public List<Image> getImages() {
        return images;
    }

    public void setImages(List<Image> images) {
        this.images = images;
    }
}
