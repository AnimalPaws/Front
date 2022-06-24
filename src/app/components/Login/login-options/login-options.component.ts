import { Component, OnInit } from '@angular/core';
import { LoadscriptsService } from '../../../services/InterfaceServices/loadscripts.service';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faUserShield } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login-options',
  templateUrl: './login-options.component.html',
  styleUrls: ['./login-options.component.scss']
})
export class LoginOptionsComponent implements OnInit {
  faUser = faUser;
  faRightToBracket = faRightToBracket;
  faBuilding = faBuilding;
  faUserShield = faUserShield;

  constructor(private scripts:LoadscriptsService) { 
    scripts.Charge(["Login/login-options"])
  }

  ngOnInit(): void {
  }

}
