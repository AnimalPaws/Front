import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  url = 'api/User'

  constructor(private http:HttpClient) {
   }
   getUsers(){
     let header = new HttpHeaders()
     .set('Type-content', 'aplication/json')
     return this.http.get(this.url, {headers:header})
   }
}
