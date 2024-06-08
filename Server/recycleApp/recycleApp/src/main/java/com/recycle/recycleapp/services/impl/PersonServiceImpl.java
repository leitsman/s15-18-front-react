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
    public PersonDTO save(PersonDTO personDTO, Authentication authentication) {
        UserEntity user = ((UserEntity) authentication.getPrincipal());
        user.setActive(true);
        userRepository.save(user);


        Person personRepo =  personRepository.save(Person.builder()
                .idPerson(user.getId())
                .firstName(personDTO.getFirstName())
                .lastName(personDTO.getLastName())
                .dni(personDTO.getDni())
                .address(null)
                .build());

//        Address address =  addressRepository.save(
//                Address.builder()
//                        .city(personDTO.getAddress().getCity())
//                        .person(personRepo)
//                        .addressName(personDTO.getAddress().getAddressName())
//                        .phone(personDTO.getAddress().getPhone())
//                        .country(personDTO.getAddress().getCountry())
//                        .postalCode(personDTO.getAddress().getPostalCode())
//                        .latitude(personDTO.getAddress().getLatitude())
//                        .longitude(personDTO.getAddress().getLongitude())
//                        .build()
//
//        );


        Address address =  addressRepository.save(
                Address.builder()
                        .city(personDTO.getAddress().getCity())
                        .person(personRepo)
                        .addressName(personDTO.getAddress().getAddressName())
                        .phone(personDTO.getAddress().getPhone())
                        .country(personDTO.getAddress().getCountry())
                        .postalCode(personDTO.getAddress().getPostalCode())
                        .latitude(personDTO.getAddress().getLatitude())
                        .longitude(personDTO.getAddress().getLongitude())
                        .build()

        );

        return personDTO;



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

    @Override
    public void addPoints(Long points, Person person) {
        person.setTotalPoints(person.getTotalPoints()+points);
        personRepository.save(person);
    }

}
