import { Component, OnInit } from '@angular/core';
import { LoadscriptsService } from 'src/app/services/InterfaceServices/loadscripts.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  constructor(private _LoadScripts:LoadscriptsService) { 
    _LoadScripts.Charge(["404/error"])
  }

  ngOnInit(): void {
  }

}
