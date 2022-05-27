import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginI } from 'src/app/models/login.interface';
import { observable, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SignInService {
  url:string = '/api/User'

  constructor(private http:HttpClient) { }

  loginByEmail(form:LoginI){
    let address = this.url
  }
}
