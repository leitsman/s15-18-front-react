package com.recycle.recycleapp.entity;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WasteRepo extends JpaRepository<Waste,Long> {

}
