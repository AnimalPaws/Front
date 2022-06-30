import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-chat-room',
  templateUrl: './post-chat-room.component.html',
  styleUrls: ['./post-chat-room.component.scss']
})
export class PostChatRoomComponent implements OnInit {

  userName:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
