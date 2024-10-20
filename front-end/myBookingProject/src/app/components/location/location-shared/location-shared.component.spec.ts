import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationSharedComponent } from './location-shared.component';

describe('LocationSharedComponent', () => {
  let component: LocationSharedComponent;
  let fixture: ComponentFixture<LocationSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LocationSharedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
