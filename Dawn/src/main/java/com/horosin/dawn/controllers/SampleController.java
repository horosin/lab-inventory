package com.horosin.dawn.controllers;

import com.horosin.dawn.model.Sample;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@RestController
public class SampleController {

    private List<Sample> samples = new ArrayList<>();
    private AtomicLong nextId = new AtomicLong();

    @GetMapping("/hello")
    public String getHelloMessage(){
        return "Hello World";
    }

    @PostMapping("/samples")
    @ResponseStatus(HttpStatus.CREATED)
    public Sample createNewSample(@RequestBody Sample sample) {

        // Give pledge next id
        sample.setId(nextId.incrementAndGet());

        samples.add(sample);
        return sample;
    }

    @GetMapping("/samples")
    public List<Sample> getAllSamples() {
        return samples;

    }

    @GetMapping("/samples/{id}")
    public Sample getSample(@PathVariable("id") long sampleId) {

        for (Sample sample : samples) {
            if (sample.getId() == sampleId) {
                return sample;
            }
        }

        throw new IllegalArgumentException();

    }

    @PostMapping("/samples/{id}")
    public Sample updateSample(
            @PathVariable("id") long sampleId,
            @RequestBody Sample newSample
    ) {

        for (Sample sample : samples) {
            if (sample.getId() == sampleId) {

                samples.remove(sample);
                newSample.setId(sampleId);
                samples.add(newSample);

                return newSample;
            }
        }

        throw new IllegalArgumentException();

    }

    // Exception handler for wrong requests
    @ResponseStatus(value = HttpStatus.BAD_REQUEST,
            reason = "Requested id not found")
    @ExceptionHandler(IllegalArgumentException.class)
    public void wrongIdHandler() {

    }
}
