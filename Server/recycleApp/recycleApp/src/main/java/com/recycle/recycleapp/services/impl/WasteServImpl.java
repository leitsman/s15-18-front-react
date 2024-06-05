package com.recycle.recycleapp.services.impl;


import com.recycle.recycleapp.dtos.WasteDTO;
import com.recycle.recycleapp.entities.Organization;
import com.recycle.recycleapp.entities.Waste;
import com.recycle.recycleapp.enumerations.typeEnum;
import com.recycle.recycleapp.exceptions.WasteNotFoundException;
import com.recycle.recycleapp.mappers.OrganizationMapper;
import com.recycle.recycleapp.mappers.WasteMapper;
import com.recycle.recycleapp.repositories.WasteRepo;
import com.recycle.recycleapp.services.WasteService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class WasteServImpl implements WasteService {

    @Autowired
    WasteRepo wasteRepo;


    @Override
    @Transactional

    public WasteDTO createWaste( WasteDTO request) {



            Waste wasteDB = wasteRepo.save(Waste.builder()
                    .name(request.getName())
                    .points(request.getPoints())
                    .type(typeEnum.valueOf(request.getType().toLowerCase()))
                    .build());

            return WasteDTO.builder()
                    .name(wasteDB.getName())
                    .points(wasteDB.getPoints())
                    .type(wasteDB.getType().name())
                    .build();




    }

    @Override
    public Optional<WasteDTO> findWasteById(Long WasteId) throws WasteNotFoundException {
        Optional<Waste> wasteRef = wasteRepo.findById(WasteId);
        if(wasteRef.isEmpty()){
            throw  new WasteNotFoundException("No se encuentra el producto de reciclaje en la base de datos");
        }

        return wasteRef.map(WasteMapper::toDTO);

    }

    @Override
    @Transactional
    public WasteDTO updateById(Long WasteId, WasteDTO request) throws WasteNotFoundException {
        Optional<Waste> wasteRef = wasteRepo.findById(WasteId);
        if (wasteRef.isEmpty()) {

            throw  new WasteNotFoundException("No se encuentra el producto de reciclaje en la base de datos");
        } else {

            wasteRef.get().setName(request.getName());
            wasteRef.get().setType(typeEnum.valueOf(request.getType()));
            wasteRef.get().setPoints(request.getPoints());

            Waste wasteDB = wasteRepo.save(wasteRef.get());

            return WasteDTO.builder()
                    .name(wasteDB.getName())
                    .points(wasteDB.getPoints())
                    .type(wasteDB.getType().name())
                    .build();
        }
    }

    @Override
    public WasteDTO findByType(String type) {
        return null;
    }

    @Override
    public List<WasteDTO> findAllWaste() {
        List<Waste> wasteList = wasteRepo.findAll();
        return wasteList.stream()
                .map(WasteMapper::toDTO)
                .toList();
    }
}
