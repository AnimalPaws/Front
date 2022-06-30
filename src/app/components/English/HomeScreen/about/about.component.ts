import { Component, OnInit } from '@angular/core';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faWrench } from '@fortawesome/free-solid-svg-icons';
import { faStarOfLife } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { LoadscriptsService } from 'src/app/services/InterfaceServices/loadscripts.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  faLanguage = faLanguage;
  faMoon = faMoon;
  faUser = faUser;
  faNewspaper = faNewspaper;
  faArrows = faArrowsRotate;
  faGear = faGear;
  faWrench = faWrench;
  faStarOfLife = faStarOfLife;
  faEyeslash = faEyeSlash;

  constructor( private _LoadScripts:LoadscriptsService) {
    _LoadScripts.Charge(["HomeScreen/scroll"]);
  }

  ngOnInit(): void {
  }
  refresh(){
    window.location.reload();
  }

}
