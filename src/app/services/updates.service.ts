import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UpdatesService {
  url = 'https://colombia-2272c-default-rtdb.firebaseio.com/.json'

  constructor(private http:HttpClient) { }

  getUpdates(){
    let header = new HttpHeaders()
    .set('Type-content', 'aplication/json')

    return this.http.get(this.url,{
      headers: header
    })
  }
}
