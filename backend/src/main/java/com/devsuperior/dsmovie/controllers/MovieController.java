package com.devsuperior.dsmovie.controllers;

import com.devsuperior.dsmovie.DTO.MovieDTO;
import com.devsuperior.dsmovie.entities.Movie;
import com.devsuperior.dsmovie.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/movies")
public class MovieController {

    @Autowired
    private MovieService service;
    @GetMapping
    public Page<MovieDTO> findAll(Pageable pageable) {

            return service.findAll(pageable);
    }

    @RequestMapping(method = RequestMethod.GET, path="/{id}")
    public MovieDTO findById( @PathVariable Long id) {

        return service.findById(id);
    }

}
