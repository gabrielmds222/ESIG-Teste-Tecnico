import { CommonModule } from '@angular/common';
import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
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
}
