import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, NavigationEnd, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { navbarConfig } from 'src/app/constants/navbar';
import { NavigationService } from 'src/app/core/services/navigation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  navbarItems: Array<any>;
  navigationSubscriber: Subscription;

  constructor(
    private router: Router,
    private navigationService: NavigationService
  ) {
    this.navbarItems = navbarConfig;
    console.log(this.navbarItems);
  }

  ngOnInit(): void {
    this.navigationSubscriber = this.navigationService
      .routeChangeDetector()
      .subscribe((routeEvent) => this.changeCurrentPageIndicator(routeEvent));
  }

  openPage(route: string) {
    this.router.navigate([route]);
  }

  changeCurrentPageIndicator(routeEvent: any) {
    let currentUrlPath: string;
    if (routeEvent instanceof NavigationEnd) {
      currentUrlPath = routeEvent.url;
      this.navbarItems.forEach((navbarItem) => {
        navbarItem.isActiveNow =
          navbarItem.route === currentUrlPath ? true : false;
      });
    }
  }

  ngOnDestroy() {
    this.navigationSubscriber.unsubscribe();
  }
}
