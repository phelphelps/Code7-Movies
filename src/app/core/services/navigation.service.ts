import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NavigationService {
  constructor(private router: Router) {}

  routeChangeDetector(): Observable<any> {
    return new Observable((observer) => {
      this.router.events.subscribe((route) => observer.next(route));
    });
  }
}
