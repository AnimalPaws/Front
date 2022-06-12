import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginI } from '../../../models/LoginInterfaces/login.interface';
import { SignResponse } from '../../../models/LoginInterfaces/sign-response';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit, OnDestroy {

  formLogin: FormGroup;
  subRef$!: Subscription;

  constructor(private formBuilder: FormBuilder, private http:HttpClient, private router:Router) {
    this.formLogin = formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
   }

  ngOnInit(): void {
  }
  Login(){
    const userLogin: LoginI = {
      username: this.formLogin.value.username,
      password: this.formLogin.value.password
    };
    this.subRef$ = this.http.post<SignResponse>('https://ap-auth-server.azurewebsites.net/api/auth/authenticate/user', 
    userLogin,{observe: 'response'}).subscribe(res =>{
      const token:any = res.body?.response;
      console.log('token', token);
      sessionStorage.setItem('token', token);
      this.router.navigate(['/Home']);
    }, err => {
      console.log('Login Error', err);
    });
  }
  ngOnDestroy(): void {
    if (this.subRef$){
      this.subRef$.unsubscribe();
    }
  }
}
