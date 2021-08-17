import { SystemService } from './../../../service/system.service';
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
  // default sort column to id (assumes table has an id field)
  sortCriteria: string = 'id';
  // default sort criteria of ascending
  sortOrder: string = 'asc';

  constructor(
    private movieSvc: MovieService,
    private sysSvc: SystemService
  ) { }

  ngOnInit(): void {
    // console log just demonstrates how to get the logged in user
    console.log("Movie List, checking loggedInUser in sysSvc:  ", this.sysSvc.loggedInUser);

    // call checkLogin from sysSvc to forward to login if not authenticated
    this.sysSvc.checkLogin();

    this.movieSvc.list().subscribe(
      resp => {
        this.movies = resp as Movie[];
        console.log("list of movies: ", this.movies);
      },
      err => { console.log(err); }
    );
  }

  sortBy(column: string): void {
    console.log("movie list sortBy called")
    if(column == this.sortCriteria){
      this.sortOrder = (this.sortOrder == "desc") ? "asc" : "desc";
    }
    this.sortCriteria = column;
  }

}
