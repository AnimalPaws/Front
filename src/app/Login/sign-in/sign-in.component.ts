import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadscriptsService } from 'src/app/services/loadscripts.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  user = {email: [], password: []}

  constructor(private _LoadScripts:LoadscriptsService, private authService:AuthService, private router:Router) {
    _LoadScripts.Charge(["Login/sign"])
   }

  ngOnInit(): void {
  }
  logIn(){
    console.log(this.user);
    this.authService.signin(this.user).subscribe((res:any) =>{
      console.log(res);
      localStorage.setItem('token',res.token);
      this.router.navigate(['Post'])
    })
  }
}
