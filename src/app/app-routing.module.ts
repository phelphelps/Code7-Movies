import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/pages/home/home.component';
import { MovieDetailComponent } from './modules/pages/movie-detail/movie-detail.component';
import { EmptyPageComponent } from './shared/components/empty-page/empty-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'filme/detalhes', component: MovieDetailComponent },
  { path: 'favoritos', component: EmptyPageComponent },
  { path: 'pesquisar', component: EmptyPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
