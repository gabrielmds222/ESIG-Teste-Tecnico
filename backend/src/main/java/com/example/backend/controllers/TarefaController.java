package com.example.backend.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class TarefaController {
    @GetMapping
    public ResponseEntity listaTarefas() {
        return ResponseEntity.ok("Rodou mlk");
    }
}
