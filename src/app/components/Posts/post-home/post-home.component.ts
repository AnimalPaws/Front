import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { faHomeUser, faMessage } from '@fortawesome/free-solid-svg-icons';
import { faHouseUser } from '@fortawesome/free-solid-svg-icons';
import { UserUp } from '../../../models/LoginInterfaces/user-up';
import { PostService } from 'src/app/services/HttpServices/post.service';
import { AdsService } from 'src/app/services/HttpServices/ads.service';
import { Posts } from 'src/app/models/PostInterfaces/posts';
import { Router } from '@angular/router';
import { UserI } from 'src/app/models/PostInterfaces/users';
import { UsersService } from 'src/app/services/HttpServices/users.service';

@Component({
  selector: 'app-post-home',
  templateUrl: './post-home.component.html',
  styleUrls: ['./post-home.component.scss']
})
export class PostHomeComponent implements OnInit{
  // API SECTION //
  user: UserUp[] | any;
  post!:Posts[];
  userChat!: UserI[];
  ad: Array<any> = [1]

  // FontAwesome Section //
  faMsg = faMessage;
  faHome = faHomeUser;

  constructor(private http:HttpClient, private posts:PostService, private ads:AdsService, private usersChat:UsersService, private router:Router) { }

  ngOnInit(): void {
    this.posts.getPost().subscribe(data =>{
      this.post = data;
    })
    this.usersChat.getUser().subscribe(res =>{
      this.userChat = res;
    })
  }
  editPost(id:any){
    this.router.navigate(['Edit', id])
  }
  viewProfile(id:any){
    this.router.navigate(['Accounts', id])
  }
}