import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url = 'http://localhost:46551/Announcement'

  constructor(private http:HttpClient) { }

  getPost(){
    let header = new HttpHeaders()
    .set('type-content', 'aplication/json')

  return this.http.get(this.url, {
    headers: header
  });
  }
}
