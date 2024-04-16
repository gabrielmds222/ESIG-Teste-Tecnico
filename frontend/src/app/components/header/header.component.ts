import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, HttpClientModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @ViewChild('modalTemplate') modalTemplate!: TemplateRef<any>;
  showModal = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      titulo: ['', Validators.required],
      descricao: [''],
      responsavel: ['', Validators.required],
      deadline: ['', Validators.required],
      prioridade: ['', Validators.required],
    });
  }

  submitForm() {
    if (this.formGroup.valid) {
      console.log('Formulário enviado:', this.formGroup.value);
      this.http
        .post('http://localhost:8080/tarefas', this.formGroup.value)
        .subscribe(
          (response) => {
            console.log('Resposta do servidor:', response);
            // Você pode adicionar lógica adicional aqui, se necessário
          },
          (error) => {
            console.error('Erro ao enviar formulário:', error);
          }
        );
    } else {
      console.log('Por favor, preencha o formulário corretamente.');
    }
  }
}
