import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdsService {
  url = 'https://fakestoreapi.com/products/1'

  constructor(private http:HttpClient) { }

  getAds(){
    let header = new HttpHeaders()
    .set('Type-content', 'aplication/json')
    return this.http.get(this.url, {headers:header})
  }
}
