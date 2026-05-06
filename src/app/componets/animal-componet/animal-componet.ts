import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { animalService } from '../animal-service/animal-service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-animal-componet',
  imports: [CommonModule],
  templateUrl: './animal-componet.html',
  styleUrl: './animal-componet.css',
})
export class AnimalComponet implements OnInit {
  animalList:any= [];

  constructor(private animalService:animalService, private cd: ChangeDetectorRef) {}
  
  getAllAnimals() {
    this.animalService.getAllAnimalsData().subscribe((data: {}) => {
      this.animalList = data;
      console.log("datos", data)
      this.cd.detectChanges();
    });
  }
  ngOnInit() {
    this.getAllAnimals();
  }

  ngOnChanges() {
    this.getAllAnimals();
  }
}