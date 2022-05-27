import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-user',
  templateUrl: './sign-user.component.html',
  styleUrls: ['./sign-user.component.scss']
})
export class SignUserComponent implements OnInit {

  constructor(private http:HttpClient) { }
  onSubmit(user: any)
  {
    this.http.post('/api/User', user)
    .subscribe((result) =>{
      console.warn("result", result)
    })
    console.warn(user)
  }

  ngOnInit(): void {
  }

}
