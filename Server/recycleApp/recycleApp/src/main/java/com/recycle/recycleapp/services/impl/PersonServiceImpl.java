package com.recycle.recycleapp.services.impl;

import com.recycle.recycleapp.dtos.PersonDTO;
import com.recycle.recycleapp.entities.Address;
import com.recycle.recycleapp.entities.Person;
import com.recycle.recycleapp.exceptions.PersonNotFoundException;
import com.recycle.recycleapp.repositories.AddressRepository;
import com.recycle.recycleapp.repositories.PersonRepository;
import com.recycle.recycleapp.services.IPersonService;
import com.recycle.recycleapp.user.UserEntity;
import com.recycle.recycleapp.user.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@Service
public class PersonServiceImpl implements IPersonService {


    private final PersonRepository personRepository;
    private final UserRepository userRepository;

    private final AddressRepository addressRepository;

    @Override
    public void save(PersonDTO person, Authentication authentication) {
        UserEntity user = ((UserEntity) authentication.getPrincipal());
        user.setActive(true);
        userRepository.save(user);


        Person personRepo =  personRepository.save(Person.builder()
                .idPerson(user.getId())
                .firstName(person.getFirstName())
                .lastName(person.getLastName())
                .dni(person.getDni())
                .address(null)
                .build());

        Address address =  addressRepository.save(
                Address.builder()
                        .city(person.getAddress().getCity())
                        .person(personRepo)
                        .addressName(person.getAddress().getAddressName())
                        .phone(person.getAddress().getPhone())
                        .country(person.getAddress().getCountry())
                        .postalCode(person.getAddress().getPostalCode())
                        .latitude(person.getAddress().getLatitude())
                        .longitude(person.getAddress().getLongitude())
                        .build()

        );


    }

    @Override
    public List<Person> getAll() {
        return personRepository.findAll();
    }

    @Override
    public Optional<Person> getById(Integer id) {
        return personRepository.findById(id);

    }

    @Override
    public Person update(PersonDTO person, Authentication authentication) throws Exception {
        UserEntity user = (UserEntity) authentication.getPrincipal();
        return personRepository.findById(user.getId()).map(existingPerson -> {

            existingPerson.setFirstName(person.getFirstName());
            existingPerson.setLastName(person.getLastName());
            existingPerson.setIdPerson(user.getId());
            existingPerson.setDni(person.getDni());

            // FALTA IMPLEMENTAR EL UPDATE DEL ADREES

            return personRepository.save(existingPerson);
        }).orElseThrow(() -> new PersonNotFoundException("Person not found with id: " + user.getId()));
    }

}
