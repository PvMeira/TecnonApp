package com.tecnon.application.resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tecnon.domain.entity.User;
import com.tecnon.domain.repository.UserRepository;

/**
 * @author irlampert1
 */
@RestController
@RequestMapping(path="/users")
public class UserResource
	extends AbstractCrudResource<User, Long> {

	private UserRepository userRepository;
	
	@Autowired
	public UserResource(UserRepository userRepository) {
		super(userRepository);
		this.userRepository = userRepository;
	}
	
}
