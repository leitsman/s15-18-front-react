package com.recycle.recycleapp.services;

import com.recycle.recycleapp.dtos.RecyclingHistoryDTO;
import com.recycle.recycleapp.dtos.RecyclingHistoryRequest;
import com.recycle.recycleapp.dtos.responseDtos.PointsAllocationDto;
import com.recycle.recycleapp.entities.RecyclingHistory;
import org.springframework.security.core.Authentication;

import java.util.List;

public interface RecyclingHistoryService {

    PointsAllocationDto createRecyclingHistory(RecyclingHistoryRequest request, Authentication authentication);
//    RecyclingHistoryDTO updateRecyclingHistory(int recyclingHistoryId, RecyclingHistoryDTO request);
    RecyclingHistoryDTO findById(int recyclingHistoryId);

    List<RecyclingHistory> findRecyclingHistoryByPerson(Integer idPerson);

    List<RecyclingHistory> findRecyclingHistoryByToken(Authentication authentication);

    List<RecyclingHistory> findRecyclingHistoryByDni(String dni);
}
