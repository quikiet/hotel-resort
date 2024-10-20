import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FristShowPageComponent } from './frist-show-page.component';

describe('FristShowPageComponent', () => {
  let component: FristShowPageComponent;
  let fixture: ComponentFixture<FristShowPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FristShowPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FristShowPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
