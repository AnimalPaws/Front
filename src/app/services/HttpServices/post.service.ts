import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { Posts } from 'src/app/models/PostInterfaces/posts';
import { ResponseI } from 'src/app/models/response';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url = 'https://ap-api-server.azurewebsites.net/Announcement'

  constructor(private http:HttpClient) { }

  getPost():Observable<Posts[]>{ 
    let ad = this.url + "/";
    return this.http.get<Posts[]>(ad);
  };
  getAPost(id:any):Observable<Posts>{
    let ad = this.url + "/" + id;
    return this.http.get<Posts>(ad);
  }
  updatePosts(/*id: string, post: Posts*/)/*:Observable<any>*/{
   /* return this.http.put(this.url + id,post)*/
  }
}