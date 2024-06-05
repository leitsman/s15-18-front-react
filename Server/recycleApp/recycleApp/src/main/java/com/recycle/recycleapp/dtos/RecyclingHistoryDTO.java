package com.recycle.recycleapp.dtos;

import com.recycle.recycleapp.entities.Person;
import com.recycle.recycleapp.entities.RecycleCenter;
import com.recycle.recycleapp.entities.Waste;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class RecyclingHistoryDTO {
    // private int id;
    private RecycleCenter recycling_center;
    private Person recyling_person;
    private LocalDate date;
    private Waste recycling_waste;
    private int amount;
}
