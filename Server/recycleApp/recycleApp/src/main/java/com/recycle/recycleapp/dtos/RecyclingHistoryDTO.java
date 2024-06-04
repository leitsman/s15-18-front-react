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
    // public int id;
    public RecycleCenter recycling_center;
    public Person recyling_person;
    public LocalDate date;
    public Waste recycling_waste;
    public int amount;
}
