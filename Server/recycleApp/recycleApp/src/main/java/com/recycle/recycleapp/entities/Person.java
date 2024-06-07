package com.recycle.recycleapp.entities;


import com.fasterxml.jackson.annotation.JsonIgnore;
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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonIgnore
    private Long idPerson;
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

    @OneToMany(mappedBy = "person")
    private List<Address> address;

    @ManyToOne
    @JoinColumn(name = "organization_id", referencedColumnName = "id")
    private Organization organization;

    @PrePersist
    void prePersist() {
        this.totalPoints = 0L;
    }
}
