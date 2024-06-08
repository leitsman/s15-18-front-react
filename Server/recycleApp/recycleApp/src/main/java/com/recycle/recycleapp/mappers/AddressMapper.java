package com.recycle.recycleapp.mappers;

import com.recycle.recycleapp.dtos.AddressDTO;
import com.recycle.recycleapp.dtos.OrganizationDTO;
import com.recycle.recycleapp.entities.Address;
import com.recycle.recycleapp.entities.Organization;

public class AddressMapper {


    public static AddressDTO toDTO(Address address) {
        return new AddressDTO(
                address.getRecycleCenter().getName(),
                address.getAddressName(),
                address.getPostalCode(),
                address.getLatitude(),
                address.getLongitude(),
                address.getCity(),
                address.getCountry(),
                address.getPhone()
        );
    }

    public static Address toEntity(AddressDTO addressDTO) {
        return Address.builder()
                .longitude(addressDTO.getLongitude())
                .phone(addressDTO.getPhone())
                .city(addressDTO.getCity())
                .country(addressDTO.getCountry())
                .postalCode(addressDTO.getPostalCode())
                .addressName(addressDTO.getAddressName())
                .latitude(addressDTO.getLatitude())
                .build();
    }
}
