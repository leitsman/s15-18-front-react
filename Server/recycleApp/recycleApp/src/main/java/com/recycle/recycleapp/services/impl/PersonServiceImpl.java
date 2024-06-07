package com.recycle.recycleapp.services.impl;

import com.recycle.recycleapp.dtos.PersonDTO;
import com.recycle.recycleapp.entities.Person;
import com.recycle.recycleapp.exceptions.PersonNotFoundException;
import com.recycle.recycleapp.repositories.PersonRepository;
import com.recycle.recycleapp.services.IPersonService;
import com.recycle.recycleapp.user.UserEntity;
import lombok.AllArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@Service
public class PersonServiceImpl implements IPersonService {


    private final PersonRepository personRepository;


    @Override
    public void save(PersonDTO person, Authentication authentication) {
        UserEntity user = ((UserEntity) authentication.getPrincipal());
        personRepository.save(Person.builder()
                .idPerson(Long.valueOf(user.getId()))
                .firstName(person.getFirstName())
                .lastName(person.getLastName())
                .dni(person.getDni())
                .build());
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
