import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainWrapperModule } from './core/components/main-wrapper/main-wrapper.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    MainWrapperModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
