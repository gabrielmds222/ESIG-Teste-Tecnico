package com.example.backend.dto;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Builder;
import lombok.Data;

import java.util.Date;

@Data
@Builder
public class TarefaDto {
    private Long id;
    private String titulo;
    private String descricao;
    private String responsavel;
    private String prioridade;
    private Date deadline;

}
