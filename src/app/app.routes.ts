import { Routes } from '@angular/router';

import { AnimalComponet } from './componets/animal-componet/animal-componet';

//import { AnimalService } from './services/animal-service';

export const routes: Routes = [

  // PAGINA PRINCIPAL
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },

  // COMPONENTE ANIMALES
  {
    path: 'inicio',
    component: AnimalComponet
  }

];