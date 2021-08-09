import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Credit } from '../model/credit.class';

const url:string = "http://localhost:8080/api/credits";

@Injectable({
  providedIn: 'root'
})
export class CreditService {

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Credit[]> {
    return this.http.get(url+"/") as Observable<Credit[]>;
  }

}
