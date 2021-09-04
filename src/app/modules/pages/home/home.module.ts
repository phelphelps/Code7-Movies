import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MovieCardModule } from '../../components/movie-card/movie-card.module';
import { TrendingMovieCardModule } from '../../components/trending-movie-card/trending-movie.module';

import { HomeComponent } from './home.component';

@NgModule({
  imports: [CommonModule, MovieCardModule, TrendingMovieCardModule],
  exports: [HomeComponent],
  declarations: [HomeComponent],
  providers: [],
})
export class HomeModule {}
