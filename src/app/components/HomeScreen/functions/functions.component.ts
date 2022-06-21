import { Component, OnInit } from '@angular/core';
import { LoadscriptsService } from 'src/app/services/InterfaceServices/loadscripts.service';
import { HttpClient } from '@angular/common/http';
import { ImgurService } from '../../../services/HttpServices/imgur.service';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faWrench } from '@fortawesome/free-solid-svg-icons';
import { faStarOfLife } from '@fortawesome/free-solid-svg-icons';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-functions',
  templateUrl: './functions.component.html',
  styleUrls: ['./functions.component.scss']

})
export class FunctionsComponent implements OnInit {
  public imgur: Array<any> = [];
  faLanguage = faLanguage;
  faMoon = faMoon;
  faUser = faUser;
  faNewspaper = faNewspaper;
  faArrows = faArrowsRotate;
  faGear = faGear;
  faWrench = faWrench;
  faStarOfLife = faStarOfLife;
  faEyeslash = faEyeSlash;

  constructor(private _loadScripts:LoadscriptsService,private img:ImgurService) {
    _loadScripts.Charge(["test/main"]);
    _loadScripts.Charge(["home/index"]);
    this.img.getImgur().subscribe((response: any)=>{
      this.imgur = response
    })
   }

  ngOnInit(): void {
  }

}