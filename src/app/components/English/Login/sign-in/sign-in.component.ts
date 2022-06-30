import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/AuthServices/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  form = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)
  });

  constructor(private auth:AuthService, private router:Router) {}

  submitForm(){
    if (this.form.invalid){
      return;
    }
    this.auth.logIn(this.form.get('username')?.value, this.form.get('password')?.value).subscribe((res) =>{
      this.router.navigate(['/Home/En'])
    })
  }
}
