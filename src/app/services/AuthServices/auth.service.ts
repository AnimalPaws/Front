import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { SignInService } from '../LoginServices/sign-in.service';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLog$ = new BehaviorSubject<boolean>(false)
  private readonly TOKEN_NAME = 'Session Token'
  isLog = this.isLog$.asObservable()
  helper = new JwtHelperService();
  decodeToken: any;

  get token(){
    return localStorage.getItem(this.TOKEN_NAME)
  }

  constructor(private sign:SignInService, private http:HttpClient) {
    this.isLog$.next(!!this.token)
  }

  logIn(username: string, password: string){
    return this.sign.logIn(username, password).pipe(
      tap((res: any) =>{
        localStorage.setItem(this.TOKEN_NAME, res.token)
        this.isLog$.next(true)
        this.decodeToken = this.helper.decodeToken(res.token);
        console.log(this.decodeToken)
      })
    )
  }
}
