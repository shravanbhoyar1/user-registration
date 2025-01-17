package com.user_management.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.user_management.exception.UserNotFoundException;
import com.user_management.model.User;
import com.user_management.service.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/saveUser")
	public ResponseEntity<?> saveUser(@RequestBody User user) {
		return new ResponseEntity<>(userService.saveUser(user), HttpStatus.CREATED);
	}
	
	@GetMapping("/{userId}")
	public ResponseEntity<?> getUserByUserId(@PathVariable String userId) {
		
		User user = userService.getUserByUserId(userId);
		if(user == null) {
			throw new UserNotFoundException("User not present with ID: " + userId);
		}
		return new ResponseEntity<>(user, HttpStatus.OK);
	}

	
}
