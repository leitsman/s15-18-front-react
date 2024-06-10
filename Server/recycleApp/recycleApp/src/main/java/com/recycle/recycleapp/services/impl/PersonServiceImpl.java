package com.recycle.recycleapp.services.impl;

import com.recycle.recycleapp.dtos.PersonDTO;
import com.recycle.recycleapp.entities.*;
import com.recycle.recycleapp.exceptions.PersonNotFoundException;
import com.recycle.recycleapp.exceptions.RecycleCenterNotFoundException;
import com.recycle.recycleapp.repositories.*;
import com.recycle.recycleapp.role.Role;
import com.recycle.recycleapp.role.RoleRepository;
import com.recycle.recycleapp.services.IPersonService;
import com.recycle.recycleapp.user.UserEntity;
import com.recycle.recycleapp.user.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.hibernate.service.spi.ServiceException;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
@RequiredArgsConstructor
public class PersonServiceImpl implements IPersonService {

    private final PersonRepository personRepository;
    private final UserRepository userRepository;
    private final RecycleCenterRepo recycleCenterRepository;
    private final UserRoleRepository userRoleRepository;
    private final RoleRepository roleRepository;
    private final AddressRepository addressRepository;

    @Override
    public PersonDTO save(PersonDTO personDTO, Authentication authentication) {
        UserEntity user = ((UserEntity) authentication.getPrincipal());

        Person personRepo =  personRepository.save(Person.builder()
                .idPerson(user.getId())
                .firstName(personDTO.getFirstName())
                .lastName(personDTO.getLastName())
                .dni(personDTO.getDni())
                .address(null)
                .recycleCenter(null) // is assigned in another service
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

        user.setActive(true);
        userRepository.save(user);

        return personDTO;

    }

    @SneakyThrows
    public void assignRcToReceiver(Integer personId, Long recycleCenterId) {
        Person person = personRepository.findById(personId)
                .orElseThrow(() -> new PersonNotFoundException("No se encontró la persona con id " + personId));

        UserRole userRole = userRoleRepository.findByUserId(personId);
        if(userRole == null) throw new ServiceException("User does not have a role assigned");

        Role role = roleRepository.findById(userRole.getRoleId()).orElseThrow(() -> new ServiceException("Role not found"));

        // Verificar si la persona tiene el rol RECEIVER
        if (!role.getName().equals("ROLE_RECEIVER")) {
            throw new ServiceException("Sólo puedes asignar un centro de reciclaje a una persona con role RECEIVER");
        }

        RecycleCenter recycleCenter = recycleCenterRepository.findById(recycleCenterId)
                .orElseThrow(() -> new RecycleCenterNotFoundException("No se encontro el centro de reciclaje con id " + recycleCenterId));

        person.setRecycleCenter(recycleCenter);
        personRepository.save(person);
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

    public Optional<Person> getByDNI(String dni) {
        return personRepository.findByDni(dni);
    }
}
