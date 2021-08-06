import { MovieService } from './../../../service/movie.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie.class';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];
  title: string = 'Movie List';

  constructor(private movieSvc: MovieService) { }

  ngOnInit(): void {
    this.movieSvc.list().subscribe(
      resp => { this.movies = resp as Movie[];
                console.log("list of movies: ", this.movies); },
      err => { console.log(err);}
    );
  }

}
