package com.recycle.recycleapp.repositories;

import com.recycle.recycleapp.entities.Waste;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WasteRepo extends JpaRepository<Waste,Long> {
}
