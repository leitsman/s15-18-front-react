package com.recycle.recycleapp.services.impl;

import com.recycle.recycleapp.dtos.RecycleCenterDTO;
import com.recycle.recycleapp.entities.Address;
import com.recycle.recycleapp.entities.Organization;
import com.recycle.recycleapp.entities.RecycleCenter;
import com.recycle.recycleapp.exceptions.RecycleCenterNotFoundException;
import com.recycle.recycleapp.mappers.OrganizationMapper;
import com.recycle.recycleapp.mappers.RecycleCenterMapper;
import com.recycle.recycleapp.repositories.AddressRepository;
import com.recycle.recycleapp.repositories.RecycleCenterRepo;
import com.recycle.recycleapp.services.RecycleCenterService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@Service
@RequiredArgsConstructor
public class RecycleCenterServImpl implements RecycleCenterService {



    @Autowired
    private RecycleCenterRepo recycleCenterRepo;

    @Autowired
    private AddressRepository addressRepository;

    @Override
    @Transactional
    public RecycleCenterDTO createRecycleCenterDTO( RecycleCenterDTO request) {



//            RecycleCenter recycleCenterDB = recycleCenterRepo.save(
//                    RecycleCenter.builder()
//                            .name(request.getName())
//                            .businessHours(request.getBusinessHours())
//                            .description(request.getDescription())
//                            .city(request.getCity())
//                            .address(request.getAddress())
//                            .build());

            RecycleCenter recycleCenterDB = recycleCenterRepo.save(
                    RecycleCenter.builder()
                            .name(request.getName())
                            .businessHours(request.getBusinessHours())
                            .description(request.getDescription())
                            .city(request.getCity())
                            .address(null)
                            .build());


        Address addr=Address.builder()
                .phone(request.getAddress().getPhone())
                .addressName(request.getAddress().getAddressName())
                .recycleCenter(recycleCenterDB)
                .country(request.getAddress().getCountry())
                .latitude(request.getAddress().getLatitude())
                .longitude(request.getAddress().getLongitude())
                .postalCode(request.getAddress().getPostalCode())
                .city(request.getCity())
                    .build();

        Address addressDb = addressRepository.save(addr);

            return RecycleCenterDTO.builder()
                    .id(recycleCenterDB.getIdRecycleCenter())
                    .name(recycleCenterDB.getName())
                    .description(recycleCenterDB.getDescription())
                    .businessHours(recycleCenterDB.getBusinessHours())
                    .city(recycleCenterDB.getCity())
                    .address(addressDb)
                    .build();






    }

    @Override
    @Transactional
    public RecycleCenterDTO updateRecycleCenterById(Long recycleCenterId, RecycleCenterDTO request) throws RecycleCenterNotFoundException {
        Optional<RecycleCenter> recycleCentRef=recycleCenterRepo.findById(recycleCenterId);

        if(recycleCentRef.isEmpty()){
            throw new RecycleCenterNotFoundException("El centro de acopio no se encuentra en la base de datos.");

        }
        else{
            recycleCentRef.get().setBusinessHours(request.getBusinessHours());
            recycleCentRef.get().setDescription(request.getDescription());
            recycleCentRef.get().setName(request.getName());
            recycleCentRef.get().setCity(request.getCity());

            RecycleCenter recycleCenterDB = recycleCenterRepo.save(recycleCentRef.get());

            return RecycleCenterDTO.builder()
                    .id(recycleCenterDB.getIdRecycleCenter())
                    .name(recycleCenterDB.getName())
                    .description(recycleCenterDB.getDescription())
                    .businessHours(recycleCenterDB.getBusinessHours())
                    .city(recycleCenterDB.getCity())
                    .build();
        }
    }

    @Override
    public Optional<RecycleCenterDTO> findRecycleCenterById(Long recycleCenterId) {
        Optional<RecycleCenter> recycleCentRef=recycleCenterRepo.findById(recycleCenterId);

        return recycleCentRef.map(RecycleCenterMapper::toDTO);

    }

    @Override
    public List<RecycleCenterDTO> findByCity(String city) {
        List<RecycleCenter> listRecycleCnt = recycleCenterRepo.findAll();


        return listRecycleCnt.stream()
                .map(RecycleCenterMapper::toDTO)
                .filter(center -> center.getCity().equalsIgnoreCase(city))
                .collect(Collectors.toList());

    }

    @Override
    public List<RecycleCenterDTO> findAllRecycleCenter() {
        List<RecycleCenter> centers = recycleCenterRepo.findAll();
        return centers.stream()
                .map(RecycleCenterMapper::toDTO)
                .toList();
    }
}
