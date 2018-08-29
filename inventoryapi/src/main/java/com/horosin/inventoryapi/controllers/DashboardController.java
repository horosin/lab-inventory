package com.horosin.inventoryapi.controllers;

import com.horosin.inventoryapi.repository.SampleRepository;
import com.horosin.inventoryapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/dashboard")
public class DashboardController {


    @Autowired
    private SampleRepository sampleRepository;

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/stats")
    public String getStats() {

        Long userCount = userRepository.count();
        Long sampleCount = sampleRepository.count();


        return "{ " +
                "\"users\": " + userCount.toString() + "," +
                "\"samples\": " + sampleCount.toString() +
                "}";
    }

}
