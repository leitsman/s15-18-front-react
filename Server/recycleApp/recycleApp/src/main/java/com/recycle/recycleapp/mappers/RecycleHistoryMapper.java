package com.recycle.recycleapp.mappers;


import com.recycle.recycleapp.dtos.RecyclingHistoryDTO;
import com.recycle.recycleapp.entities.RecyclingHistory;

public class RecycleHistoryMapper {
    public static RecyclingHistoryDTO toDTO(RecyclingHistory recyclingHistory) {
        return new RecyclingHistoryDTO(
                recyclingHistory.getRecycleCenter(),
                recyclingHistory.getPerson(),
                recyclingHistory.getDate(),
                recyclingHistory.getWaste(),
                recyclingHistory.getAmount()
        );
    }

    public static RecyclingHistory toEntity(RecyclingHistoryDTO recyclingHistoryDTO) {
        return RecyclingHistory.builder()
                .recycleCenter(recyclingHistoryDTO.getRecycling_center())
                .person(recyclingHistoryDTO.getRecyling_person())
                .date(recyclingHistoryDTO.getDate())
                .waste(recyclingHistoryDTO.getRecycling_waste())
                .amount(recyclingHistoryDTO.getAmount())
                .build();
    }
}
