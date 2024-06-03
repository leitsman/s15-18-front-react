package com.recycle.recycleapp.services;

import com.recycle.recycleapp.entities.Person;

import java.util.List;
import java.util.Optional;

public interface IPersonService {


    Person save(Person person);

    List<Person> getAll();

    Optional<Person> getById(Long id);

    Person update(Long id, Person person) throws Exception;

    void delete(Long id);


}
