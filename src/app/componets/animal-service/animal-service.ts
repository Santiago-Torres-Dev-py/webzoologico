import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-animal-service',
  imports: [],
  templateUrl: './animal-service.html',
  styleUrl: './animal-service.css',
})

@Injectable({
  providedIn: 'root'
})
export class animalService {
  apiUri = '/api/Animal';

  httpOptions = new HttpHeaders().set('Content-Type', 'application/json');

  getAllAnimalsData(): Observable<any> {
    return this.http.get<any>(this.apiUri)
  }

  constructor(private http: HttpClient) { }
}