package com.tecnon.application.main;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import com.tecnon.domain.entity.Foo;
import com.tecnon.domain.repository.FooRepository;

/**
 * @author irlampert1
 */
@Configuration
@EnableAutoConfiguration
@ComponentScan(basePackages= {
		"com.tecnon.application",
		"com.tecnon.domain",
		"com.tecnon.infrastructure"}, 
    lazyInit=true)
@SpringBootApplication
@SuppressWarnings("all")
public class Application {

//	private static final Logger LOGGER = LoggerFactory.getLogger(Application.class);
	
    public static void main(String[] args) {
        ApplicationContext ctx = SpringApplication.run(Application.class, args);
//        listBeanNames(ctx);
    }

	private static void listBeanNames(ApplicationContext ctx) {
		List<String> beanNames = Arrays.asList(ctx.getBeanDefinitionNames());
		beanNames.sort((bean1, bean2) -> bean1.compareTo(bean2));
		beanNames.forEach(beanName -> System.out.println(beanName));
	}

}
