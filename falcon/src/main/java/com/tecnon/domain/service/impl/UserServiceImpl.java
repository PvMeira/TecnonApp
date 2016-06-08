package com.tecnon.domain.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tecnon.domain.repository.UserRepository;
import com.tecnon.domain.service.UserService;

/**
 * @author irlampert1
 */
@Service
public class UserServiceImpl 
	implements UserService {

	private UserRepository userRepository;

	@Autowired
	public UserServiceImpl(UserRepository userRepository) {
		this.userRepository = userRepository;
	}
	
}
