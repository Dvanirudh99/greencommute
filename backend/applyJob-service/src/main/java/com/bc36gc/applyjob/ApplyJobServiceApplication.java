package com.bc36gc.applyjob;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class ApplyJobServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApplyJobServiceApplication.class, args);
	}
	@Configuration
	@EnableWebMvc
	public class WebConfig implements WebMvcConfigurer {
		@Override
		public void addCorsMappings(CorsRegistry registry) {
			registry.addMapping("/**").allowedOrigins("*").allowedHeaders("Access-Control-Allow-Origin")
					.exposedHeaders("Access-Control-Allow-Origin").allowedMethods("GET","POST","PUT","DELETE");
		}
	}
}
