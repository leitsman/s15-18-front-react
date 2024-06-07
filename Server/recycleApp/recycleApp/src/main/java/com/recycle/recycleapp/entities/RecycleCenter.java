package com.recycle.recycleapp.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "recycle_center")
public class RecycleCenter {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idRecycleCenter;

    private String name;

    private String description;

    private String businessHours;

    @OneToOne(mappedBy = "recycleCenter", cascade = CascadeType.ALL)
    //@JoinColumn(name = "address_id", referencedColumnName = "addressId")
    private Address address;

    private String city;
}

