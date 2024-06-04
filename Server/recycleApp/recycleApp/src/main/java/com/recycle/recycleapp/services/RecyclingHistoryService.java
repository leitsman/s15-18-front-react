package com.recycle.recycleapp.services;

import com.recycle.recycleapp.dtos.RecyclingHistoryDTO;
import com.recycle.recycleapp.entities.RecyclingHistory;

import java.util.List;

public interface RecyclingHistoryService {

    RecyclingHistoryDTO createRecyclingHistory(RecyclingHistoryDTO request);
    RecyclingHistoryDTO updateRecyclingHistory(int recyclingHistoryId, RecyclingHistoryDTO request);
    RecyclingHistoryDTO findById(int recyclingHistoryId);

    List<RecyclingHistory> findRecyclingHistoryByPerson(String idPerson);
}
