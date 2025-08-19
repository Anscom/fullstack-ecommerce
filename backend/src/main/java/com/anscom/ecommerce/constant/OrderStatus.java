package com.anscom.ecommerce.constant;

public enum OrderStatus {
    PENDING,    // order created, waiting for payment
    SHIPPED,    // shipped to customer
    COMPLETED,  // delivered to customer
    CANCELED    // canceled by user or admin
}
