package com.recycle.recycleapp.services;

import com.recycle.recycleapp.dtos.WasteDTO;
import com.recycle.recycleapp.exceptions.WasteNotFoundException;

public interface WasteService {

    WasteDTO createWaste(Long id,WasteDTO wasteDTO);
    WasteDTO findWasteById(Long WasteId) throws WasteNotFoundException;
    WasteDTO updateById(Long WasteId, WasteDTO wasteDTO) throws WasteNotFoundException;
    WasteDTO findByType(String type);
}
