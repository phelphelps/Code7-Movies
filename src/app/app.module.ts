import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/pages/home/home.component';
import { MovieCardComponent } from './modules/components/movie-card/movie-card.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { NavbarItemComponent } from './shared/components/navbar-item/navbar-item.component';
import { MainWrapperComponent } from './core/components/main-wrapper/main-wrapper.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TrendingMovieCardComponent } from './modules/components/trending-movie-card/trending-movie-card.component';
import { MovieDetailComponent } from './modules/pages/movie-detail/movie-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieCardComponent,
    NavbarComponent,
    NavbarItemComponent,
    MainWrapperComponent,
    TrendingMovieCardComponent,
    MovieDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
