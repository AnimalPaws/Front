import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateYourPostsComponent } from './create-your-posts.component';

describe('CreateYourPostsComponent', () => {
  let component: CreateYourPostsComponent;
  let fixture: ComponentFixture<CreateYourPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateYourPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateYourPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
