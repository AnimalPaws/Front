import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/HttpServices/profile.service';
import { LoadscriptsService } from 'src/app/services/InterfaceServices/loadscripts.service';
import Swal from 'sweetalert2';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faWrench } from '@fortawesome/free-solid-svg-icons';
import { faStarOfLife } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faGears } from '@fortawesome/free-solid-svg-icons';
import { faF } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  faMoon = faMoon;
  faUser = faUser;
  faNewspaper = faNewspaper;
  faArrows = faArrowsRotate;
  faGear = faGear;
  faWrench = faWrench;
  faStarOfLife = faStarOfLife;
  faEyeslash = faEyeSlash;
  faComment = faComment;
  faGears = faGears;
  faF = faF;
  public ad: Array<any> = [0];

  constructor(private _LoadScripts:LoadscriptsService){
    _LoadScripts.Charge(["HomeScreen/preview/functions"])
    _LoadScripts.Charge(["HomeScreen/preview/scroll"])
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
