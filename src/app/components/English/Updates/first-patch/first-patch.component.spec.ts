import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPatchComponent } from './first-patch.component';

describe('FirstPatchComponent', () => {
  let component: FirstPatchComponent;
  let fixture: ComponentFixture<FirstPatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstPatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstPatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
