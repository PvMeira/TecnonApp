package com.tecnon.domain.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.tecnon.domain.entity.City;

/**
 * @author irlampert1
 */
@Repository
public interface CityRepository 
	extends CrudRepository<City, Long> {

}
