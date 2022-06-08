import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'https://ap-auth-server.azurewebsites.net'

  constructor(private http:HttpClient, private jwtHelper:JwtHelperService) { }

  signin(user:any){
    return this.http.post(`${this.url}/api/auth/authenticate/user`,user);
  }

  isAuth():boolean{
    const token:any = localStorage.getItem('token');
    if(this.jwtHelper.isTokenExpired(token) || !localStorage.getItem('token')){
      return false;
    }
    return true;
  }
}
