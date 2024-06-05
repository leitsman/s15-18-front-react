package com.recycle.recycleapp.controllers;


import com.recycle.recycleapp.dtos.RecycleCenterDTO;
import com.recycle.recycleapp.dtos.WasteDTO;
import com.recycle.recycleapp.exceptions.WasteNotFoundException;
import com.recycle.recycleapp.services.WasteService;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.persistence.Table;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/waste")
@RequiredArgsConstructor

public class WasteController {



    @Autowired
    WasteService wasteService;

    @PostMapping("/create")
    @Operation(summary = "Crear un nuevo producto de reciclaje", description = "Un usuario con rol SUPER_ADMIN puede registrar un nuevo producto de reciclaje.")
    public ResponseEntity<WasteDTO> createWasteProduct(@RequestBody WasteDTO wasteDTO) {
        WasteDTO savedWaste = wasteService.createWaste(wasteDTO);
        return new ResponseEntity<>(savedWaste, HttpStatus.CREATED);
    }


    @GetMapping("/{id}")
    @Operation(summary = "Obtener  producto de reciclaje por ID", description = "Obtiene la información detallada de un producto de reciclaje.")
    public ResponseEntity<WasteDTO> getWasteById(@PathVariable Long id) throws WasteNotFoundException {
        Optional<WasteDTO> foundWasteDTO = wasteService.findWasteById(id);


        return foundWasteDTO.map(wst -> new ResponseEntity<>(wst, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping
    @Operation(summary = "Obtener todos los productos de reciclaje", description = "Obtiene todas los productos de reciclaje.")
    public ResponseEntity<List<WasteDTO>> getAllWasteProducts() {
        return new ResponseEntity<>(wasteService.findAllWaste(), HttpStatus.OK);
    }


}
