import { Component, OnInit } from '@angular/core';
import { DataLoaderService } from 'src/app/core/services/data-loader.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  movieInfo: any;

  constructor(private dataLoaderService: DataLoaderService) {}

  ngOnInit(): void {
    this.getMovieInfo();
  }

  getMovieInfo() {
    this.movieInfo = this.dataLoaderService.getMovieInfo();
    this.movieInfo = JSON.parse(this.movieInfo);
  }
}
