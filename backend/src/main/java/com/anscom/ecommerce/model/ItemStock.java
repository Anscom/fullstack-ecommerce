package com.anscom.ecommerce.model;

import com.anscom.ecommerce.constant.MeasurementEnum;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "item_stock")
@Getter
@Setter
public class ItemStock {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String color; // e.g., "Red", "Blue"

    @Enumerated(EnumType.STRING)
    private MeasurementEnum size; // XS, S, M, L, XL

    private int quantity; // stock count

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "item_id")
    private Item item;
}
