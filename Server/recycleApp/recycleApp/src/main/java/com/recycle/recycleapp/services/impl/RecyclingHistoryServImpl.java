package com.recycle.recycleapp.services.impl;

import com.recycle.recycleapp.dtos.RecyclingHistoryDTO;
import com.recycle.recycleapp.entities.RecyclingHistory;
import com.recycle.recycleapp.repositories.RecyclingHistoryRepo;
import com.recycle.recycleapp.services.RecyclingHistoryService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RecyclingHistoryServImpl implements RecyclingHistoryService {

    @Autowired
    private RecyclingHistoryRepo recyclingHistoryRepo;

    
    @Override
    @Transactional
    public RecyclingHistoryDTO createRecyclingHistory(RecyclingHistoryDTO request) {

        RecyclingHistory recyclingHistoryDB = recyclingHistoryRepo.save(
                RecyclingHistory.builder()
                        .recycleCenter(request.getRecycling_center())
                        .person(request.getRecyling_person())
                        .waste(request.recycling_waste)
                        .amount(request.getAmount())
                        .build()
            );

        return RecyclingHistoryDTO.builder()
                .id(recyclingHistoryDB.getId())
                .recycling_center(recyclingHistoryDB.getRecycleCenter())
                .recyling_person(recyclingHistoryDB.getPerson())
                .date(recyclingHistoryDB.getDate())
                .recycling_waste(recyclingHistoryDB.getWaste())
                .amount(recyclingHistoryDB.getAmount())
                .build();
    }

    @Override
    public RecyclingHistoryDTO updateRecyclingHistory(int recyclingHistoryId) {
        return null;
    }

    @Override
    public RecyclingHistoryDTO findById(int recyclingHistoryId) {
        return null;
    }
}
