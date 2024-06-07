package com.recycle.recycleapp.services;

import com.recycle.recycleapp.dtos.WasteDTO;
import com.recycle.recycleapp.exceptions.WasteNotFoundException;

import java.util.List;
import java.util.Optional;

public interface WasteService {

    WasteDTO createWaste(WasteDTO wasteDTO);
    Optional<WasteDTO> findWasteById(Long WasteId) throws WasteNotFoundException;
    WasteDTO updateById(Long WasteId, WasteDTO wasteDTO) throws WasteNotFoundException;
    WasteDTO findByType(String type);

    List<WasteDTO> findAllWaste();
}
