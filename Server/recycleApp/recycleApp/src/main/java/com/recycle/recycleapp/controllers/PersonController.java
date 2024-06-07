package com.recycle.recycleapp.controllers;

import com.recycle.recycleapp.entities.Person;
import com.recycle.recycleapp.services.impl.PersonServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/persons")
public class PersonController {


    private final PersonServiceImpl personServiceImpl;

    //localhost:8080/api/persons/all
    @GetMapping(path = "/all")
    public ResponseEntity<?> getAll() {
        return new ResponseEntity<>(personServiceImpl.getAll(), HttpStatus.OK);
    }

    //localhost:8080/api/persons/
    @GetMapping(path = "/{id}")
    public ResponseEntity<Optional<Person>> getById(@PathVariable Long id) {
        return ResponseEntity.ok().body(personServiceImpl.getById(id));

    }

    //localhost:8080/api/persons/save
    @PostMapping(path = "/save")
    public ResponseEntity<Person> savePerson(@RequestBody Person person) throws Exception {
        return new ResponseEntity<>(personServiceImpl.save(person), HttpStatus.CREATED);

    }
    //localhost:8080/api/persons/delete/
    @DeleteMapping(path = "/delete/{id}")
    public void deleteById(@PathVariable Long id){
        personServiceImpl.delete(id);
    }


    @PutMapping(path = "/update/{id}")
    public ResponseEntity<Person> updatePerson(@PathVariable ("id") Long id, @RequestBody Person person) throws Exception {
        Person updatePerson = personServiceImpl.update(id,person);
        return ResponseEntity.ok(updatePerson);

    }



}
