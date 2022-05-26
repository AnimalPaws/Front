import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { LoadscriptsService } from 'src/app/services/loadscripts.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  public users: Array<any> = []

  constructor(private _LoadScripts:LoadscriptsService, private profile:ProfileService) { 
    _LoadScripts.Charge(["HomeScreen/preview/functions"])

    this.profile.getUsers().subscribe((response: any)=>{
      this.users = response
    })
  }

  ngOnInit(): void {
  }

}
