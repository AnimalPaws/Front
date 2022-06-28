import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoostedInfoComponent } from './boosted-info.component';

describe('BoostedInfoComponent', () => {
  let component: BoostedInfoComponent;
  let fixture: ComponentFixture<BoostedInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoostedInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoostedInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
