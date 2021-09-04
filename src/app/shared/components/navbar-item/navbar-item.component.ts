import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-navbar-item',
  templateUrl: './navbar-item.component.html',
  styleUrls: ['./navbar-item.component.scss'],
})
export class NavbarItemComponent implements OnInit {
  @Input() name: string;
  @Input() icon: string;
  @Input() isActiveNow: boolean;
  @Input() route: string;

  @Output() itemSelectedEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  itemSelected(route: string) {
    this.itemSelectedEvent.emit(route);
  }
}
