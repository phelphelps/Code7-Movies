import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty-page',
  templateUrl: './empty-page.component.html',
  styleUrls: ['./empty-page.component.scss'],
})
export class EmptyPageComponent implements OnInit {
  emptyPageVectorPath: string;

  constructor() {}

  ngOnInit(): void {
    this.emptyPageVectorPath = '../../../assets/images/empty_page.svg';
  }
}
