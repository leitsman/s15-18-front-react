package com.recycle.recycleapp.mappers;

import com.recycle.recycleapp.dtos.RecyclingHistoryDTO;
import com.recycle.recycleapp.dtos.WasteDTO;
import com.recycle.recycleapp.entities.RecyclingHistory;
import com.recycle.recycleapp.entities.Waste;
import com.recycle.recycleapp.enumerations.typeEnum;

public class WasteMapper {

    public static WasteDTO toDTO(Waste waste) {
        return new WasteDTO(
                waste.getType().toString(),
                waste.getDescription(),
                waste.getPoints()


        );
    }

    public static Waste toEntity(WasteDTO wasteDTO) {
        return Waste.builder()
                .type(typeEnum.valueOf(wasteDTO.getType()))
                .description(wasteDTO.getDescription())
                .points(wasteDTO.getPoints())
                .build();
    }
}
