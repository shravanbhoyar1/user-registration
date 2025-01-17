package com.user_management.service;

import com.user_management.model.User;

public interface UserService {

	public User saveUser(User user);

	public User getUserByUserId(String userId);

}
