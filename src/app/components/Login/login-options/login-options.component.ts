import { Component, OnInit } from '@angular/core';
import { LoadscriptsService } from '../../../services/InterfaceServices/loadscripts.service';

@Component({
  selector: 'app-login-options',
  templateUrl: './login-options.component.html',
  styleUrls: ['./login-options.component.scss']
})
export class LoginOptionsComponent implements OnInit {

  constructor(private scripts:LoadscriptsService) { 
    scripts.Charge(["Login/login-options"])
  }

  ngOnInit(): void {
  }

}
