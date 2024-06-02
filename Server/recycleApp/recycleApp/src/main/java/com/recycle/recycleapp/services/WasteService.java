package com.recycle.recycleapp.services;

import com.recycle.recycleapp.dtos.WasteDTO;

public interface WasteService {

    WasteDTO createWaste(WasteDTO wasteDTO);
    WasteDTO findWasteById(Long WasteId);
    WasteDTO updateById(Long WasteId);
    WasteDTO findByType(String type);
}
