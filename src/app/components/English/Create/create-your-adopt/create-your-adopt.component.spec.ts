import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateYourAdoptComponent } from './create-your-adopt.component';

describe('CreateYourAdoptComponent', () => {
  let component: CreateYourAdoptComponent;
  let fixture: ComponentFixture<CreateYourAdoptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateYourAdoptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateYourAdoptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
