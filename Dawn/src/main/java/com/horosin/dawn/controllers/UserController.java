package com.horosin.dawn.controllers;

import com.horosin.dawn.model.User;
import com.horosin.dawn.repository.UserRepository;
import com.horosin.dawn.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class UserController {
    // TODO: Good error handling

    // This means to get the bean called userRepository
    // Which is auto-generated by Spring, we will use it to handle the data
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    @PostMapping("/users")
    @ResponseStatus(HttpStatus.CREATED)
    public User createNewUser(@RequestBody User user) {

        User userExists = userService.findUserByEmail(user.getEmail());
        if (userExists != null) {
            throw new IllegalArgumentException();
        }

        userService.saveUser(user);
        return user;
    }

    @GetMapping("/users")
    public Iterable<User> getAllUsers() {
        return userRepository.findAll();

    }
//
//    @GetMapping("/users/{id}")
//    public User getUser(@PathVariable("id") Integer userId) {
//
//        Optional<User> user = userRepository.findById(userId);
//
//        if(user.isPresent()) {
//            return user.get();
//        }
//
//        throw new IllegalArgumentException();
//
//    }
//
//    @PostMapping("/users/{id}")
//    public User updateUser(
//            @PathVariable("id") Integer userId,
//            @RequestBody User newUser
//    ) {
//
//        if(!userRepository.existsById(userId)) {
//            throw new IllegalArgumentException();
//        }
//
//        newUser.setId(userId);
//        userRepository.save(newUser);
//
//        return newUser;
//    }

}