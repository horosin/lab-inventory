package com.horosin.inventoryapi.repository;

import com.horosin.inventoryapi.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository("userRepository")
public interface UserRepository extends CrudRepository<User, Long> {
    User findByEmail(String email);
    Optional<User> findById(Long sampleId);

}