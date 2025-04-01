import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Videogame } from '../models/Videogame';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideogamesService {

  private apiUrl = "http://localhost:3000/videogames";
  private apiVideogameByID = "http://localhost:3000/videogame";

  constructor(private http: HttpClient) {}

  getVideogames(): Observable<Videogame[]> {
    return this.http.get<Videogame[]>(this.apiUrl);
  }

  getVideogameById(id: string): Observable<Videogame> {
    return this.http.get<Videogame>(`${this.apiVideogameByID}/${id}`);
  }

  deleteVideogame(id: string): Observable<any> {
    return this.http.delete(`${this.apiVideogameByID}/${id}`, { responseType: 'text' });
  }

  updateVideogame(id: string, videogame: any): Observable<any> {
    return this.http.put(`${this.apiVideogameByID}/${id}`, videogame);
  }
}
