package com.recycle.recycleapp.services.impl;

import com.recycle.recycleapp.dtos.RecycleCenterDTO;
import com.recycle.recycleapp.entities.RecycleCenter;
import com.recycle.recycleapp.exceptions.RecycleCenterNotFoundException;
import com.recycle.recycleapp.repositories.RecycleCenterRepo;
import com.recycle.recycleapp.services.RecycleCenterService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
@RequiredArgsConstructor
public class RecycleCenterServImpl implements RecycleCenterService {



    @Autowired
    private RecycleCenterRepo recycleCenterRepo;

    @Override
    @Transactional
    public RecycleCenterDTO createRecycleCenterDTO(Long rcenterID, RecycleCenterDTO request) {
        Optional<RecycleCenter> recycleCentRef=recycleCenterRepo.findById(rcenterID);
        if(recycleCentRef.isEmpty()){

            RecycleCenter recycleCenterDB = recycleCenterRepo.save(
                    RecycleCenter.builder()
                            .name(request.getName())
                            .businessHours(request.getBusinessHours())
                            .description(request.getDescription())
                            .build());

            return RecycleCenterDTO.builder()
                    .id(recycleCenterDB.getIdRecycleCenter())
                    .name(recycleCenterDB.getName())
                    .description(recycleCenterDB.getDescription())
                    .businessHours(recycleCenterDB.getBusinessHours())
                    .build();
        }
        else{
            return null;
        }


    }

    @Override
    @Transactional
    public RecycleCenterDTO updateRecycleCenterById(Long recycleCenterId, RecycleCenterDTO request) throws RecycleCenterNotFoundException {
        Optional<RecycleCenter> recycleCentRef=recycleCenterRepo.findById(recycleCenterId);

        if(recycleCentRef.isEmpty()){
            throw new RecycleCenterNotFoundException("El centro de acopio no se encuentra en la base de datos.");

        }
        else{
            recycleCentRef.get().setBusinessHours(request.getBusinessHours());
            recycleCentRef.get().setDescription(request.getDescription());
            recycleCentRef.get().setName(request.getName());

            RecycleCenter recycleCenterDB = recycleCenterRepo.save(recycleCentRef.get());

            return RecycleCenterDTO.builder()
                    .id(recycleCenterDB.getIdRecycleCenter())
                    .name(recycleCenterDB.getName())
                    .description(recycleCenterDB.getDescription())
                    .businessHours(recycleCenterDB.getBusinessHours())
                    .build();
        }
    }

    @Override
    public RecycleCenterDTO findById(Long recycleCenterId) {
        Optional<RecycleCenter> recycleCentRef=recycleCenterRepo.findById(recycleCenterId);
        return RecycleCenterDTO.builder()
                .id(recycleCentRef.get().getIdRecycleCenter())
                .name(recycleCentRef.get().getName())
                .businessHours(recycleCentRef.get().getBusinessHours())
                .build();
    }

    @Override
    public RecycleCenterDTO findByCity(String city) {
        return null;
    }
}
