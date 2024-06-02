package com.recycle.recycleapp.services;

import com.recycle.recycleapp.dtos.RecycleCenterDTO;
import com.recycle.recycleapp.exceptions.RecycleCenterNotFoundException;

public interface RecycleCenterService {


    RecycleCenterDTO createRecycleCenterDTO(Long rcycenterId,RecycleCenterDTO request);
    RecycleCenterDTO updateRecycleCenterById(Long recycleCenterId, RecycleCenterDTO request) throws RecycleCenterNotFoundException;
    RecycleCenterDTO findById(Long recycleCenterId);
    RecycleCenterDTO findByCity(String city);
    //

}
