import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiantesformComponent } from './estudiantesform.component';

describe('EstudiantesformComponent', () => {
  let component: EstudiantesformComponent;
  let fixture: ComponentFixture<EstudiantesformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstudiantesformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstudiantesformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
