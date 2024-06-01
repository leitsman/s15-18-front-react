package com.recycle.recycleapp.entities;




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

    //is used to indicate that this relationship is bidirectional and Address is the owner of the relationship.
    @OneToOne(mappedBy = "recyclingCenter")
    private Address address;

}
