import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Actor } from '../model/actor.class';

const url:string = "http://localhost:8080/api/actors/";

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Actor[]> {
    return this.http.get(url) as Observable<Actor[]>;
  }

}
