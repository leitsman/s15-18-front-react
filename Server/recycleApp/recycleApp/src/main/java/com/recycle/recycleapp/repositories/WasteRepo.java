package com.recycle.recycleapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WasteRepo extends JpaRepository<com.recycle.recycleapp.entity.Waste,Long> {
}
