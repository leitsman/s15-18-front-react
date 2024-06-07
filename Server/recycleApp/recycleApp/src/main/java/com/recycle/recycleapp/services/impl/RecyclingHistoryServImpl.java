package com.recycle.recycleapp.services.impl;

import com.recycle.recycleapp.dtos.RecyclingHistoryDTO;
import com.recycle.recycleapp.dtos.RecyclingHistoryRequest;
import com.recycle.recycleapp.entities.Person;
import com.recycle.recycleapp.entities.RecycleCenter;
import com.recycle.recycleapp.entities.RecyclingHistory;
import com.recycle.recycleapp.entities.Waste;
import com.recycle.recycleapp.mappers.RecycleHistoryMapper;
import com.recycle.recycleapp.repositories.PersonRepository;
import com.recycle.recycleapp.repositories.RecycleCenterRepo;
import com.recycle.recycleapp.repositories.RecyclingHistoryRepo;
import com.recycle.recycleapp.repositories.WasteRepo;
import com.recycle.recycleapp.services.RecyclingHistoryService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RecyclingHistoryServImpl implements RecyclingHistoryService {

    @Autowired
    private RecyclingHistoryRepo recyclingHistoryRepo;
    @Autowired
    private PersonRepository personRepository;
    @Autowired
    private RecycleCenterRepo recycleCenterRepo;
    @Autowired
    private WasteRepo wasteRepo;

    
    @Override
    @Transactional
    public void createRecyclingHistory(RecyclingHistoryRequest request) {

        Optional<RecycleCenter> recycleCenterDB = recycleCenterRepo.findById(request.getRecycle_center());
        Optional<Person> personDB = personRepository.findById(request.getRecyling_person());
        Optional<Waste> wasteDB = wasteRepo.findById(request.getRecycling_waste());

        RecycleCenter recycleCenter = recycleCenterDB.get();
        Person person = personDB.get();
        Waste waste = wasteDB.get();

        RecyclingHistory recyclingHistoryDB = recyclingHistoryRepo.save(
                RecyclingHistory.builder()
                        .recycleCenter(recycleCenter)
                        .person(person)
                        .waste(waste)
                        .amount(request.getAmount())
                        .build()
            );
    }

    @Override
    public RecyclingHistoryDTO updateRecyclingHistory(int recyclingHistoryId, RecyclingHistoryDTO request) {
        Optional<RecyclingHistory> foundRecycleHistory=recyclingHistoryRepo.findById(recyclingHistoryId);
        if(foundRecycleHistory.isPresent()){
            RecyclingHistory newRecycleHistory=foundRecycleHistory.get();
            newRecycleHistory.setRecycleCenter(request.getRecycling_center());
            newRecycleHistory.setDate(request.getDate());
            newRecycleHistory.setAmount(request.getAmount());
            newRecycleHistory.setPerson(request.getRecyling_person());
            newRecycleHistory.setWaste(request.getRecycling_waste());

            recyclingHistoryRepo.save(newRecycleHistory);

            return RecycleHistoryMapper.toDTO(newRecycleHistory);

        }

        return null;
    }

    @Override
    public RecyclingHistoryDTO findById(int recyclingHistoryId) {
        return null;
    }

    @Override
    public List<RecyclingHistory> findRecyclingHistoryByPerson(Integer idPerson) {
        Optional<Person> personFound=personRepository.findById(idPerson);

        if(personFound.isPresent()){

           List<RecyclingHistory> historyList= recyclingHistoryRepo.findByPersonIdPerson(idPerson);

            return historyList;
        }else{
            return null;

        }


    }
}
