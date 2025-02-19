package org.sample.Recipe_backend.controllers;

import org.sample.Recipe_backend.models.User;
import org.sample.Recipe_backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/users")

public class UserController {
	
	 @Autowired
	    private UserRepository userRepository;

	    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

	    @PostMapping("/register")
	    public ResponseEntity<?> registerUser(@RequestBody User user) {
	        if (userRepository.findByEmail(user.getEmail()) != null) {
	            return ResponseEntity.status(400).body("User already exists.");
	        }

	        // Hash the password before saving
	        user.setPassword(passwordEncoder.encode(user.getPassword()));

	        userRepository.save(user);
	        return ResponseEntity.ok("User registered successfully!");
	    }

	    // You can add a sign-in method here if needed in the future.
	}
