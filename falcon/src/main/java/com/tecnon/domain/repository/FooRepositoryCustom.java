package com.tecnon.domain.repository;

import java.util.List;

import com.tecnon.domain.entity.Foo;

/**
 * @author irlampert1
 */
public interface FooRepositoryCustom {

	public List<Foo> customFinderBySomeParam(String param);
}
