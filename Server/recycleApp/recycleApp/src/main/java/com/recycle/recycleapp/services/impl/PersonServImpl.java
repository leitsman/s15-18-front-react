package com.recycle.recycleapp.services.impl;

import com.recycle.recycleapp.entities.Person;
import com.recycle.recycleapp.repositories.PersonRepository;
import com.recycle.recycleapp.services.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PersonServImpl implements PersonService {

    @Autowired
    PersonRepository personRepository;

    @Override
    public List<Person> listPersons() {
        return personRepository.findAll();
    }

    @Override

    public Person createPerson(String id, String firstName, String lastName, long dni) {
        return null;
    }

    @Override
    public Optional<Person> personById(String id) {
        return personRepository.findById(id);
    }

    @Override
    public void deletePerson(String id) {
        personRepository.deleteById(id);
    }
}
