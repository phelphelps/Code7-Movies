import { Component, OnInit } from '@angular/core';
import { navbarConfig } from 'src/app/constants/navbar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  navbarItems: any;

  constructor() {
    this.navbarItems = navbarConfig;
  }

  ngOnInit(): void {}
}
