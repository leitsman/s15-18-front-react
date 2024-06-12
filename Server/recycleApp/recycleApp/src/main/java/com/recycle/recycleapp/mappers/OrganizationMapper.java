package com.recycle.recycleapp.mappers;

import com.recycle.recycleapp.dtos.OrganizationDTO;
import com.recycle.recycleapp.entities.Organization;

public class OrganizationMapper {

    public static OrganizationDTO toDTO(Organization organization) {
        return new OrganizationDTO(
                organization.getName(),
                organization.getDescription(),
                organization.getAbout_us(),
                organization.getWebsite()
        );
    }

    public static Organization toEntity(OrganizationDTO organizationDTO) {
        return Organization.builder()
                .name(organizationDTO.getName())
                .description(organizationDTO.getDescription())
                .about_us(organizationDTO.getAbout_us())
                .website(organizationDTO.getWebsite())
                .build();
    }
}
