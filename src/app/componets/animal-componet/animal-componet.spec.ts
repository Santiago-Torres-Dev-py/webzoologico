import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalComponet } from './animal-componet';

describe('AnimalComponet', () => {
  let component: AnimalComponet;
  let fixture: ComponentFixture<AnimalComponet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimalComponet],
    }).compileComponents();

    fixture = TestBed.createComponent(AnimalComponet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
