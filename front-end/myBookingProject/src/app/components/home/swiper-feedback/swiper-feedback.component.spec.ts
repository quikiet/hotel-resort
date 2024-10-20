import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperFeedbackComponent } from './swiper-feedback.component';

describe('SwiperFeedbackComponent', () => {
  let component: SwiperFeedbackComponent;
  let fixture: ComponentFixture<SwiperFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SwiperFeedbackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwiperFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
