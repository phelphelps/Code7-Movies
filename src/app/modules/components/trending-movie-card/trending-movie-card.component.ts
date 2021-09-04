import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-trending-movie-card',
  templateUrl: './trending-movie-card.component.html',
  styleUrls: ['./trending-movie-card.component.scss'],
})
export class TrendingMovieCardComponent implements OnInit {
  @Input() image: string;
  @Input() title: string;
  @Input() status: string;
  @Input() icon: string;
  @Input() movieSynopsis: string;

  constructor() {
    this.image = 'assets/images/trending_movie.jpg';
    this.title = 'Thor';
    this.movieSynopsis =
      'This epic adventure spans the Marvel Universe; from present day Earth to the realm of Asgard.';
  }

  ngOnInit(): void {}
}
