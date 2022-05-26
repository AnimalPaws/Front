import { Component, OnInit } from '@angular/core';
import { LoadscriptsService } from '../../services/loadscripts.service';

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
