import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasformComponent } from './notasform.component';

describe('NotasformComponent', () => {
  let component: NotasformComponent;
  let fixture: ComponentFixture<NotasformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotasformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotasformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
