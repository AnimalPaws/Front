import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/HttpServices/post.service';
import { Posts } from '../../../../models/PostInterfaces/posts';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit {

  constructor(private activatedRouter:ActivatedRoute, private router:Router, private posts:PostService) { }

  dataPost!:Posts;

  editPost = new FormGroup({
    id: new FormControl(''),
    title: new FormControl(''),
    description: new FormControl('')
})

  ngOnInit(): void {
    let postid = this.activatedRouter.snapshot.paramMap.get('id')
    console.log(postid)
    this.posts.getAPost(postid).subscribe(res =>{
      this.dataPost = res
      this.editPost.setValue({
        'id' : this.dataPost.id,
        'title' : this.dataPost.title,
        'description': this.dataPost.description
      })
    });
  }
  updatePost(id: Posts){
    this.posts.updatePosts(id).subscribe(res=>{
      console.log(res)
    })
  }

}
