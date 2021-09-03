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

  constructor() {
    this.image =
      'https://c4.wallpaperflare.com/wallpaper/410/867/750/vector-forest-sunset-forest-sunset-forest-wallpaper-preview.jpg';
    this.title = 'tit';
  }

  ngOnInit(): void {}
}
