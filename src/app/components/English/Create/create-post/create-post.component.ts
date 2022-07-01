import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  constructor(private http:HttpClient) { }
  onSubmit(user: any){
    this.http.post('https://ap-api-server.azurewebsites.net/api/Announce', user)
    .subscribe((res)=>{
      console.warn("Response", res)
    })
  }

  ngOnInit(): void {
  }

}
