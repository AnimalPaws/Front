import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { UserI } from 'src/app/models/PostInterfaces/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = 'https://ap-api-server.azurewebsites.net/api/Profile'

  constructor(private http: HttpClient ) { }

  getUser():Observable<UserI[]>{
    let ad = this.url + "/";
    return this.http.get<UserI[]>(ad);
  };
  getAUser(id:any):Observable<UserI>{
    let ad = this.url + "/" + id;
    return this.http.get<UserI>(ad);
  };
}
