package com.example.maven;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MavenApplication {

	public static void main(String[] args) {
		SpringApplication.run(MavenApplication.class, args);
	}

	@GetMapping("/")
	public String hellow() {
		return "Hello world";
	}
}
