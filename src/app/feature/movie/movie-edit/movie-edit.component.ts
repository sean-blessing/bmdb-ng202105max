import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from './../../../service/movie.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie.class';

@Component({
  selector: 'app-movie-edit',
  templateUrl: '../movie-maint-shared/movie-maint.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {

  title: string = 'Movie-Edit';
  movie: Movie = new Movie();
  submitBtnTitle: string = 'Edit';
  movieId: number = 0;

  constructor(
    private movieSvc: MovieService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(parms => this.movieId = parms["id"]);
    this.movieSvc.get(this.movieId).subscribe(
      resp => {
        this.movie = resp as Movie;
      },
      err => { console.log(err); }
    );
  }

  save() {
    this.movieSvc.edit(this.movie).subscribe(
      resp => {
        this.movie = resp as Movie;
        this.router.navigateByUrl("/movie-list");
      },
      err => { console.log(err); }
    );

  }


}
