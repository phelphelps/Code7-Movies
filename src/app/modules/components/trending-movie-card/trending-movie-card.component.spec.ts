import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingMovieCardComponent } from './trending-movie-card.component';

describe('TrendingMovieCardComponent', () => {
  let component: TrendingMovieCardComponent;
  let fixture: ComponentFixture<TrendingMovieCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingMovieCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingMovieCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
