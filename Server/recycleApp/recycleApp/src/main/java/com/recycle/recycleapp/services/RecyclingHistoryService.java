package com.recycle.recycleapp.services;

import com.recycle.recycleapp.dtos.RecyclingHistoryDTO;
import com.recycle.recycleapp.dtos.RecyclingHistoryRequest;
import com.recycle.recycleapp.entities.RecyclingHistory;

import java.util.List;

public interface RecyclingHistoryService {

    void createRecyclingHistory(RecyclingHistoryRequest request);
    RecyclingHistoryDTO updateRecyclingHistory(int recyclingHistoryId, RecyclingHistoryDTO request);
    RecyclingHistoryDTO findById(int recyclingHistoryId);

    List<RecyclingHistory> findRecyclingHistoryByPerson(Long idPerson);
}
