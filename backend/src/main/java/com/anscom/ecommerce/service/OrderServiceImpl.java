package com.anscom.ecommerce.service;

import com.anscom.ecommerce.constant.OrderStatus;
import com.anscom.ecommerce.dto.OrderDto;
import com.anscom.ecommerce.dto.OrderItemDto;
import com.anscom.ecommerce.model.Item;
import com.anscom.ecommerce.model.Order;
import com.anscom.ecommerce.model.OrderItem;
import com.anscom.ecommerce.model.User;
import com.anscom.ecommerce.repository.ItemRepository;
import com.anscom.ecommerce.repository.OrderRepository;
import com.anscom.ecommerce.repository.UserRepository;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Log4j2
public class OrderServiceImpl implements OrderService{
    private final OrderRepository orderRepository;
    private final UserRepository userRepository;
    private final ItemRepository itemRepository;

    public OrderServiceImpl(OrderRepository orderRepository, UserRepository userRepository, ItemRepository itemRepository) {
        this.orderRepository = orderRepository;
        this.userRepository = userRepository;
        this.itemRepository = itemRepository;
    }

    @Override
    public OrderDto createOrder(OrderDto orderDto) {
        User user = userRepository.findById(orderDto.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found"));

        Order order = new Order();
        order.setUser(user);
        order.setStatus(OrderStatus.PENDING);

        List<OrderItem> orderItems = orderDto.getItems().stream().map(dto -> {
            Item product = itemRepository.findById(dto.getProductId())
                    .orElseThrow(() -> new RuntimeException("Product not found: " + dto.getProductId()));

            OrderItem orderItem = new OrderItem();
            orderItem.setOrder(order);
            orderItem.setProduct(product);
            orderItem.setQuantity(dto.getQuantity());
            orderItem.setPrice(Double.valueOf(product.getPrice())); // snapshot price

            return orderItem;
        }).collect(Collectors.toList());

        order.setItems(orderItems);

        double totalPrice = orderItems.stream()
                .mapToDouble(i -> i.getPrice() * i.getQuantity())
                .sum();
        order.setTotalPrice(totalPrice);

        Order savedOrder = orderRepository.save(order);

        return mapToDto(savedOrder);
    }

    @Override
    public OrderDto getOrderById(Long id) {
        Order order = orderRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Order not found"));
        return mapToDto(order);
    }

    @Override
    public OrderDto updateOrderStatus(Long id, OrderStatus status) {
        Order order = orderRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Order not found"));
        order.setStatus(status);
        Order savedOrder = orderRepository.save(order); // make sure to save
        return mapToDto(savedOrder);
    }

    @Override
    public List<OrderDto> getOrdersByUser(Long userId) {
        return orderRepository.findByUserId(userId)
                .stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }

    private OrderDto mapToDto(Order order) {
        List<OrderItemDto> itemDtos = order.getItems().stream()
                .map(i -> new OrderItemDto(i.getProduct().getId(), i.getQuantity()))
                .collect(Collectors.toList());

        return new OrderDto(
                order.getId(),
                order.getUser().getId(),
                itemDtos,
                order.getStatus(),
                order.getTotalPrice()
        );    }

    @Override
    public List<OrderDto> getAllOrders() {
        return orderRepository.findAll()
                .stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }

}
