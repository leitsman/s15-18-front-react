package com.recycle.recycleapp.controllers;

import com.recycle.recycleapp.dtos.PersonDTO;
import com.recycle.recycleapp.entities.Person;
import com.recycle.recycleapp.services.impl.PersonServiceImpl;
import com.recycle.recycleapp.utils.Response;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/persons")
public class PersonController {

    @Autowired
    private final PersonServiceImpl personServiceImpl;

    //localhost:8080/api/persons/all
    @GetMapping(path = "/all")
    public ResponseEntity<?> getAll() {
        return new ResponseEntity<>(personServiceImpl.getAll(), HttpStatus.OK);
    }

    //localhost:8080/api/persons/
    @GetMapping(path = "/{id}")
    public ResponseEntity<Optional<Person>> getById(@PathVariable Integer id) {
        return ResponseEntity.ok().body(personServiceImpl.getById(id));

    }


    @PostMapping("/save")
    public ResponseEntity<Response> savePerson(@RequestBody PersonDTO person, Authentication authentication){
        System.out.println(person);
        personServiceImpl.save(person, authentication);
        Response response = new Response(true, HttpStatus.CREATED);
        return ResponseEntity.ok(response);

    }


    @PutMapping(path = "/update")
    public ResponseEntity<Person> updatePerson(@RequestBody PersonDTO person, Authentication authentication) throws Exception {
        Person updatePerson = personServiceImpl.update(person,authentication);
        return ResponseEntity.ok(updatePerson);

    }



}
