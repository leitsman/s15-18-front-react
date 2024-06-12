package com.recycle.recycleapp.services.impl;

import com.recycle.recycleapp.entities.Address;
import com.recycle.recycleapp.repositories.AddressRepository;
import com.recycle.recycleapp.services.AddressService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class AddressServImplTest {

    @Autowired
    AddressRepository addressRepository;

    @Autowired
    AddressService addressService;
    @Test
    void getAddressesByRecycleCenterCity() {

       var listaAddress= addressService.getAddressesByRecycleCenterCity("Panama");
        for (Address addr:listaAddress
             ) {
            System.out.println(addr.getAddressName());
        }



    }
}