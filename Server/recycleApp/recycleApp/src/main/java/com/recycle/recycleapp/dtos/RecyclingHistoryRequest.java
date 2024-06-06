package com.recycle.recycleapp.dtos;

import com.recycle.recycleapp.entities.Person;
import com.recycle.recycleapp.entities.Waste;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RecyclingHistoryRequest {

    public Long recycle_center;
    private Long recyling_person;
    private Long recycling_waste;
    private int amount;
}
