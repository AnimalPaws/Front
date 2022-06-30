import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { faHomeUser, faMessage } from '@fortawesome/free-solid-svg-icons';
import { UserUp } from '../../../../models/LoginInterfaces/user-up';
import { PostService } from 'src/app/services/HttpServices/post.service';
import { AdsService } from 'src/app/services/HttpServices/ads.service';
import { Posts } from 'src/app/models/PostInterfaces/posts';
import { Router } from '@angular/router';
import { UserI } from 'src/app/models/PostInterfaces/users';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faGears } from '@fortawesome/free-solid-svg-icons';
import { UsersService } from 'src/app/services/HttpServices/users.service';
import { AuthService } from '../../../../services/AuthServices/auth.service';
import { SignInService } from '../../../../services/LoginServices/sign-in.service';
import { SignUp } from '../../../../models/LoginInterfaces/sign-up';
import { LoadscriptsService } from '../../../../services/InterfaceServices/loadscripts.service';

@Component({
  selector: 'app-post-adopt',
  templateUrl: './post-adopt.component.html',
  styleUrls: ['./post-adopt.component.scss']
})
export class PostAdoptComponent implements OnInit {
  user: UserUp[] | any;
  post!:Posts[];
  profile!: SignUp[];
  userChat!: UserI[];
  ad: Array<any> = [1]

  faMsg = faMessage;
  faHome = faHomeUser;
  faComment = faComment;
  faGears = faGears;

  constructor(private http:HttpClient, public posts:PostService, private ads:AdsService, private usersChat:UsersService, private router:Router, public authService:AuthService, private sign:SignInService, private loadScripts:LoadscriptsService) {
    loadScripts.Charge(["Posts/heart"])
   }

  ngOnInit(): void {
    this.posts.getPost().subscribe(data =>{
      this.post = data;
    })
    this.usersChat.getUser().subscribe(res =>{
      this.userChat = res;
    })
    this.sign.getProfile().subscribe(res =>{
      this.profile = res;
    })
  }
  editPost(id:any){
    this.router.navigate(['Edit/En', id])
  }
  viewProfile(id:any){
    this.router.navigate(['Accounts/En', id])
  }
}
