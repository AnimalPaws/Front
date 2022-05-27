import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAdoptComponent } from './post-adopt.component';

describe('PostAdoptComponent', () => {
  let component: PostAdoptComponent;
  let fixture: ComponentFixture<PostAdoptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostAdoptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostAdoptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
