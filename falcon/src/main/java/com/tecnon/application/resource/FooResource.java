package com.tecnon.application.resource;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author irlampert1
 */
@RestController
@RequestMapping("/foos")
public class FooResource {

	@RequestMapping(value="/", method=RequestMethod.GET)
	public String index() {
		return "Sprint boot is nice!";
	}
	
}
