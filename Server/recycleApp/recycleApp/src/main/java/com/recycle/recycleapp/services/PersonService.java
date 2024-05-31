package com.recycle.recycleapp.services;

import com.recycle.recycleapp.entities.Person;

import java.util.List;
import java.util.Optional;

public interface PersonService {

    List<Person> listPersons();
    Person createPerson(String id, String firstName, String lastName, long dni);
    Optional<Person> personById(String id);
    void deletePerson(String id);
}
