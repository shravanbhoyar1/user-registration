package com.user_management.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.user_management.model.User;

public interface UserRepository extends JpaRepository<User,Long> {

	User findByUsername(String userName);

}
