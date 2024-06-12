package com.recycle.recycleapp.repositories;

import com.recycle.recycleapp.entities.RecyclingHistory;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RecyclingHistoryRepo extends JpaRepository<RecyclingHistory, Integer> {


    List<RecyclingHistory> findByPersonIdPerson(Integer id);

    List<RecyclingHistory> findByPersonDni(String dni);
}
