package com.tecnon.domain.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.tecnon.domain.entity.Customer;

/**
 * @author irlampert1
 */
@Repository
public interface CustomerRepository 
	extends CrudRepository<Customer, Long> {
}
