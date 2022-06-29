import { Component, OnInit } from '@angular/core';
import { LoadscriptsService } from 'src/app/services/InterfaceServices/loadscripts.service';
import { HttpClient } from '@angular/common/http';
import { ImgurService } from '../../../../services/HttpServices/imgur.service';
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
  selector: 'app-functions-es',
  templateUrl: './functions-es.component.html',
  styleUrls: ['./functions-es.component.scss']
})
export class FunctionsEsComponent implements OnInit {
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


  constructor() { }

  ngOnInit(): void {
  }

}
