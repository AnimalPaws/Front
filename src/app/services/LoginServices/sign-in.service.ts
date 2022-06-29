import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignUp } from '../../models/LoginInterfaces/sign-up';

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  url = 'https://ap-auth-server.azurewebsites.net/api/auth/authenticate'

  constructor(private http:HttpClient) { }

  logIn(username: string, password: string) {
    return this.http.post(this.url, { username, password });
  }
  getProfile():Observable<SignUp[]>{
    let ad = this.url;
    return this.http.get<SignUp[]>(ad);
  };
}
