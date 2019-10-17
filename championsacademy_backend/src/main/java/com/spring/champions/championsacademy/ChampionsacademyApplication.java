package com.spring.champions.championsacademy;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@ComponentScan(basePackages = "com.spring.champions")
public class ChampionsacademyApplication {

	public static void main(String[] args) {
		SpringApplication.run(ChampionsacademyApplication.class, args);
	}


//	@RestController
//	public class VideoController2 {
//
//		@GetMapping(path = "/videos", produces = "application/json")
//		public String getAllVideos() {
//
//			return "hello";
//		}

//	}
}
