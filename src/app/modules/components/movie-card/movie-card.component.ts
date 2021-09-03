import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  constructor() {
    this.movieGenre = 'Science fiction';
    this.moviePoster =
      'https://p4.wallpaperbetter.com/wallpaper/675/275/718/joker-2019-movie-joker-joaquin-phoenix-actor-men-hd-wallpaper-preview.jpg';
    this.movieTitle = 'Title here';
  }

  @Input() moviePoster: string;
  @Input() movieGenre: string;
  @Input() movieTitle: string;

  ngOnInit(): void {}
}
