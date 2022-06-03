import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginEntitiesComponent } from './login-entities.component';

describe('LoginEntitiesComponent', () => {
  let component: LoginEntitiesComponent;
  let fixture: ComponentFixture<LoginEntitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginEntitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginEntitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
