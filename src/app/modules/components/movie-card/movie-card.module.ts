import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MovieCardComponent } from './movie-card.component';

@NgModule({
  imports: [CommonModule],
  exports: [MovieCardComponent],
  declarations: [MovieCardComponent],
  providers: [],
})
export class MovieCardModule {}
