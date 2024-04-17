package com.example.backend.controllers;

;
import com.example.backend.exceptions.ResourceNotFoundException;
import com.example.backend.models.Tarefa;
import com.example.backend.repositories.TarefaRepository;

import org.springframework.http.ResponseEntity;
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

    @PutMapping("tarefas/{id}")
    public ResponseEntity<Tarefa> editaTarefa(@PathVariable Long id, @RequestBody Tarefa tarefa) {
        Tarefa editaTarefa = tarefaRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Essa tarefa não existe"));

        editaTarefa.setTitulo(tarefa.getTitulo());
        editaTarefa.setDescricao(tarefa.getDescricao());
        editaTarefa.setResponsavel(tarefa.getResponsavel());
        editaTarefa.setPrioridade(tarefa.getPrioridade());
        editaTarefa.setDeadline(tarefa.getDeadline());

        tarefaRepository.save(editaTarefa);

        return ResponseEntity.ok(editaTarefa);
    }

}
