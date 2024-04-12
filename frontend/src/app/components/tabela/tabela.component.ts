import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tabela',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabela.component.html',
  styleUrl: './tabela.component.scss',
})
export class TabelaComponent {
  items = [
    {
      numero: 1,
      titulo: 'Gabriel',
      responsavel: 'João',
      deadline: '16/04/2024',
    },
  ];

  excluirItem(item: any) {
    console.log('Item excluído:', item);
  }

  editarItem(item: any) {
    console.log('Item editado:', item);
  }

  concluirItem(item: any) {
    console.log('Item concluído:', item);
  }
}
