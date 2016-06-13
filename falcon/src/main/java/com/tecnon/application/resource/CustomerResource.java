package com.tecnon.application.resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tecnon.domain.entity.Customer;
import com.tecnon.domain.repository.CustomerRepository;

/**
 * @author irlampert1
 */
@RestController
@RequestMapping(path="/customers")
public class CustomerResource
	extends AbstractCrudResource<Customer, Long> {

	private CustomerRepository customerRepository;

	@Autowired
	public CustomerResource(CustomerRepository customerRepository) {
		super(customerRepository);
		this.customerRepository = customerRepository;
	}
	
}
