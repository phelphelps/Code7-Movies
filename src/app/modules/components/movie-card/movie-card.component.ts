import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loadingSVG } from 'src/app/constants/assets';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  loaderSVG: string;
  imageLoaded: boolean = false;

  constructor(private router: Router) {}

  @Input() moviePoster: string;
  @Input() movieGenre: string;
  @Input() movieTitle: string;
  @Input() movieDescription: string;
  @Input() movieDirector: string;
  @Input() movieYear: string;

  ngOnInit(): void {
    this.loaderSVG = loadingSVG;
  }

  openDetails() {
    const movieInfo = {
      poster: this.moviePoster,
      genre: this.movieGenre,
      title: this.movieTitle,
      description: this.movieDescription,
      director: this.movieDirector,
      year: this.movieYear,
    };

    localStorage.setItem('movie-info', JSON.stringify(movieInfo));

    this.router.navigate(['filme/detalhes']);
  }

  setImageAsLoaded() {
    this.imageLoaded = true;
  }
}
