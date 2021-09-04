import { Component, OnInit } from '@angular/core';
import { DataLoaderService } from 'src/app/core/services/data-loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  popularMovieList: Array<any>;

  constructor(private dataLoaderService: DataLoaderService) {}

  ngOnInit(): void {
    this.getPopularMovies();
  }

  getPopularMovies() {
    this.popularMovieList = this.dataLoaderService.getPopularMovies();
  }
}
