import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserI } from 'src/app/models/PostInterfaces/users';
import { UsersService } from 'src/app/services/HttpServices/users.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-post-accounts',
  templateUrl: './post-accounts.component.html',
  styleUrls: ['./post-accounts.component.scss']
})
export class PostAccountsComponent implements OnInit {

  constructor(private activatedRouter:ActivatedRoute, private users:UsersService) { }

  dataUser!: UserI;

  showUser = new FormGroup({
    first_Name: new FormControl(''),
    surname: new FormControl(''),
    username: new FormControl('')
  })

  ngOnInit(): void {
    let userId = this.activatedRouter.snapshot.paramMap.get('id')
    console.log(userId)
    this.users.getAUser(userId).subscribe(res =>{
      this.dataUser = res;
      this.showUser.setValue({
        'first_Name': this.dataUser.first_Name,
        'surname': this.dataUser.surname
      })
    })
  }

}
