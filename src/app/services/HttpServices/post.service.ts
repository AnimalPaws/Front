import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { Posts } from 'src/app/models/PostInterfaces/posts';

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
}
