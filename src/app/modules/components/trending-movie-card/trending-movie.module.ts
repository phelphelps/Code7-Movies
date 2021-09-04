import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TrendingMovieCardComponent } from './trending-movie-card.component';

@NgModule({
  imports: [CommonModule],
  exports: [TrendingMovieCardComponent],
  declarations: [TrendingMovieCardComponent],
  providers: [],
})
export class TrendingMovieCardModule {}
