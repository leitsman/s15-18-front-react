package com.recycle.recycleapp.services.impl;


import com.recycle.recycleapp.entities.Address;
import com.recycle.recycleapp.repositories.AddressRepository;
import com.recycle.recycleapp.services.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class AddressServImpl implements AddressService {


    private final AddressRepository addressRepository;

    @Autowired
    public AddressServImpl(AddressRepository addressRepository) {
        this.addressRepository = addressRepository;
    }


    @Override
    public List<Address> getAllAddresses() {
        return addressRepository.findAll();
    }

    @Override
    public Optional<Address> getAddressById(Long id) {
        return addressRepository.findById(id);
    }

    @Override
    public Address createAddress(Address address) {
        return addressRepository.save(address);
    }

    @Override
    public List<Address> getAddressesByCity(String city) {
        return addressRepository.findByCity(city);
    }

    @Override
    public List<Address> getAddressesByRecycleCenterCity(String recycleCenterCity) {
        return addressRepository.findByRecycleCenter_City(recycleCenterCity);
    }

    @Override
    public Address updateAddress(Address address) {
        if (addressRepository.existsById(address.getAddressId())) {
            return addressRepository.save(address);
        } else {
            return null;
        }
    }

    @Override
    public boolean deleteAddress(Long id) {
        if (addressRepository.existsById(id)) {
            addressRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }

}

