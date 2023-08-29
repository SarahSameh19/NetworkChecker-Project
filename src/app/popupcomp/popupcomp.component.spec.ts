import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupcompComponent } from './popupcomp.component';

describe('PopupcompComponent', () => {
  let component: PopupcompComponent;
  let fixture: ComponentFixture<PopupcompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupcompComponent]
    });
    fixture = TestBed.createComponent(PopupcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
