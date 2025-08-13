package com.anscom.ecommerce.dto;

import com.anscom.ecommerce.constant.MeasurementEnum;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ItemStockDto {
    private Long id;
    private String color;
    private MeasurementEnum size;
    private int quantity;

    public ItemStockDto() {
    }

    public ItemStockDto(Long id, String color, MeasurementEnum size, int quantity) {
        this.id = id;
        this.color = color;
        this.size = size;
        this.quantity = quantity;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public MeasurementEnum getSize() {
        return size;
    }

    public void setSize(MeasurementEnum size) {
        this.size = size;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}