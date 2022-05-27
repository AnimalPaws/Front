import { Component, OnInit } from '@angular/core';
import { LoadscriptsService } from 'src/app/services/InterfaceServices/loadscripts.service';

@Component({
  selector: 'app-functions',
  templateUrl: './functions.component.html',
  styleUrls: ['./functions.component.scss']
})
export class FunctionsComponent implements OnInit {

  constructor(private _loadScripts:LoadscriptsService) {
    _loadScripts.Charge(["test/main"])
   }

  ngOnInit(): void {
  }

}
