package com.recycle.recycleapp.services;

import com.recycle.recycleapp.dtos.RecyclingHistoryDTO;

public interface RecyclingHistoryService {

    RecyclingHistoryDTO createRecyclingHistory(RecyclingHistoryDTO request);
    RecyclingHistoryDTO updateRecyclingHistory(int recyclingHistoryId);
    RecyclingHistoryDTO findById(int recyclingHistoryId);
}
