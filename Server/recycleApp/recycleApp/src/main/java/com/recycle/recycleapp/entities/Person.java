package com.recycle.recycleapp.entities;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.UuidGenerator;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "person")
public class Person {

    @Id
    @UuidGenerator
    private String idPerson;
    private String firstName;
    private String lastName;
    private Long dni;
    private Long totalPoints;
}
