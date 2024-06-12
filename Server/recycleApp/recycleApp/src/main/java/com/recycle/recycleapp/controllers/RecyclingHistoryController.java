package com.recycle.recycleapp.controllers;

import com.recycle.recycleapp.dtos.RecyclingHistoryDTO;
import com.recycle.recycleapp.dtos.RecyclingHistoryRequest;
import com.recycle.recycleapp.dtos.responseDtos.ResponseRecyclingHistoryDTO;
import com.recycle.recycleapp.entities.RecyclingHistory;
import com.recycle.recycleapp.services.RecyclingHistoryService;
import com.recycle.recycleapp.utils.Response;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/history")

public class RecyclingHistoryController {

    @Autowired
    RecyclingHistoryService recyclingHistoryService;

    @GetMapping("/personId/{id}")
    public ResponseEntity<Response> listRecycleHistory(@PathVariable Integer id){

        List<ResponseRecyclingHistoryDTO> listaRecycleResponse=new ArrayList<>();
        List<RecyclingHistory> list=recyclingHistoryService.findRecyclingHistoryByPerson(id);
        for (RecyclingHistory elem: list
             ) {
            Long totalPoints=elem.getWaste().getPoints()*elem.getAmount();
            listaRecycleResponse.add(new ResponseRecyclingHistoryDTO(
                    elem.getWaste().getType().toString(),
                    elem.getDate(),
                    elem.getRecycleCenter().getName(),
                    totalPoints
            ));
        }

        Response response = new Response(true, HttpStatus.OK, listaRecycleResponse);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/personDni/{dni}")
    public ResponseEntity<Response> listRecycleHistoryByDni(@PathVariable String dni){

        List<ResponseRecyclingHistoryDTO> listaRecycleResponse=new ArrayList<>();
        List<RecyclingHistory> list=recyclingHistoryService.findRecyclingHistoryByDni(dni);
        for (RecyclingHistory elem: list
        ) {
            Long totalPoints=elem.getWaste().getPoints()*elem.getAmount();
            listaRecycleResponse.add(new ResponseRecyclingHistoryDTO(
                    elem.getWaste().getType().toString(),
                    elem.getDate(),
                    elem.getRecycleCenter().getName(),
                    totalPoints
            ));
        }

        Response response = new Response(true, HttpStatus.OK, listaRecycleResponse);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/listarPersonaConectada")
    public ResponseEntity<Response> listRecycleHistory(Authentication authentication){

        List<ResponseRecyclingHistoryDTO> listaRecycleResponse=new ArrayList<>();
        List<RecyclingHistory> list=recyclingHistoryService.findRecyclingHistoryByToken(authentication);
        for (RecyclingHistory elem: list
        ) {
            Long totalPoints=elem.getWaste().getPoints()*elem.getAmount();
            listaRecycleResponse.add(new ResponseRecyclingHistoryDTO(
                    elem.getWaste().getType().toString(),
                    elem.getDate(),
                    elem.getRecycleCenter().getName(),
                    totalPoints
            ));
        }

        Response response = new Response(true, HttpStatus.OK, listaRecycleResponse);
        return ResponseEntity.ok(response);
    }

    @PreAuthorize("hasRole('ROLE_RECEIVER')")
    @Operation(summary = "Crear un historial de reciclaje", description = "Sólo un usuario con rol RECEIVER puede registrar un historial de reciclaje")
    @PostMapping("/recycler")
    public ResponseEntity<Response> createRecyclingHistory(@RequestBody RecyclingHistoryRequest request, Authentication authentication){

        Response response = new Response(true, HttpStatus.CREATED,recyclingHistoryService.createRecyclingHistory(request, authentication));
        return ResponseEntity.ok(response);
    }


}
