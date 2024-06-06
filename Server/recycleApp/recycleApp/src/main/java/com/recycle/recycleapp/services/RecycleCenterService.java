package com.recycle.recycleapp.services;

import com.recycle.recycleapp.dtos.RecycleCenterDTO;
import com.recycle.recycleapp.exceptions.RecycleCenterNotFoundException;

import java.util.List;
import java.util.Optional;

public interface RecycleCenterService {


    RecycleCenterDTO createRecycleCenterDTO(RecycleCenterDTO request);
    RecycleCenterDTO updateRecycleCenterById(Long idRecycleCenter,RecycleCenterDTO request) throws RecycleCenterNotFoundException;
    Optional<RecycleCenterDTO> findRecycleCenterById(Long recycleCenterId);
    List<RecycleCenterDTO> findByCity(String city);

    List<RecycleCenterDTO> findAllRecycleCenter();
    //

}
