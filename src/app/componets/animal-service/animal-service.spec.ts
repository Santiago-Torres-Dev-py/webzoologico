import { ComponentFixture, TestBed } from '@angular/core/testing';

import { animalService } from './animal-service';

describe('AnimalService', () => {
  let component: animalService;
  let fixture: ComponentFixture<animalService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [animalService],
    }).compileComponents();

    fixture = TestBed.createComponent(animalService);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
