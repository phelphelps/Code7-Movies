import { Component, OnInit } from '@angular/core';
import { userAvatar } from 'src/app/constants/assets';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  userAvatar: string;

  constructor() {}

  ngOnInit(): void {
    this.userAvatar = userAvatar;
  }
}
