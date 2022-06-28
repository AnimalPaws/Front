import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostEntitiesComponent } from './post-entities.component';

describe('PostEntitiesComponent', () => {
  let component: PostEntitiesComponent;
  let fixture: ComponentFixture<PostEntitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostEntitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostEntitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
