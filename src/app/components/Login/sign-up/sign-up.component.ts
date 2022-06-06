import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {

  constructor(private http:HttpClient) { }

  onSubmit(user: any)
  {
    this.http.post('/auth/register/user', user)
    .subscribe((result) =>{
      console.warn("result", result)
    })
    console.warn(user)
  }

  ngOnInit(): void {
  }

}
