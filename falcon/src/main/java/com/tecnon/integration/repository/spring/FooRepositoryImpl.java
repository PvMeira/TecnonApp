package com.tecnon.integration.repository.spring;

import java.util.Arrays;
import java.util.List;

import com.tecnon.domain.entity.Foo;
import com.tecnon.domain.repository.FooRepositoryCustom;

/**
 * @author irlampert1
 */
public class FooRepositoryImpl 
	implements FooRepositoryCustom {

	@Override
	public List<Foo> customFinderBySomeParam(String param) {
		return (Arrays.asList(
			new Foo("Any :" + param, "123", "OOO"),
			new Foo("Any :" + param, "ABC", "PPP")));
	}

}
