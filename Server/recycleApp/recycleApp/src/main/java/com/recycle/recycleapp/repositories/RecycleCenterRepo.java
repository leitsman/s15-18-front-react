package com.recycle.recycleapp.entities;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface RecycleCenterRepo extends JpaRepository<RecycleCenter,Long> {


}