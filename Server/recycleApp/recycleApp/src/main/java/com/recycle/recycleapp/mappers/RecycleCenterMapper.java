package com.recycle.recycleapp.mappers;


import com.recycle.recycleapp.dtos.AddressDTO;
import com.recycle.recycleapp.dtos.RecycleCenterDTO;
import com.recycle.recycleapp.entities.Address;
import com.recycle.recycleapp.entities.RecycleCenter;
import org.springframework.beans.factory.annotation.Autowired;

public class RecycleCenterMapper {


    public static RecycleCenterDTO toDTO(RecycleCenter recyclingCenter) {

        return new RecycleCenterDTO(
                recyclingCenter.getIdRecycleCenter(),
                recyclingCenter.getName(),
                recyclingCenter.getDescription(),
                recyclingCenter.getBusinessHours(),
                recyclingCenter.getCity(),
                recyclingCenter.getAddress()
        );
    }

    public static RecycleCenter toEntity(RecycleCenterDTO recycleCenterDTO) {
        return RecycleCenter.builder()
                .name(recycleCenterDTO.getName())
                .description(recycleCenterDTO.getDescription())
                .businessHours(recycleCenterDTO.getBusinessHours())
                .city(recycleCenterDTO.getCity())
                .address(recycleCenterDTO.getAddress())
                .build();
    }
}
