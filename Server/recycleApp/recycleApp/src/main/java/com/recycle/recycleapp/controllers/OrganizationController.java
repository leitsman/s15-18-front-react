package com.recycle.recycleapp.controllers;

import com.recycle.recycleapp.dtos.OrganizationDTO;
import com.recycle.recycleapp.exceptions.OrganizationNotFoundException;
import com.recycle.recycleapp.services.OrganizationService;
import com.recycle.recycleapp.utils.Response;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/organizations")
@Tag(name = "Organization", description = "Endpoints para gestionar organizaciones")
public class OrganizationController {

    @Autowired
    private OrganizationService organizationService;

    @PostMapping("/create")
    @Operation(summary = "Crear una nueva organización", description = "Un usuario con rol SUPER_ADMIN puede registrar una nueva organización")
    public ResponseEntity<Response> createOrganization(@Valid @RequestBody OrganizationDTO organizationDTO) {
        Response response = new Response(true, HttpStatus.CREATED,organizationService.saveOrganization(organizationDTO));
        return ResponseEntity.ok(response);
    }

    @GetMapping("/{id}")
    @Operation(summary = "Obtener organización por ID", description = "Obtiene la información detallada de una organización")
    public ResponseEntity<Response> getOrganizationById(@PathVariable Long id) {
        OrganizationDTO organizationDto = organizationService.getOrganizationById(id)
                .orElseThrow(() -> new OrganizationNotFoundException("No se encontró una organización con el ID: " + id));

        Response response = new Response(true, HttpStatus.OK, organizationDto);

        return ResponseEntity.ok(response);
    }

    @GetMapping
    @Operation(summary = "Obtener todas las organizaciones", description = "Obtiene todas las organizaciones registradas")
    public ResponseEntity<Response> getAllOrganizations() {
        Response response = new Response(true, HttpStatus.OK, organizationService.getAllOrganizations());
        return ResponseEntity.ok(response);
    }

//    @DeleteMapping("/{id}")
//    @Operation(summary = "Eliminar una organización", description = "Un usuario con rol SUPER_ADMIN puede eliminar una organización por su ID")
//    public ResponseEntity<Response> deleteOrganization(@PathVariable Long id) {
//        try {
//            organizationService.deleteOrganization(id);
//            Response response = new Response(true, HttpStatus.NO_CONTENT);
//            return new ResponseEntity<>(response, HttpStatus.NO_CONTENT);
//        } catch (Exception e) {
//            throw new OrganizationNotFoundException("No se encontró la organización con ID: " + id);
//        }
//    }

    @PutMapping("/{id}")
    @Operation(summary = "Actualizar una organización", description = "Un usuario con rol SUPER_ADMIN puede actualizar la información de una organización")
    public ResponseEntity<Response> updateOrganization(@PathVariable Long id, @Valid @RequestBody OrganizationDTO organizationDTO) {
        Optional<OrganizationDTO> updatedOrganization = organizationService.updateOrganization(id, organizationDTO);
        if (updatedOrganization.isPresent()) {
            Response response = new Response(true, HttpStatus.OK);
            return ResponseEntity.ok(response);
        } else {
            throw new OrganizationNotFoundException("Organización no encontrada con el ID: " + id);
        }
    }

//    @GetMapping("/{organizationId}/recycle-centers")
//    @Operation(summary = "Obtener centros de reciclaje por organización", description = "Obtiene todos los centros de reciclaje asociados a una organización. Debe tener role SUPER_ADMIN O ORGANIZATION_MANAGER")
//    public ResponseEntity<List<RecycleCenterDTO>> getRecycleCentersByOrganization(@Parameter(description = "ID de la organización") @PathVariable Long organizationId) {
//        List<RecycleCenterDTO> recycleCenters = recycleCenterService.getRecycleCentersByOrganization(organizationId);
//        return ResponseEntity.ok(recycleCenters);
//    }

}
