import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTrendComponent } from './post-trend.component';

describe('PostTrendComponent', () => {
  let component: PostTrendComponent;
  let fixture: ComponentFixture<PostTrendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostTrendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
