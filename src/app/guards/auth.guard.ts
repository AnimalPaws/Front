import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/AuthServices/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService:AuthService, private router:Router){

  }
  canActivate():boolean{
    if(!this.authService.isAuth()){
      console.log('Invalid Or Expired Token');
      this.router.navigate(['Home'])
      return false;
    }
    return true;  
  }
  
}
