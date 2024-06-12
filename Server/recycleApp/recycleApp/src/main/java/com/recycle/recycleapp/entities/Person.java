package com.recycle.recycleapp.entities;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.recycle.recycleapp.repositories.AddressRepository;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "person")
public class Person {


    @Id
    @JsonIgnore
    private Integer idPerson;
    @Column(name = "first_name", nullable = false, length = 30)
    private String firstName;
    @Column(name = "last_name", nullable = false, length = 30)
    private String lastName;
    @Column(name = "dni", nullable = false, length = 20, unique = true)
    private String dni;
    @Column(name = "total_points")
    private Long totalPoints;

    @OneToMany(mappedBy = "person")
    private List<RecyclingHistory> recyclingHistory;

    @OneToOne(mappedBy = "person")
    private Address address;

    @ManyToOne
    @JoinColumn(name = "recycle_center_id", referencedColumnName = "idRecycleCenter")
    private RecycleCenter recycleCenter;

    @PrePersist
    void prePersist() {
        this.totalPoints = 0L;
    }
}
