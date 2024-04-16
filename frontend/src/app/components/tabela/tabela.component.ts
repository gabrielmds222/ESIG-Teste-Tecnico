import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { Component } from '@angular/core';

@Component({
  selector: 'app-tabela',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './tabela.component.html',
  styleUrl: './tabela.component.scss',
})
export class TabelaComponent {
  items: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.listarTarefas();
  }

  listarTarefas() {
    this.http.get<any[]>('http://localhost:8080/tarefas').subscribe(
      (response) => {
        this.items = response;
      },
      (error) => {
        console.error('Erro ao obter lista de tarefas:', error);
      }
    );
  }

  excluirTarefa(item: any) {
    console.log('Item excluído:', item);
    this.http.delete(`http://localhost:8080/tarefas/${item.id}`).subscribe(
      (response) => {
        console.log('Tarefa excluída com sucesso.');
        // Recarrega a lista após a exclusão bem-sucedida
        this.listarTarefas();
      },
      (error) => {
        console.error('Erro ao excluir tarefa:', error);
      }
    );
  }

  editarItem(item: any) {
    console.log('Item editado:', item);
  }

  concluirItem(item: any) {
    console.log('Item concluído:', item);
  }
}
