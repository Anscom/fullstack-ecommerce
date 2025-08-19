package com.anscom.ecommerce.controller;

import com.anscom.ecommerce.constant.OrderStatus;
import com.anscom.ecommerce.dto.OrderDto;
import com.anscom.ecommerce.service.OrderService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/orders")
@CrossOrigin(origins = "http://localhost:5173") // adjust if frontend URL changes
public class OrderController {

    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    // ✅ Create new order
    @PostMapping("/create-order")
    public ResponseEntity<OrderDto> createOrder(@RequestBody OrderDto orderDto) {
        OrderDto savedOrder = orderService.createOrder(orderDto);
        return ResponseEntity.ok(savedOrder);
    }

    // ✅ Get order by ID
    @GetMapping("/{id}")
    public ResponseEntity<OrderDto> getOrderById(@PathVariable Long id) {
        OrderDto order = orderService.getOrderById(id);
        return ResponseEntity.ok(order);
    }

    // ✅ Get all orders for a user
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<OrderDto>> getOrdersByUser(@PathVariable Long userId) {
        List<OrderDto> orders = orderService.getOrdersByUser(userId);
        return ResponseEntity.ok(orders);
    }

    // ✅ Get all orders (Admin use only)
    @GetMapping("/allorders")
    public ResponseEntity<List<OrderDto>> getAllOrders() {
        List<OrderDto> orders = orderService.getAllOrders();
        return ResponseEntity.ok(orders);
    }

    @PutMapping("/{id}/status")
    public ResponseEntity<OrderDto> updateOrderStatus(
            @PathVariable Long id,
            @RequestParam OrderStatus status) { // admin passes status as query param
        OrderDto updatedOrder = orderService.updateOrderStatus(id, status);
        return ResponseEntity.ok(updatedOrder);
    }


}
