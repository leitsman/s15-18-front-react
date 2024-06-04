package com.recycle.recycleapp.services.impl;

import com.recycle.recycleapp.dtos.OrganizationDTO;
import com.recycle.recycleapp.entities.Organization;
import com.recycle.recycleapp.mappers.OrganizationMapper;
import com.recycle.recycleapp.repositories.OrganizationRepository;
import com.recycle.recycleapp.services.OrganizationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrganizationServImpl implements OrganizationService {
    @Autowired
    OrganizationRepository organizationRepository;

    public OrganizationDTO saveOrganization(OrganizationDTO organizationDTO) {
        Organization organization = OrganizationMapper.toEntity(organizationDTO);
        Organization savedOrganization = organizationRepository.save(organization);
        return OrganizationMapper.toDTO(savedOrganization);
    }

    public Optional<OrganizationDTO> getOrganizationById(Long id) {
        Optional<Organization> organization = organizationRepository.findById(id);
        return organization.map(OrganizationMapper::toDTO);
    }

    public List<OrganizationDTO> getAllOrganizations() {
        List<Organization> organizations = organizationRepository.findAll();
        return organizations.stream()
                .map(OrganizationMapper::toDTO)
                .toList();
    }

    public void deleteOrganization(Long id) {
        organizationRepository.deleteById(id);
    }

    public Optional<OrganizationDTO> updateOrganization(Long id, OrganizationDTO organizationDTO) {
        Optional<Organization> organizationOptional = organizationRepository.findById(id);
        if (organizationOptional.isPresent()) {
            Organization organization = organizationOptional.get();
            organization.setName(organizationDTO.getName());
            organization.setDescription(organizationDTO.getDescription());
            organization.setAbout_as(organizationDTO.getAbout_as());
            organization.setWebsite(organizationDTO.getWebsite());

            Organization updatedOrganization = organizationRepository.save(organization);
            return Optional.of(OrganizationMapper.toDTO(updatedOrganization));
        } else {
            return Optional.empty();
        }
    }
}
