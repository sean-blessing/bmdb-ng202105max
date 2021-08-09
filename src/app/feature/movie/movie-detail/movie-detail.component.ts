import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/model/movie.class';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  title: string = 'Movie-Detail';
  movie: Movie = new Movie();
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

  delete() {
    this.movieSvc.delete(this.movieId).subscribe(
      resp => {
        this.movie = resp as Movie;
        this.router.navigateByUrl('/movie-list');
      },
      err => {
        console.log(err);
      }
    );

  }

}
