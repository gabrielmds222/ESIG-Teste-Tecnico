import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionaTarefaComponent } from './adiciona-tarefa.component';

describe('AdicionaTarefaComponent', () => {
  let component: AdicionaTarefaComponent;
  let fixture: ComponentFixture<AdicionaTarefaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdicionaTarefaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdicionaTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
