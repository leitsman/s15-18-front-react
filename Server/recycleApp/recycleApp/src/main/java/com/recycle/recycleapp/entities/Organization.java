package com.recycle.recycleapp.entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Table(name = "organization")
public class Organization {

    @Id
    @GeneratedValue(strategy = jakarta.persistence.GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String name;

    private String description;

    private String about_us;

    private String website;


//    @OneToMany(mappedBy = "organization", cascade = CascadeType.ALL, orphanRemoval = true)
//    private List<RecycleCenter> recycleCenters;

//    @OneToMany(mappedBy = "organization", cascade = CascadeType.ALL, orphanRemoval = true)
//    private List<Person> persons;


}