package com.recycle.recycleapp.controllers;

import com.recycle.recycleapp.dtos.OrganizationDTO;
import com.recycle.recycleapp.services.OrganizationService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/organizations")
public class OrganizationController {

    @Autowired
    private OrganizationService organizationService;

    @PostMapping("/create")
    public ResponseEntity<OrganizationDTO> createOrganization(@Valid @RequestBody OrganizationDTO organizationDTO) {
        OrganizationDTO savedOrganization = organizationService.saveOrganization(organizationDTO);
        return new ResponseEntity<>(savedOrganization, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<OrganizationDTO> getOrganizationById(@PathVariable Long id) {
        Optional<OrganizationDTO> organizationDto = organizationService.getOrganizationById(id);

        return organizationDto.map(org -> new ResponseEntity<>(org, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping
    public ResponseEntity<List<OrganizationDTO>> getAllOrganizations() {
        return new ResponseEntity<>(organizationService.getAllOrganizations(), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteOrganization(@PathVariable Long id) {
        if (organizationService.getOrganizationById(id).isPresent()) {
            organizationService.deleteOrganization(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<OrganizationDTO> updateOrganization(@PathVariable Long id, @Valid @RequestBody OrganizationDTO organizationDTO) {
        Optional<OrganizationDTO> updatedOrganization = organizationService.updateOrganization(id, organizationDTO);
        return updatedOrganization.map(ResponseEntity::ok)
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

}
