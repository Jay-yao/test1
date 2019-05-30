package com.ds.sys.controller;

import org.apache.ibatis.session.SqlSessionFactory;
import org.junit.Test;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class SpringConfig {
	@Test
	public void Test1() {
		 ClassPathXmlApplicationContext cps = new ClassPathXmlApplicationContext("spring-configs.xml");
		 System.out.println(cps);
		 Object bean = cps.getBean("sqlSessionFactory",SqlSessionFactory.class);
		 System.out.println(bean);
		 cps.close();
	}
}
