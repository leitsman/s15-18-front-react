package com.recycle.recycleapp.dtos;

import com.recycle.recycleapp.entities.Address;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PersonDTO {
    private String firstName;
    private String lastName;
    private String dni;
    private Address address;
}
