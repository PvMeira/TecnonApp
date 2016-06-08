package com.tecnon.application.resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.tecnon.domain.entity.User;
import com.tecnon.domain.repository.UserRepository;
import com.tecnon.domain.service.UserService;

/**
 * @author irlampert1
 */
@RestController
@RequestMapping(path="/users")
public class UserResource {

private static final Logger LOGGER = LoggerFactory.getLogger(UserResource.class);
	
	public UserRepository userRepository;
	public UserService userService;
	
	@Autowired
	public UserResource(UserRepository userRepository, UserService userService) {
		this.userRepository = userRepository;
		this.userService = userService;
	}
	
	@RequestMapping(value="findall", method=RequestMethod.GET)
	public Iterable<User> searchAll(){
		return userRepository.findAll();		
	}
	
	@RequestMapping(method=RequestMethod.POST, 
			consumes=MediaType.APPLICATION_JSON_VALUE, 
			produces=MediaType.APPLICATION_JSON_VALUE) 
	public ResponseEntity<User> save(@RequestBody User user){
		if ("erro".equals(user.getLogin())){
			return new ResponseEntity<User>(HttpStatus.PRECONDITION_FAILED);
		}
		userRepository.save(user);		
		return new ResponseEntity<User>(HttpStatus.OK);
	}	
	
	@RequestMapping(value="/{id}",method=RequestMethod.DELETE)
	public void delete(@PathVariable("id") Long id){
		userRepository.delete(id);		
	}	
	
	@RequestMapping(value = "/{id}", method=RequestMethod.GET)
	public User searchById(@PathVariable Long id){
		return userRepository.findOne(id);
	}
	
}
