import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadesformComponent } from './actividadesform.component';

describe('ActividadesformComponent', () => {
  let component: ActividadesformComponent;
  let fixture: ComponentFixture<ActividadesformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActividadesformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActividadesformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
