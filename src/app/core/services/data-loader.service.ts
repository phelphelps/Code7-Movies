import { Injectable } from '@angular/core';
import { popularMovieList } from 'src/app/constants/movies';

@Injectable({ providedIn: 'root' })
export class DataLoaderService {
  constructor() {}

  getPopularMovies() {
    return popularMovieList;
  }

  getMovieInfo() {
    const movieInfo = localStorage.getItem('movie-info');
    return movieInfo;
  }
}
