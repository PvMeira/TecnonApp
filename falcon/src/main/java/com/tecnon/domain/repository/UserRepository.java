package com.tecnon.domain.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.tecnon.domain.entity.User;

/**
 * @author irlampert1
 */
@Repository
public interface UserRepository
	extends CrudRepository<User, Long> {
}
