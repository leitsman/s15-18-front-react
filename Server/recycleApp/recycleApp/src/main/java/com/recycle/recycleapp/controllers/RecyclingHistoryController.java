package com.recycle.recycleapp.controllers;

import com.recycle.recycleapp.dtos.RecyclingHistoryDTO;
import com.recycle.recycleapp.dtos.RecyclingHistoryRequest;
import com.recycle.recycleapp.dtos.responseDtos.ResponseRecyclingHistoryDTO;
import com.recycle.recycleapp.entities.RecyclingHistory;
import com.recycle.recycleapp.services.RecyclingHistoryService;
import com.recycle.recycleapp.utils.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/v1/history")

public class RecyclingHistoryController {

    @Autowired
    RecyclingHistoryService recyclingHistoryService;

    @GetMapping("/personId/{id}")
    public List<ResponseRecyclingHistoryDTO> listRecycleHistory(@PathVariable Long id){

        List<ResponseRecyclingHistoryDTO> listaRecycleResponse=new ArrayList<>();
        List<RecyclingHistory> list=recyclingHistoryService.findRecyclingHistoryByPerson(id);
        for (RecyclingHistory elem: list
             ) {
            int totalPoints=elem.getWaste().getPoints()*elem.getAmount();
            listaRecycleResponse.add(new ResponseRecyclingHistoryDTO(
                    elem.getWaste().getType().toString(),
                    elem.getDate(),
                    elem.getRecycleCenter().getName(),
                    totalPoints
            ));
        }

        return listaRecycleResponse;

    }

    @PostMapping("/recycler")
    public ResponseEntity<Response> createRecyclingHistory(@RequestBody RecyclingHistoryRequest request){
        System.out.println(request);
        recyclingHistoryService.createRecyclingHistory(request);
        Response response = new Response(true, HttpStatus.CREATED);
        return ResponseEntity.ok(response);
    }


}
