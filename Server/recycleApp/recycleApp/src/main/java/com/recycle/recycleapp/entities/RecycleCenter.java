package com.recycle.recycleapp.entities;




import com.fasterxml.jackson.annotation.JsonFormat;
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
    //@JsonIgnore
    private Long idRecycleCenter;
    private String name;
    private String description;

    //@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "HH:mm:ss")
    private LocalTime businessHours;


    @OneToOne
    @JsonIgnore
    @JoinColumn(name = "address_id")
    private Address address;

   // @JsonIgnore
    private String city;

}
