package com.example.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.session.SessionRegistry;
import org.springframework.security.core.session.SessionRegistryImpl;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    //Configurations One
   /* @Bean
    public SecurityFilterChain filterChain(HttpSecurity httpSecurity) throws Exception{
        return httpSecurity
//                .csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(auth -> auth
                    .requestMatchers("/v1/index2").permitAll()
                    .anyRequest().authenticated()
                )
                .formLogin(withDefaults())
                .build();
    } */

    //Configuration Two
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity httpSecurity) throws Exception {

        return httpSecurity
                .authorizeHttpRequests(auth -> {
                    auth.requestMatchers("/v1/index").permitAll();
                    auth.anyRequest().authenticated();
                })
                .formLogin(login -> {
                    login.successHandler(successHandler());
                })
                .sessionManagement(session -> session
                        .sessionCreationPolicy(SessionCreationPolicy.ALWAYS)
                        .invalidSessionUrl("/login")
                        .sessionConcurrency(currency -> currency
                                .maximumSessions(1)
                                .expiredUrl("/login")
                                .sessionRegistry(sessionRegistry())
                        )
                        .sessionFixation(fix -> fix
                                .migrateSession() //migrateSession - newSession - none
                        )
                )
                .build();

    }

    @Bean
    public SessionRegistry sessionRegistry() {
        return new SessionRegistryImpl();
    }

    public AuthenticationSuccessHandler successHandler() {
        return ((request, response, authentication) -> {
            response.sendRedirect("/v1/session");
        });
    }
}
