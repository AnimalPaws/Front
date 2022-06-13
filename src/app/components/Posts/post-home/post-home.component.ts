import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserUp } from '../../../models/LoginInterfaces/user-up';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-home',
  templateUrl: './post-home.component.html',
  styleUrls: ['./post-home.component.scss']
})
export class PostHomeComponent implements OnInit, OnDestroy {
  user: UserUp[] | any;
  subRef$!: Subscription;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    let httpHeaders: HttpHeaders = new HttpHeaders();
    const token = sessionStorage.getItem('token');
    console.log('Get Token', token);

    httpHeaders = httpHeaders.append('Authorization', 'Bearer' + token);

    this.subRef$ = this.http.get<UserUp[]>('url', {
      headers: httpHeaders,
      observe: 'response'
    }).subscribe(res => {
      this.user = res.body;
    },
    err => {
      console.log('API ERROR', err)
    });
  }
  ngOnDestroy(): void {
    if (this.subRef$) {
      this.subRef$.unsubscribe();
    }
  }
  logOut(){
    localStorage.removeItem('token')
  }

}
