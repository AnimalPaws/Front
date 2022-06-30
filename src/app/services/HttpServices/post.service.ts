import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Posts } from 'src/app/models/PostInterfaces/posts';
import { ProfileI } from '../../models/profile.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url = 'https://ap-api-server.azurewebsites.net/api/Announce'
  _url = 'https://ap-api-server.azurewebsites.net/api/Profile'

  constructor(private http:HttpClient) { }

  getPost():Observable<Posts[]>{
    let ad = this.url + "/";
    return this.http.get<Posts[]>(ad);
  };
  getAPost(id:any):Observable<Posts>{
    let ad = this.url + "/" + id;
    return this.http.get<Posts>(ad);
  }
  updatePosts(id:any):Observable<Posts>{
  let ad = this.url + "/"
  return this.http.put<Posts>(ad, id)
  }
  getAnnounceById(id: any):Observable<ProfileI[]>{
    return this.http.get<ProfileI[]>(`${this._url}/${id}`);
  }
}
