import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie.class';

const URL: string = 'http://localhost:8080/api/movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Movie[]> {
    return this.http.get(URL+'/') as Observable<Movie[]>;
  }
}
