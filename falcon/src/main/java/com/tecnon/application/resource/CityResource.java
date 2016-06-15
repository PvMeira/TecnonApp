package com.tecnon.application.resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tecnon.domain.entity.City;
import com.tecnon.domain.repository.CityRepository;

/**
 * @author irlampert1
 */
@RestController
@RequestMapping(path="/cities")
public class CityResource
	extends AbstractCrudResource<City, Long> {

	private CityRepository cityRepository;
	
	@Autowired
	public CityResource(CityRepository cityRepository) {
		super(cityRepository);
		this.cityRepository = cityRepository;
	}
	
}
