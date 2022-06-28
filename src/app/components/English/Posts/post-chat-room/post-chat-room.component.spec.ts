import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostChatRoomComponent } from './post-chat-room.component';

describe('PostChatRoomComponent', () => {
  let component: PostChatRoomComponent;
  let fixture: ComponentFixture<PostChatRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostChatRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostChatRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
