package com.recycle.recycleapp.entities;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
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
    @JoinColumn(name = "center_id")
    private RecycleCenter recycleCenter;

    @ManyToOne
    @JoinColumn(name = "person_id")
    private Person person;

    @Column(name = "address")
    private String address;

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