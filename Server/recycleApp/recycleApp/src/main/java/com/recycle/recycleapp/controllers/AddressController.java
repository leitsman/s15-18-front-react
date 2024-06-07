package com.recycle.recycleapp.controllers;


import com.recycle.recycleapp.entities.Address;
import com.recycle.recycleapp.services.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/addresses")
public class AddressController {


    private final AddressService addressService;

    @Autowired
    public AddressController(AddressService addressService) {
        this.addressService = addressService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Address>> getAllAddresses() {
        List<Address> addresses = addressService.getAllAddresses();
        return ResponseEntity.ok(addresses);
    }

    @GetMapping("/id")
    public ResponseEntity<Address> getAddressById(@RequestParam Long id) {
        Optional<Address> address = addressService.getAddressById(id);
        return address.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/create")
    public ResponseEntity<Address> createAddress(@RequestBody Address address) {
        Address createdAddress = addressService.createAddress(address);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdAddress);
    }

    @PutMapping("/update")
    public ResponseEntity<Address> updateAddress(@RequestBody Address address) {
        Address updatedAddress = addressService.updateAddress(address);
        if (updatedAddress != null) {
            return ResponseEntity.ok(updatedAddress);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete")
    public ResponseEntity<Void> deleteAddress(@RequestParam Long id) {
        boolean isRemoved = addressService.deleteAddress(id);
        if (isRemoved) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/city")
    public ResponseEntity<List<Address>> getAddressesByCity(@RequestParam String city) {
        List<Address> addresses = addressService.getAddressesByCity(city);
        return ResponseEntity.ok(addresses);
    }

    @GetMapping("/recycle-center/city")
    public ResponseEntity<List<Address>> getAddressesByRecycleCenterCity(@RequestParam String recycleCenterCity) {
        System.out.println(recycleCenterCity);
        List<Address> addresses = addressService.getAddressesByRecycleCenterCity(recycleCenterCity);

        return ResponseEntity.ok(addresses);
    }


}
