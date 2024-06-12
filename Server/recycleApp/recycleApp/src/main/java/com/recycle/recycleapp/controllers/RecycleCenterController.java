package com.recycle.recycleapp.controllers;


import com.recycle.recycleapp.dtos.OrganizationDTO;
import com.recycle.recycleapp.dtos.RecycleCenterDTO;
import com.recycle.recycleapp.entities.RecycleCenter;
import com.recycle.recycleapp.services.RecycleCenterService;
import com.recycle.recycleapp.utils.Response;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/recenter")
public class RecycleCenterController {

    @Autowired
    RecycleCenterService recycleCenterService;

    @PostMapping("/create")
    @Operation(summary = "Crear un nuevo centro de reciclaje", description = "Un usuario con rol SUPER_ADMIN puede registrar un nuevo centro de reciclaje.")
    public ResponseEntity<Response> createRecycleCenter(@RequestBody RecycleCenterDTO recycleCenterDTO) {
        RecycleCenterDTO savedRecycleCenter = recycleCenterService.createRecycleCenterDTO(recycleCenterDTO);
        Response response = new Response(true, HttpStatus.CREATED, savedRecycleCenter);
        return ResponseEntity.ok(response);
    }


    @GetMapping("/{id}")
    @Operation(summary = "Obtener Centro de Reciclaje por ID", description = "Obtiene la información detallada de un centro de reciclaje.")
    public ResponseEntity<Response> getRecycleCenterById(@PathVariable Long id) {
        Optional<RecycleCenterDTO> recycleCenterDTO = recycleCenterService.findRecycleCenterById(id);
        Response response = new Response(true, HttpStatus.OK, recycleCenterDTO);

        return ResponseEntity.ok(response);
    }

    @GetMapping
    @Operation(summary = "Obtener todos los centros de reciclaje", description = "Obtiene todas los centros de reciclaje.")
    public ResponseEntity<List<RecycleCenterDTO>> getAllRecycleCenter() {
        return new ResponseEntity<>(recycleCenterService.findAllRecycleCenter(), HttpStatus.OK);
    }


    @GetMapping("/city/{city}")
    @Operation(summary = "Obtener todos los centros de reciclaje por ciudad", description = "Obtiene todas los centros de reciclaje por ciudad.")
    public ResponseEntity<List<RecycleCenterDTO>> getAllRecycleCenterByCity(@PathVariable(value = "city") String city) {
        return new ResponseEntity<>(recycleCenterService.findByCity(city), HttpStatus.OK);
    }
}
