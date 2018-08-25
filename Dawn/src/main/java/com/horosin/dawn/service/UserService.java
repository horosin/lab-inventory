package com.horosin.dawn.service;


import com.horosin.dawn.model.User;

public interface UserService {
    public User findUserByEmail(String email);
    public void saveUser(User user);
}