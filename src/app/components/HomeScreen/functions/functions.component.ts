import { LoadscriptsService } from 'src/app/services/InterfaceServices/loadscripts.service';
import { Component, OnInit } from '@angular/core';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';
import { ThemeService } from 'src/app/services/InterfaceServices/theme.service';
import { TranslateConfigService } from 'src/app/services/InterfaceServices/translate-config.service';

@Component({
  selector: 'app-functions',
  templateUrl: './functions.component.html',
  styleUrls: ['./functions.component.scss']
})
export class FunctionsComponent implements OnInit {
  isDarkMode: boolean;
  faLanguage = faLanguage;

  constructor(public translate:TranslateService, private translateConfigService: TranslateConfigService, private themeService: ThemeService) {
    this.translate.addLangs(['es', 'en']);
    this.translate.setDefaultLang('en');
    this.themeService.initTheme();
    this.isDarkMode = this.themeService.isDarkMode();
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
