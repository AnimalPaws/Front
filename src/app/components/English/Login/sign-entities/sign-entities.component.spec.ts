import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignEntitiesComponent } from './sign-entities.component';

describe('SignEntitiesComponent', () => {
  let component: SignEntitiesComponent;
  let fixture: ComponentFixture<SignEntitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignEntitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignEntitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
