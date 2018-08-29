package com.horosin.inventoryapi.controllers;

import com.horosin.inventoryapi.model.User;
import com.horosin.inventoryapi.repository.UserRepository;
import com.horosin.inventoryapi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class UserController {

    // This means to get the bean called userRepository
    // Which is auto-generated by Spring, we will use it to handle the data
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    @PostMapping("/users/add")
    @ResponseStatus(HttpStatus.CREATED)
    public User createNewUser(@RequestBody User user) {

        User userExists = userService.findUserByEmail(user.getEmail());
        if (userExists != null) {
            throw new IllegalArgumentException("Email is already used.");
        }

        userService.saveUser(user);
        return user;
    }

    @GetMapping("/users")
    public Iterable<User> getAllUsers() {
        return userRepository.findAll();

    }

    @GetMapping("/users/{id}")
    public User getUser(@PathVariable("id") Long userId) {

        Optional<User> user = userRepository.findById(userId);

        if (user.isPresent()) {
            return user.get();
        }

        throw new IllegalArgumentException();

    }

    @DeleteMapping("/users/{id}")
    public String removeUser(@PathVariable("id") Long userId) {

        Optional<User> user = userRepository.findById(userId);

        if (user.isPresent()) {

            userRepository.delete(user.get());

            return "{\"success\":1}";
        }

        throw new IllegalArgumentException("User of given id does not exist.");

    }

    // Exception handler for wrong requests
    @ExceptionHandler(IllegalArgumentException.class)
    protected ResponseEntity<Object> handleEntityNotFound(
            Exception ex) {
        String mess = ex.getMessage();
        return new ResponseEntity<>(mess, HttpStatus.BAD_REQUEST);
    }

}