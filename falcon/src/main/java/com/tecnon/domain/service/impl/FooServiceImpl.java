package com.tecnon.domain.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tecnon.domain.repository.FooRepository;
import com.tecnon.domain.service.FooService;

/**
 * @author irlampert1
 */
@Service
public final class FooServiceImpl 
	implements FooService {

	private FooRepository fooRepository;
	
	@Autowired
	public FooServiceImpl(FooRepository fooRepository) {
		this.fooRepository = fooRepository;
	}
	
}
