package com.recycle.recycleapp.services.impl;

import com.recycle.recycleapp.dtos.RecyclingHistoryDTO;
import com.recycle.recycleapp.entities.Person;
import com.recycle.recycleapp.entities.RecyclingHistory;
import com.recycle.recycleapp.mappers.RecycleHistoryMapper;
import com.recycle.recycleapp.repositories.PersonRepository;
import com.recycle.recycleapp.repositories.RecyclingHistoryRepo;
import com.recycle.recycleapp.services.RecyclingHistoryService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.plaf.OptionPaneUI;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class RecyclingHistoryServImpl implements RecyclingHistoryService {

    @Autowired
    private RecyclingHistoryRepo recyclingHistoryRepo;
    @Autowired
    private PersonRepository personRepository;

    
    @Override
    @Transactional
    public RecyclingHistoryDTO createRecyclingHistory(RecyclingHistoryDTO request) {

        RecyclingHistory recyclingHistoryDB = recyclingHistoryRepo.save(
                RecyclingHistory.builder()
                        .recycleCenter(request.getRecycling_center())
                        .person(request.getRecyling_person())
                        .waste(request.getRecycling_waste())
                        .amount(request.getAmount())
                        .build()
            );

        return RecyclingHistoryDTO.builder()
                .recycling_center(recyclingHistoryDB.getRecycleCenter())
                .recyling_person(recyclingHistoryDB.getPerson())
                .date(recyclingHistoryDB.getDate())
                .recycling_waste(recyclingHistoryDB.getWaste())
                .amount(recyclingHistoryDB.getAmount())
                .build();
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

            return RecycleHistoryMapper.toDTO(newRecycleHistory) ;

        }

        return null;
    }

    @Override
    public RecyclingHistoryDTO findById(int recyclingHistoryId) {
        return null;
    }

    @Override
    public List<RecyclingHistory> findRecyclingHistoryByPerson(Long idPerson) {
        Optional<Person> personFound=personRepository.findById(idPerson);

        if(personFound.isPresent()){

           List<RecyclingHistory> historyList= recyclingHistoryRepo.findByPersonIdPerson(idPerson);

            return historyList;
        }else{
            return null;

        }


    }
}
