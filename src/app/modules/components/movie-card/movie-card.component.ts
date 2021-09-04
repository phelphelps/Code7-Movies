import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  constructor(private router: Router) {
    this.movieGenre = 'Science fiction';
    this.moviePoster =
      'https://p4.wallpaperbetter.com/wallpaper/675/275/718/joker-2019-movie-joker-joaquin-phoenix-actor-men-hd-wallpaper-preview.jpg';
    this.movieTitle = 'Title here';
  }

  @Input() moviePoster: string;
  @Input() movieGenre: string;
  @Input() movieTitle: string;
  @Input() movieDescription: string;
  @Input() movieDirector: string;
  @Input() movieYear: string;

  ngOnInit(): void {}

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
}
