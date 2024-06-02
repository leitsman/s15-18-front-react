package com.recycle.recycleapp.services.impl;


import com.recycle.recycleapp.dtos.WasteDTO;
import com.recycle.recycleapp.entities.Waste;
import com.recycle.recycleapp.enumerations.typeEnum;
import com.recycle.recycleapp.exceptions.WasteNotFoundException;
import com.recycle.recycleapp.repositories.WasteRepo;
import com.recycle.recycleapp.services.WasteService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class WasteServImpl implements WasteService {

    @Autowired
    WasteRepo wasteRepo;


    @Override
    @Transactional

    public WasteDTO createWaste(Long id, WasteDTO request) {

        Optional<Waste> wasteRef = wasteRepo.findById(id);
        if (wasteRef.isEmpty()) {

            Waste wasteDB = wasteRepo.save(Waste.builder()
                    .description(request.getDescription())
                    .points(request.getPoints())
                    .type(typeEnum.valueOf(request.getType().toLowerCase()))
                    .build());

            return WasteDTO.builder()
                    .description(wasteDB.getDescription())
                    .points(wasteDB.getPoints())
                    .type(wasteDB.getType().name())
                    .build();
        } else {
            return null;
        }


    }

    @Override
    public WasteDTO findWasteById(Long WasteId) throws WasteNotFoundException {
        Optional<Waste> wasteRef = wasteRepo.findById(WasteId);
        if(wasteRef.isEmpty()){
            throw  new WasteNotFoundException("No se encuentra el producto de reciclaje en la base de datos");
        }


        return WasteDTO.builder()
                .description(wasteRef.get().getDescription())
                .points(wasteRef.get().getPoints())
                .type(wasteRef.get().getType().name())
                .build();
    }

    @Override
    @Transactional
    public WasteDTO updateById(Long WasteId, WasteDTO request) throws WasteNotFoundException {
        Optional<Waste> wasteRef = wasteRepo.findById(WasteId);
        if (wasteRef.isEmpty()) {

            throw  new WasteNotFoundException("No se encuentra el producto de reciclaje en la base de datos");
        } else {

            wasteRef.get().setDescription(request.getDescription());
            wasteRef.get().setType(typeEnum.valueOf(request.getType()));
            wasteRef.get().setPoints(request.getPoints());

            Waste wasteDB = wasteRepo.save(wasteRef.get());

            return WasteDTO.builder()
                    .description(wasteDB.getDescription())
                    .points(wasteDB.getPoints())
                    .type(wasteDB.getType().name())
                    .build();
        }
    }

    @Override
    public WasteDTO findByType(String type) {
        return null;
    }
}
