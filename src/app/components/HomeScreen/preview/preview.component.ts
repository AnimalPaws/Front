import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/HttpServices/profile.service';
import { LoadscriptsService } from 'src/app/services/InterfaceServices/loadscripts.service';
import { AdsService } from '../../../services/HttpServices/ads.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  public ad: Array<any> = [0]

  constructor(private _LoadScripts:LoadscriptsService,private ads:AdsService) { 
    _LoadScripts.Charge(["HomeScreen/preview/functions"])

    this.ads.getAds().subscribe((response: any)=>{
      this.ad = response
    })
  }
  ngOnInit(): void {
  }
  showModal(){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'You are not logged in, log in to access this function!',
      footer: '<a href=""></a><a href="/SignUp" style="color: #fff; text-decoration: none; background-color: #098ab5; padding: 9px;border-radius:5px;border:4px solid #03d3fa;">Sign Up</a><div style="width:10%;"></div><a href="/SignIn" style="color: #fff; text-decoration: none; background-color: #7066e0; padding: 9px; border-radius:5px;border:4px solid #a49df3;">Sign In</a>',
      showCancelButton: false,
      showConfirmButton: false,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }
}
