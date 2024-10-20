import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSharedComponent } from './about-shared.component';

describe('AboutSharedComponent', () => {
  let component: AboutSharedComponent;
  let fixture: ComponentFixture<AboutSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutSharedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
