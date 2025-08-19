package com.anscom.ecommerce.controller;

import com.anscom.ecommerce.dto.OrderDto;
import com.anscom.ecommerce.model.Payment;
import com.anscom.ecommerce.service.OrderService;
import com.anscom.ecommerce.service.StripeService;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/payment")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173") // frontend Vite dev server
public class StripeController {

    private final StripeService stripeService;
    private final OrderService orderService;

    @PostMapping("/create-payment")
    public ResponseEntity<?> createPaymentIntent(@RequestBody Payment request) {
        try {
            PaymentIntent intent = stripeService.createPaymentIntent(request);
            return ResponseEntity.ok(intent.getClientSecret()); // Send clientSecret to frontend
        } catch (StripeException e) {
            return ResponseEntity.badRequest().body("Stripe Error: " + e.getMessage());
        }
    }
    @PostMapping("/confirm-order/{paymentIntentId}")
    public ResponseEntity<?> confirmOrder(
            @PathVariable String paymentIntentId,
            @RequestBody OrderDto orderDto) {
        try {
            PaymentIntent paymentIntent = stripeService.retrievePaymentIntent(paymentIntentId);

            if ("succeeded".equals(paymentIntent.getStatus())) {
                // Save the order only if payment succeeded
                OrderDto savedOrder = orderService.createOrder(orderDto);
                return ResponseEntity.ok(savedOrder);
            } else {
                return ResponseEntity.badRequest().body("Payment not successful yet.");
            }
        } catch (StripeException e) {
            return ResponseEntity.badRequest().body("Stripe Error: " + e.getMessage());
        }
    }
}