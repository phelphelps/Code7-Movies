import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NavbarItemComponent } from './navbar-item.component';

@NgModule({
  imports: [CommonModule],
  exports: [NavbarItemComponent],
  declarations: [NavbarItemComponent],
  providers: [],
})
export class NavbarItemModule {}
