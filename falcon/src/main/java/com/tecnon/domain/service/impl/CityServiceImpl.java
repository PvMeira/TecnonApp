package com.tecnon.domain.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tecnon.domain.repository.CityRepository;
import com.tecnon.domain.service.CityService;

/**
 * @author irlampert1
 */
@Service
public class CityServiceImpl 
	implements CityService {

	private CityRepository repository;
	
	@Autowired
	public CityServiceImpl(CityRepository repository) {
		this.repository = repository;
	}
	
}
