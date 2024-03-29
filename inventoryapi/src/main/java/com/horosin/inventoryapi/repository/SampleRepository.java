package com.horosin.inventoryapi.repository;


import com.horosin.inventoryapi.model.Sample;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;


public interface SampleRepository extends CrudRepository<Sample, Long> {
    Optional<Sample> findById(Integer sampleId);

    boolean existsById(Integer sampleId);
}
