import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAccountsComponent } from './post-accounts.component';

describe('PostAccountsComponent', () => {
  let component: PostAccountsComponent;
  let fixture: ComponentFixture<PostAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostAccountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
