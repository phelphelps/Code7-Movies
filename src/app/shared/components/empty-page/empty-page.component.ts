import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty-page',
  templateUrl: './empty-page.component.html',
  styleUrls: ['./empty-page.component.scss'],
})
export class EmptyPageComponent implements OnInit {
  title: string;
  description: string;

  emptyPageVectorPath: string;

  constructor() {}

  ngOnInit(): void {
    this.emptyPageVectorPath = '../../../assets/images/empty_page.svg';
    this.title = 'Oops!';
    this.description = `This page is not ready yet. We're working on it to be up soon! :)`;
  }
}
