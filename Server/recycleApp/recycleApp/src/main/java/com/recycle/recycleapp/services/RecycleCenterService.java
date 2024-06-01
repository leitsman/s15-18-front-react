package com.recycle.recycleapp.services;

import com.recycle.recycleapp.dtos.RecycleCenterDTO;
import com.recycle.recycleapp.entities.RecycleCenter;


public interface RecycleCenterService {


    RecycleCenterDTO createRecycleCenterDTO(RecycleCenterDTO request);
    RecycleCenterDTO updateRecycleCenterById(Long recycleCenterId);
    RecycleCenterDTO findById(Long recycleCenterId);
    RecycleCenterDTO findByCity(String city);
    //

}
