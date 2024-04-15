package com.example.backend.controllers;

import com.example.backend.models.Tarefa;
import com.example.backend.repositories.TarefaRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
public class TarefaController {
    private TarefaRepository tarefaRepository;

    TarefaController(TarefaRepository tarefaRepository) {
    this.tarefaRepository = tarefaRepository;
}

    @GetMapping("/tarefas")
    List<Tarefa> all() {
    return tarefaRepository.findAll();

}

    @PostMapping("/tarefas")
    public Tarefa cadastrarTarefa(@RequestBody Tarefa novaTarefa) {
        return tarefaRepository.save(novaTarefa);
    }

    @DeleteMapping("tarefas/{id}")
    void deletaTarefa(@PathVariable Long id) {
        tarefaRepository.deleteById(id);
    }
}
