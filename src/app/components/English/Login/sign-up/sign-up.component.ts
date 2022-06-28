import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { faUserPen } from '@fortawesome/free-solid-svg-icons';
import { LoadscriptsService } from '../../../../services/InterfaceServices/loadscripts.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {

  faUserPen = faUserPen;

  constructor(private http:HttpClient, private loadScripts:LoadscriptsService) {
    loadScripts.Charge(["SignUp/sign"])
  }

  onSubmit(user: any){
    this.http.post('https://ap-auth-server.azurewebsites.net/api/auth/register/user', user)
    .subscribe((res)=>{
      console.warn("Response", res)
    })
  }
  showModal(){
    Swal.fire({
      icon: 'success',
      title: 'Congrats',
      text: 'Your account has been successfully created try it out now',
      footer: '<a href=""><a href="/Login/SignIn" style="color: #fff; text-decoration: none; background-color: #7066e0; padding: 9px; border-radius:5px;border:4px solid #a49df3;">Sign In</a>',
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
  ngOnInit(): void {
  }

}
