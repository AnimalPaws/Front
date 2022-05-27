import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondPatchComponent } from './second-patch.component';

describe('SecondPatchComponent', () => {
  let component: SecondPatchComponent;
  let fixture: ComponentFixture<SecondPatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondPatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondPatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
