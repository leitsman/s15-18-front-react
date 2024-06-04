package com.recycle.recycleapp.repositories;


import com.recycle.recycleapp.entities.Address;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface AddressRepository extends JpaRepository<Address, Long> {

    List<Address> findByCity(String city);

    List<Address> findByRecycleCenter_City(String city); //to filter RecyclingCenter by city.

}
