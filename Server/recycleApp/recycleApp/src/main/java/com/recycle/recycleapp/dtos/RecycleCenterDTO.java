package com.recycle.recycleapp.dtos;


import com.recycle.recycleapp.entities.Address;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalTime;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class RecycleCenterDTO {

    private Long id;
    private String name;
    private String description;
    private String businessHours;
    private String city;
    private AddressDTO address;


}
