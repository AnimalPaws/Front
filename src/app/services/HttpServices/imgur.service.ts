import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImgurService {
  url = 'https://rickandmortyapi.com/api/character'

  constructor(private http:HttpClient) { }
  getImgur(){
    let header = new HttpHeaders()
    .set('Type-content', 'aplication/json')
    return this.http.get(this.url, {headers:header})
  }
}
