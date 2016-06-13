package com.tecnon.application.main;

import java.util.Arrays;
import java.util.List;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

/**
 * @author irlampert1
 */
@Configuration
@EnableAutoConfiguration
@ComponentScan(basePackages= {
		"com.tecnon.application",
		"com.tecnon.domain",
		"com.tecnon.integration"}, 
    lazyInit=true)
@SpringBootApplication
@SuppressWarnings("all")
public class Application {

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
