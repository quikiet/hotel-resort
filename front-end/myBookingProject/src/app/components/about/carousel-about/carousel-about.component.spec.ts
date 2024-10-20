import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselAboutComponent } from './carousel-about.component';

describe('CarouselAboutComponent', () => {
  let component: CarouselAboutComponent;
  let fixture: ComponentFixture<CarouselAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarouselAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
