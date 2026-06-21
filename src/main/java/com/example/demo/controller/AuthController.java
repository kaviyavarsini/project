package com.example.demo.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entity.User;
import com.example.demo.service.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    @Autowired
    UserService service;

    @PostMapping("/register")
    public String register(
            @RequestBody User user){

        return service.register(user);
    }

    @PostMapping("/login")
    public String login(
            @RequestBody Map<String,String> request){

        return service.login(
                request.get("email"),
                request.get("password")
        );
    }

}
