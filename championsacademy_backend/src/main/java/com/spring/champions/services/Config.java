<<<<<<< HEAD:championsacademy_backend/src/main/java/com/spring/champions/services/Config.java
package com.spring.champions.services;

import org.springframework.context.annotation.Bean;
import org.springframework.oxm.jaxb.Jaxb2Marshaller;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.oxm.jaxb.Jaxb2Marshaller;

@Configuration
public class Config {


    /**
     * d
     * @return
     */
    @Bean
    public Jaxb2Marshaller marshaller() {
        Jaxb2Marshaller marshaller = new Jaxb2Marshaller();
        marshaller.setPackagesToScan("com.spring.champions.schemas");
        return marshaller;
    }
}
=======
package com.spring.champions.services;

import org.springframework.context.annotation.Bean;
import org.springframework.oxm.jaxb.Jaxb2Marshaller;

import org.springframework.context.annotation.Configuration;

@Configuration
public class Config {


    /**
     * d
     * @return
     */
    @Bean
    public Jaxb2Marshaller marshaller() {
        Jaxb2Marshaller marshaller = new Jaxb2Marshaller();
        marshaller.setPackagesToScan("com.spring.champions.schemas");
        return marshaller;
    }
}
>>>>>>> master:championsacademy/src/main/java/com/spring/champions/services/Config.java
