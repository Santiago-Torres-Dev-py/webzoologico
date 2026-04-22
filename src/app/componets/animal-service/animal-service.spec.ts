import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalService } from './animal-service';

describe('AnimalService', () => {
  let component: AnimalService;
  let fixture: ComponentFixture<AnimalService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimalService],
    }).compileComponents();

    fixture = TestBed.createComponent(AnimalService);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
