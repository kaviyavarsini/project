package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    UserRepository repo;

    @Autowired
    BCryptPasswordEncoder encoder;

    public String register(User user){

        if(repo.findByEmail(user.getEmail()).isPresent()){
            return "Email already exists";
        }

        user.setPassword(
            encoder.encode(user.getPassword())
        );

        repo.save(user);
        return "Registration successful";
    }

    public String login(String email,String password){

        User user = repo.findByEmail(email)
                .orElse(null);

        if(user==null){
            return "User not found";
        }

        if(encoder.matches(password,user.getPassword())){
            return "Login Successful";
        }

        return "Invalid Password";
    }

}
