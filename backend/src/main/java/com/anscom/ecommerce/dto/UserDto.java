package com.anscom.ecommerce.dto;

import com.anscom.ecommerce.constant.RoleEnum;
import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {
    private Long id;
    private String username;
    private String email;
    private String password;
    private String resetPasswordToken;
    private Instant resetPasswordTokenExpiry;
    private RoleEnum role;
}
