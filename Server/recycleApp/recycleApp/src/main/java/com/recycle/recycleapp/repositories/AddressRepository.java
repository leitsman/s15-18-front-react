package com.recycle.recycleapp.repositories;


import com.recycle.recycleapp.entities.Address;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface AddressRepository extends JpaRepository<Address, Long> {

    List<Address> findByCity(String city);

//    @Query(value = "select address from recycle_center rc inner join Address a on rc.city = a.city where a.city = :city", nativeQuery = true)
//    List<String> findRecycleCenterAddressesByCity(@Param("city") String city);


    List<Address> findByRecycleCenterCity(String city); //to filter RecyclingCenter by city.

}
