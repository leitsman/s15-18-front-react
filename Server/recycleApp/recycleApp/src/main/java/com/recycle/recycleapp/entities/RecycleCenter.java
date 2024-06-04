package com.recycle.recycleapp.entities;




import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


import java.time.LocalTime;

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
    private LocalTime businessHours;


    @OneToOne
    @JsonIgnore
    @JoinColumn(name = "address_id")
    private Address address;

    @JsonIgnore
    private String city;

}
