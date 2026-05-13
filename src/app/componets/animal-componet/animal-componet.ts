import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { animalService } from '../animal-service/animal-service';
import { take } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {CommonModule} from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-animal-componet',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './animal-componet.html',
  styleUrls: ['./animal-componet.css'],
})

export class AnimalComponet implements OnInit {
  animalList:any= [];
  animalForm: FormGroup | any;
  idAnimal: any;
  editableAnimal: boolean = false;


  constructor(
    private animalService:animalService,
    private formBuilder: FormBuilder,
    private router: Router,
    private cd: ChangeDetectorRef, 
    private toastr: ToastrService
    ) { }
  
  getAllAnimals() {
    this.animalService.getAllAnimalsData().subscribe((data: {}) => {
      this.animalList = data;
      console.log("datos", data)
      this.cd.detectChanges();
    });
  }
  ngOnInit() {
    this.animalForm = this.formBuilder.group({
      nombre: '',
      edad: 0,
      tipo: ''
    });
    this.getAllAnimals();
  }

  ngOnChanges() {
    this.getAllAnimals();
  }

  newMessage(messageText: string) {
    this.toastr.success('Clic aquí para actualizar la lista', messageText)
    .onTap
    .pipe(take(1))
    .subscribe(() => window.location.reload());
  }

  newAnimalEntry() {
    this.animalService.newAnimal(this.animalForm.value).subscribe(
      () => {
        // Redirigiendo a la ruta actual /inicio y recargando la ventana
      this.router.navigate(['/inicio'])
        .then(() => {
          this.newMessage('Registro exitoso');
        })
      }
    );
  }

  updateAnimalEntry() {
    //removiendo valores vacios del formulario de actualizacion
    for (let key in this.animalForm.value) {
      if (this.animalForm.value[key] === ''){
        this.animalForm.removeControl(key);
      }
    }
    this.animalService.updateAnimal(
      this.idAnimal,
      this.animalForm.value).subscribe(
        () => {
          //enviando mensaje de confirmacion
          this.newMessage("Animal editando")
      }
    );
  }
  toggleEditAnimal(id: any) {
    this.idAnimal = id;
    console.log(this.idAnimal)
    this.animalService.getOneAnimal(id).subscribe(
      data => {
        this.animalForm.setValue({
          nombre: data.nombre,
          edad: data.edad,
          tipo: data.tipo,
        });
      }
    );
    this.editableAnimal = !this.editableAnimal;
  }

  deleteAnimalEntry(id: any) {
    console.log(id)
    this.animalService.deleteAnimal(id).subscribe(
    () => {
    //Enviando mensaje de confirmación
    this.newMessage("Animal eliminado");
    }
  );
 }

}