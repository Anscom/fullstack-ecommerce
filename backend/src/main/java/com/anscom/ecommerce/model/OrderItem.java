package com.anscom.ecommerce.model;

import jakarta.persistence.*;

@Entity
@Table(name = "order_items")
public class OrderItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Link back to order
    @ManyToOne
    @JoinColumn(name = "order_id", nullable = false)
    private Order order;

    // Product reference
    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false)
    private Item product;

    private Integer quantity;

    private Double price; // snapshot of price when ordered

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }

    public Item getProduct() {
        return product;
    }

    public void setProduct(Item product) {
        this.product = product;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }
}
