package com.recycle.recycleapp.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "recycling_history")
public class RecyclingHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "center_id", referencedColumnName = "idRecycleCenter")
    private RecycleCenter recycleCenter;

    @ManyToOne
    @JoinColumn(name = "person_id", referencedColumnName = "id")
    private Person person;

    private LocalDate date;

    @ManyToOne
    @JoinColumn(name = "waste_id", referencedColumnName = "idWaste")
    private Waste waste;

    private int amount;

    @PrePersist
    private void prePersist() {
        this.date = LocalDate.now();
    } //Le asigna la fecha actual al objeto antes de ser persistido
}
