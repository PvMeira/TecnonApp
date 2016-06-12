package com.tecnon.application.resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tecnon.domain.entity.User;
import com.tecnon.domain.repository.UserRepository;
import com.tecnon.domain.service.UserService;

/**
 * @author irlampert1
 */
@RestController
@RequestMapping(path="/users")
public class UserResource
	extends AbstractCrudResource<User, Long> {

	public UserRepository userRepository;
	public UserService userService;
	
	@Autowired
	public UserResource(UserRepository userRepository, UserService userService) {
		super(userRepository);
		this.userRepository = userRepository;
		this.userService = userService;
	}
	
}
