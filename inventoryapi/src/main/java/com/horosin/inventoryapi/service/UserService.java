package com.horosin.inventoryapi.service;


import com.horosin.inventoryapi.model.User;

public interface UserService {
    public User findUserByEmail(String email);
    public void saveUser(User user);
}