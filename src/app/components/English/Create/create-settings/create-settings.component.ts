import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-settings',
  templateUrl: './create-settings.component.html',
  styleUrls: ['./create-settings.component.scss']
})
export class CreateSettingsComponent implements OnInit {

  constructor(private http:HttpClient) { }
  onSubmit(user: any){
    this.http.post('https://ap-api-server.azurewebsites.net/api/Adoption', user)
    .subscribe((res)=>{
      console.warn("Response", res)
    })
  }

  ngOnInit(): void {
  }

}
