import { Component, OnInit } from '@angular/core';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';
import { ThemeService } from 'src/app/services/InterfaceServices/theme.service';
import { TranslateConfigService } from 'src/app/services/InterfaceServices/translate-config.service';
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
  selector: 'app-patch-notes',
  templateUrl: './patch-notes.component.html',
  styleUrls: ['./patch-notes.component.scss']
})
export class PatchNotesComponent implements OnInit {
  isDarkMode: boolean;
  faLanguage = faLanguage;
  faMoon = faMoon;
  faUser = faUser;
  faNewspaper = faNewspaper;
  faArrows = faArrowsRotate;
  faGear = faGear;
  faWrench = faWrench;
  faStarOfLife = faStarOfLife;
  faEyeslash = faEyeSlash;

  constructor(public translate:TranslateService, private translateConfigService: TranslateConfigService, private themeService: ThemeService, private _loadscripts:LoadscriptsService, private _LoadScripts:LoadscriptsService ) {
    this.translate.addLangs(['es', 'en']);
    this.translate.setDefaultLang('en');
    this.themeService.initTheme();
    this.isDarkMode = this.themeService.isDarkMode();
    _loadscripts.Charge(["home/index"]);
    _LoadScripts.Charge(["HomeScreen/scroll"])
  }
  toggleDarkMode() {
    this.isDarkMode = this.themeService.isDarkMode();

    this.isDarkMode
      ? this.themeService.update('light-mode')
      : this.themeService.update('dark-mode');
  }
  changeLanguage(type: string) {
    this.translateConfigService.changeLanguage(type);
  }

  ngOnInit(): void {
  }

}
