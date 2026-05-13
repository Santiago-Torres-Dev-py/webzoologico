import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class animalService {
  apiUri = '/api/animals'; 
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getAllAnimalsData(): Observable<any> {
    return this.http.get<any>(this.apiUri);
  }

  getOneAnimal(id: any): Observable<any> {
    return this.http.get<any>(`${this.apiUri}/${id}`);
  }

  newAnimal(data: any): Observable<any> {
    return this.http.post<any>(this.apiUri, data, this.httpOptions);
  }

  updateAnimal(id: any, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUri}/${id}`, data, this.httpOptions);
  }

  // MÉTODO PARA DELETE (El que acabas de compartir)
  deleteAnimal(id: any): Observable<any> {
    return this.http.delete<any>(`${this.apiUri}/${id}`, this.httpOptions);
  }
}