package com.recycle.recycleapp.services;

import com.recycle.recycleapp.dtos.RecyclingHistoryDTO;

public interface RecyclingHistoryService {

    RecyclingHistoryDTO createRecyclingHistory(RecyclingHistoryDTO recyclingHistoryDTO);
    RecyclingHistoryDTO updateRecyclingHistory(String recyclingHistoryId);
    RecyclingHistoryDTO findById(String recyclingHistoryId);
}
