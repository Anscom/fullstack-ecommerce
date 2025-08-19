package com.anscom.ecommerce.service;

import com.anscom.ecommerce.constant.OrderStatus;
import com.anscom.ecommerce.dto.OrderDto;

import java.util.List;

public interface OrderService {
    OrderDto createOrder(OrderDto orderDto);
    OrderDto getOrderById(Long id);
    OrderDto updateOrderStatus(Long id, OrderStatus status);
    List<OrderDto> getOrdersByUser(Long userId);
    // 👇 New method
    List<OrderDto> getAllOrders();
}
