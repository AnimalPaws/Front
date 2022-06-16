import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserUp } from '../../../models/LoginInterfaces/user-up';
import { PostService } from 'src/app/services/HttpServices/post.service';
import { Subscription } from 'rxjs';
import { AdsService } from 'src/app/services/HttpServices/ads.service';
import { Posts } from 'src/app/models/PostInterfaces/posts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-home',
  templateUrl: './post-home.component.html',
  styleUrls: ['./post-home.component.scss']
})
export class PostHomeComponent implements OnInit{
  user: UserUp[] | any;
  post!:Posts[];
  ad: Array<any> = [1]

  constructor(private http:HttpClient, private posts:PostService, private ads:AdsService, private router:Router) { }

  ngOnInit(): void {
    this.posts.getPost().subscribe(data =>{
      this.post = data;
    })
  }
  editPost(id:any){
    this.router.navigate(['Edit', id])
  }
}