package com.siat.web.board;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000") // 클라이언트(리액트 앱) 주소 설정
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // 허용할 HTTP 메서드 설정
                .allowedHeaders("*") // 허용할 헤더 설정
                .allowCredentials(true) // Credentials 허용 (예: 쿠키)
                .maxAge(3600); // Preflight 요청 결과를 캐싱할 시간 설정
    }
}