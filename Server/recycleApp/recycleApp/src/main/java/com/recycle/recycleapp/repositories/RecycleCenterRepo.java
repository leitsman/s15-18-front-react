package com.recycle.recycleapp.repositories;

import com.recycle.recycleapp.entities.RecycleCenter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecycleCenterRepo extends JpaRepository<RecycleCenter,Long> {
}
