import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSharedComponent } from './contact-shared.component';

describe('ContactSharedComponent', () => {
  let component: ContactSharedComponent;
  let fixture: ComponentFixture<ContactSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactSharedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
