package com.tecnon.domain.repository;

import org.springframework.data.repository.CrudRepository;

import com.tecnon.domain.entity.Foo;

/**
 * @author irlampert1
 */
public interface FooRepository
	extends FooRepositoryCustom, CrudRepository<Foo, Long> {
}
