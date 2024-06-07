package com.recycle.recycleapp.controllers;

import com.recycle.recycleapp.dtos.OrganizationDTO;
import com.recycle.recycleapp.services.OrganizationService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
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
    public ResponseEntity<OrganizationDTO> createOrganization(@Valid @RequestBody OrganizationDTO organizationDTO) {
        OrganizationDTO savedOrganization = organizationService.saveOrganization(organizationDTO);
        return new ResponseEntity<>(savedOrganization, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    @Operation(summary = "Obtener organización por ID", description = "Obtiene la información detallada de una organización")
    public ResponseEntity<OrganizationDTO> getOrganizationById(@PathVariable Long id) {
        Optional<OrganizationDTO> organizationDto = organizationService.getOrganizationById(id);

        return organizationDto.map(org -> new ResponseEntity<>(org, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping
    @Operation(summary = "Obtener todas las organizaciones", description = "Obtiene todas las organizaciones registradas")
    public ResponseEntity<List<OrganizationDTO>> getAllOrganizations() {
        return new ResponseEntity<>(organizationService.getAllOrganizations(), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Eliminar una organización", description = "Un usuario con rol SUPER_ADMIN puede eliminar una organización por su ID")
    public ResponseEntity<Void> deleteOrganization(@PathVariable Long id) {
        if (organizationService.getOrganizationById(id).isPresent()) {
            organizationService.deleteOrganization(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    @Operation(summary = "Actualizar una organización", description = "Un usuario con rol SUPER_ADMIN puede actualizar la información de una organización")
    public ResponseEntity<OrganizationDTO> updateOrganization(@PathVariable Long id, @Valid @RequestBody OrganizationDTO organizationDTO) {
        Optional<OrganizationDTO> updatedOrganization = organizationService.updateOrganization(id, organizationDTO);
        return updatedOrganization.map(ResponseEntity::ok)
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

//    @GetMapping("/{organizationId}/recycle-centers")
//    @Operation(summary = "Obtener centros de reciclaje por organización", description = "Obtiene todos los centros de reciclaje asociados a una organización. Debe tener role SUPER_ADMIN O ORGANIZATION_MANAGER")
//    public ResponseEntity<List<RecycleCenterDTO>> getRecycleCentersByOrganization(@Parameter(description = "ID de la organización") @PathVariable Long organizationId) {
//        List<RecycleCenterDTO> recycleCenters = recycleCenterService.getRecycleCentersByOrganization(organizationId);
//        return ResponseEntity.ok(recycleCenters);
//    }

}
