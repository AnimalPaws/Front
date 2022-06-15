import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit {

  constructor(private activatedRouter:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    let postid = this.activatedRouter.snapshot.paramMap.get('id')
    console.log(postid);
  }

}
