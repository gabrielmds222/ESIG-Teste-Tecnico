package com.example.backend.repositories;


import com.example.backend.models.Tarefa;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TarefaRepository extends JpaRepository<Tarefa, Long> {
    List<Tarefa> findByTituloAndPrioridade(String titulo, String prioridade);
    List<Tarefa> findByTitulo(String titulo);
    List<Tarefa> findByPrioridade(String prioridade);
}
