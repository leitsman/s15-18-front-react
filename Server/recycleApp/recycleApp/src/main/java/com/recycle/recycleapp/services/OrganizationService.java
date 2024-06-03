package com.recycle.recycleapp.services;

import com.recycle.recycleapp.dtos.OrganizationDTO;

import java.util.List;
import java.util.Optional;

public interface OrganizationService {
    OrganizationDTO saveOrganization(OrganizationDTO organizationDTO);
    Optional<OrganizationDTO> getOrganizationById(Long id);
    List<OrganizationDTO> getAllOrganizations();
    void deleteOrganization(Long id);
    Optional<OrganizationDTO> updateOrganization(Long id, OrganizationDTO organizationDTO);
}
