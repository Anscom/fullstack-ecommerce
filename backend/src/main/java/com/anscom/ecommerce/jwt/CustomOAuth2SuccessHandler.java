package com.anscom.ecommerce.jwt;

import com.anscom.ecommerce.constant.RoleEnum;
import com.anscom.ecommerce.exception.RoleException;
import com.anscom.ecommerce.model.User;
import com.anscom.ecommerce.repository.UserRepository;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.Optional;

@Component
@RequiredArgsConstructor
public class CustomOAuth2SuccessHandler implements AuthenticationSuccessHandler {

    private final UserRepository userRepository; // Assuming you save users
    private final JwtUtils jwtUtils;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request,
                                        HttpServletResponse response,
                                        Authentication authentication) throws IOException, ServletException {

        OAuth2User oAuth2User = (OAuth2User) authentication.getPrincipal();

        // Extract email
        String email = oAuth2User.getAttribute("email");
        String username = oAuth2User.getAttribute("name");
        RoleEnum role = oAuth2User.getAttribute("role");

        // Save to DB if not exists
        Optional<User> userOpt = userRepository.findByEmail(email);
        if (userOpt.isEmpty()) {
            User user = new User();
            user.setRole(role);
            user.setEmail(email);
            user.setUsername(username);
            userRepository.save(user);
        }


        // Generate JWT token
        String token = jwtUtils.generateTokenFromUsername(email);

        // Redirect to frontend with token as query param
        String redirectUrl = "http://localhost:5173/oauth2/success?token=" + token;
        response.sendRedirect(redirectUrl);
    }
}
