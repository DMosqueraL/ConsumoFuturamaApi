import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CharacterInterface } from './characterInterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  baseUrl: string;

  constructor(private http: HttpClient) {

    this.baseUrl ='https://futuramaapi.herokuapp.com/api/v2/characters';
  }

  getDetails(): Observable<CharacterInterface[]>{
        return this.http.get<CharacterInterface[]>(`${this.baseUrl}`);
  }
}
