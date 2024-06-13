package com.recycle.recycleapp.services;

import com.recycle.recycleapp.dtos.PersonDTO;
import com.recycle.recycleapp.entities.Person;
import org.springframework.security.core.Authentication;

import java.nio.file.attribute.UserPrincipalNotFoundException;
import java.util.List;
import java.util.Optional;

public interface IPersonService {


    PersonDTO save(PersonDTO person, Authentication authentication);

    List<Person> getAll();

    Optional<Person> getById(Integer id);

    Person update( PersonDTO person, Authentication authentication) throws Exception;

    void addPoints(Long points, Person person);

    Person findByToken(Authentication authentication) throws UserPrincipalNotFoundException;


}
