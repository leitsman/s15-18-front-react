package com.recycle.recycleapp.services;


import com.recycle.recycleapp.entities.Address;

import java.util.List;
import java.util.Optional;

public interface AddressService {


    List<Address> getAllAddresses();

    Optional<Address> getAddressById(Long id);

    Address createAddress(Address address);

    List<Address> getAddressesByCity(String city);

    List<Address> getAddressesByRecycleCenterCity(String city);

}
