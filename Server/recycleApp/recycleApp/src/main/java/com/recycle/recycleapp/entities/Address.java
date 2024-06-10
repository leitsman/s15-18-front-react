package com.recycle.recycleapp.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

@Data
@Builder
@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "address")
public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "address_id")
    private Long addressId;

    @OneToOne
    //@JsonIgnore
    @JoinColumn(name = "recycle_center_id", referencedColumnName = "idRecycleCenter")
    private RecycleCenter recycleCenter;

    @OneToOne
    @JoinColumn(name = "person_id", referencedColumnName = "idPerson")
    @JsonIgnore
    private Person person;

    @Column(name = "address")
    private String addressName;

    @Column(name = "postal_code", length = 50)
    private String postalCode;

    @Column(name = "latitude", length = 50)
    private String latitude;

    @Column(name = "longitude", length = 50)
    private String longitude;

    @Column(name = "city", length = 100)
    private String city;

    @Column(name = "country", length = 100)
    private String country;

    @Column(name = "phone", length = 50)
    private String phone;
}
