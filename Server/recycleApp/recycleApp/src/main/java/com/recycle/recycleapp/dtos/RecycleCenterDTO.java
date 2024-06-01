package com.recycle.recycleapp.dtos;


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

    private String name;
    private String description;
    private LocalTime businessHours;


}