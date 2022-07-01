import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { faUserPen } from '@fortawesome/free-solid-svg-icons';
import { LoadscriptsService } from '../../../../services/InterfaceServices/loadscripts.service';

@Component({
  selector: 'app-create-your-adopt',
  templateUrl: './create-your-adopt.component.html',
  styleUrls: ['./create-your-adopt.component.scss']
})
export class CreateYourAdoptComponent implements OnInit {

  constructor(private http:HttpClient, private loadScripts:LoadscriptsService) { }
  onSubmit(user: any){
    this.http.post('https://ap-api-server.azurewebsites.net/api/Contract', user)
    .subscribe((res)=>{
      console.warn("Response", res)
    })
  }

  ngOnInit(): void {
  }

}
