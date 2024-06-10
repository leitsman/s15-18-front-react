package com.recycle.recycleapp.dtos.responseDtos;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ResponseRecyclingHistoryDTO {

    private String wasteName;
    private LocalDate recycleDate;
    private String recycleCntrName;
    private Long totalPoints; // need to multiply with amount
}

