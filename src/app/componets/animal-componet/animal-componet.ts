import { Component, OnInit } from '@angular/core';
import { animalService } from '../animal-service/animal-service';

@Component({
  selector: 'app-animal-componet',
  imports: [],
  templateUrl: './animal-componet.html',
  styleUrl: './animal-componet.css',
})
export class AnimalComponet implements OnInit {
  animalList:any= [];

  constructor(private animalService:animalService) {}
  
  getAllAnimals() {
    this.animalService.getAllAnimalsData().subscribe((data: {}) => {
      this.animalList = data;
    });
  }
  ngOnInit() {
    this.getAllAnimals();
  }
}