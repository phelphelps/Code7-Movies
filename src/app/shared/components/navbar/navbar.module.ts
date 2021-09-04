import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarItemModule } from '../navbar-item/navbar-item.module';

import { NavbarComponent } from './navbar.component';

@NgModule({
  imports: [NavbarItemModule, CommonModule],
  exports: [NavbarComponent],
  declarations: [NavbarComponent],
  providers: [],
})
export class NavbarModule {}
