import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnimalComponet } from './componets/animal-componet/animal-componet';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AnimalComponet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('webzoologico');
  alias = "santiago";
}
