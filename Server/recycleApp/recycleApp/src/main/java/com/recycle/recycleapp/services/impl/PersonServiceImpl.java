package com.recycle.recycleapp.services.impl;

import com.recycle.recycleapp.entities.Person;
import com.recycle.recycleapp.exceptions.PersonNotFoundException;
import com.recycle.recycleapp.repositories.PersonRepository;
import com.recycle.recycleapp.services.IPersonService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@Service
public class PersonServiceImpl implements IPersonService {


    private final PersonRepository personRepository;


    @Override
    public Person save(Person person) {
        return personRepository.save(person);
    }

    @Override
    public List<Person> getAll() {
        return personRepository.findAll();
    }

    @Override
    public Optional<Person> getById(Long id) {
        return personRepository.findById(id);

    }

    @Override
    public Person update(Long id, Person person) throws Exception {

        return personRepository.findById(id).map(existingPerson -> {

            existingPerson.setFirstName(person.getFirstName());
            existingPerson.setLastName(person.getLastName());
            existingPerson.setDni(person.getDni());
            existingPerson.setTotalPoints(person.getTotalPoints());

            return personRepository.save(existingPerson);
        }).orElseThrow(() -> new PersonNotFoundException("Person not found with id: " + id));
    }


    @Override
    public void delete(Long id) {
        personRepository.deleteById(id);
    }


}
