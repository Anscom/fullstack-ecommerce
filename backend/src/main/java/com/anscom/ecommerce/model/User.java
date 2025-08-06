package com.anscom.ecommerce.model;

import com.anscom.ecommerce.constant.RoleEnum;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.Instant;

@Data
@Entity
@Table(name = "Users")
@NoArgsConstructor
public class User implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String username;
    @Column(unique = true, nullable = false)
    private String email;
    private String password;
    private String resetPasswordToken;
    private Instant resetPasswordTokenExpiry;
    @Enumerated(EnumType.STRING)
    private RoleEnum role;

}
