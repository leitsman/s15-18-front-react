package com.recycle.recycleapp.entity;


import com.recycle.recycleapp.enumerations.typeEnum;
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
@Table(name = "waste")
public class Waste {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idWaste;

    @Enumerated(EnumType.STRING)
    private typeEnum type;
    private String description;
    private String imageroute;
    private Long points;

}