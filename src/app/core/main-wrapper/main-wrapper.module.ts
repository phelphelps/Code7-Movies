import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HomeModule } from 'src/app/modules/pages/home/home.module';
import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';
import { HeaderModule } from '../components/header/header.module';
import { MainWrapperComponent } from './main-wrapper.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    HeaderModule,
    HomeModule,
  ],
  exports: [MainWrapperComponent],
  declarations: [MainWrapperComponent],
  providers: [],
})
export class MainWrapperModule {}
