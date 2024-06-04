package com.recycle.recycleapp.controllers;


import com.recycle.recycleapp.dtos.OrganizationDTO;
import com.recycle.recycleapp.dtos.RecycleCenterDTO;
import com.recycle.recycleapp.entities.RecycleCenter;
import com.recycle.recycleapp.services.RecycleCenterService;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/api/v1/recenter")
public class RecycleCenterController {

    @Autowired
    RecycleCenterService recycleCenterService;

    @PostMapping("/create")
    @Operation(summary = "Crear un nuevo centro de reciclaje", description = "Un usuario con rol SUPER_ADMIN puede registrar un nuevo centro de reciclaje.")
    public ResponseEntity<RecycleCenterDTO> createRecycleCenter( @RequestBody RecycleCenterDTO recycleCenterDTO) {
        RecycleCenterDTO savedRecycleCenter = recycleCenterService.createRecycleCenterDTO(recycleCenterDTO);
        return new ResponseEntity<>(savedRecycleCenter, HttpStatus.CREATED);
    }


    @GetMapping("/{id}")
    @Operation(summary = "Obtener Centro de Reciclaje por ID", description = "Obtiene la información detallada de un centro de reciclaje.")
    public ResponseEntity<RecycleCenterDTO> getRecycleCenterById(@PathVariable Long id) {
        Optional<RecycleCenterDTO> recycleCenterDTO = recycleCenterService.findRecycleCenterById(id);


        return recycleCenterDTO.map(ctr -> new ResponseEntity<>(ctr, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping
    @Operation(summary = "Obtener todos los centros de reciclaje", description = "Obtiene todas los centros de reciclaje.")
    public ResponseEntity<List<RecycleCenterDTO>> getAllRecycleCenter() {
        return new ResponseEntity<>(recycleCenterService.findAllRecycleCenter(), HttpStatus.OK);
    }
}
