import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignaturasformComponent } from './asignaturasform.component';

describe('AsignaturasformComponent', () => {
  let component: AsignaturasformComponent;
  let fixture: ComponentFixture<AsignaturasformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsignaturasformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsignaturasformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
