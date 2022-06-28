import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoostedFormComponent } from './boosted-form.component';

describe('BoostedFormComponent', () => {
  let component: BoostedFormComponent;
  let fixture: ComponentFixture<BoostedFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoostedFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoostedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
