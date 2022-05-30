import { Component, OnInit } from '@angular/core';
import { LoadscriptsService } from 'src/app/services/InterfaceServices/loadscripts.service';
import { HttpClient } from '@angular/common/http';
import { ImgurService } from '../../../services/HttpServices/imgur.service';

@Component({
  selector: 'app-functions',
  templateUrl: './functions.component.html',
  styleUrls: ['./functions.component.scss']
})
export class FunctionsComponent implements OnInit {
  public imgur: Array<any> = []

  constructor(private _loadScripts:LoadscriptsService,private img:ImgurService) {
    _loadScripts.Charge(["test/main"])
    this.img.getImgur().subscribe((response: any)=>{
      this.imgur = response
    })
   }

  ngOnInit(): void {
  }

}
