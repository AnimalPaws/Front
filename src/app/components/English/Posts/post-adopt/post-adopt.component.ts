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
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { UsersService } from 'src/app/services/HttpServices/users.service';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../../../services/AuthServices/auth.service';
import { SignInService } from '../../../../services/LoginServices/sign-in.service';
import { SignUp } from '../../../../models/LoginInterfaces/sign-up';
import { faSplotch } from '@fortawesome/free-solid-svg-icons';
import { LoadscriptsService } from '../../../../services/InterfaceServices/loadscripts.service';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { AdoptI } from '../../../../models/AdoptInterfaces/adopt.interface';
import { AdoptService } from '../../../../services/HttpServices/adopt.service';

@Component({
  selector: 'app-post-adopt',
  templateUrl: './post-adopt.component.html',
  styleUrls: ['./post-adopt.component.scss']
})
export class PostAdoptComponent implements OnInit {
  user: UserUp[] | any;
  post!:Posts[];
  adopt!: AdoptI[];
  profile!: SignUp[];
  userChat!: UserI[];
  ad: Array<any> = [1]
  numberOfLikes : number = 0;

  // FontAwesome Section //
  faMsg = faMessage;
  faHome = faHomeUser;
  faComment = faComment;
  faGear = faGear;
  faHeart = faHeart;
  faPaw = faPaw;
  faHandHoldingHeart = faHandHoldingHeart;
  faUsers = faUsers;
  faPlus = faPlus;
  faUser = faUser;
  faRightFromBracket = faRightFromBracket;
  faMobileScreenButton = faMobileScreenButton;
  faSmile = faSplotch;
  faLanguage = faLanguage;

  constructor(
    private http:HttpClient,
    public posts:PostService,
    private ads:AdsService,
    private usersChat:UsersService,
    private router:Router,
    public authService:AuthService,
    private sign:SignInService,
    private loadScripts:LoadscriptsService,
    private adopts:AdoptService) {
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
    this.adopts.getPost().subscribe(res=>{
      this.adopt = res;
    })
  }
  editPost(id:any){
    this.router.navigate(['Edit/En', id])
  }
  viewProfile(id:any){
    this.router.navigate(['Accounts/En', id])
  }
}
