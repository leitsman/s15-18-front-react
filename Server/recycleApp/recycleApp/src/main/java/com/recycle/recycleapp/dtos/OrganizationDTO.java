package com.recycle.recycleapp.dtos;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Value;

import java.io.Serializable;

/**
 * DTO for {@link com.recycle.recycleapp.entities.Organization}
 */
@Value
public class OrganizationDTO implements Serializable {

    @NotEmpty(message = "El nombre no puede estar vacío")
    @Size(min = 3, max = 50, message = "El nombre debe tener entre 3 y 50 caracteres")
    String name;

    @Size(max = 1000, message = "La descripción no puede tener más de 1000 caracteres")
    String description;

    @Size(max = 1000, message = "La información no puede tener más de 1000 caracteres")
    String about_as;

    @Size(max = 100, message = "El sitio web no puede tener más de 100 caracteres")
    String website;
}