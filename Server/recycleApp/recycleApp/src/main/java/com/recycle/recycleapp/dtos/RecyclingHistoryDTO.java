package com.recycle.recycleapp.dtos;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Builder
public class RecyclingHistoryDTO {
    public String recycling_center;
    public String recycling_date;
    public String recycling_waste;
}
