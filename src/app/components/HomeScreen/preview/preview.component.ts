import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/HttpServices/profile.service';
import { LoadscriptsService } from 'src/app/services/InterfaceServices/loadscripts.service';
import { AdsService } from '../../../services/HttpServices/ads.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  public ad: Array<any> = [0]

  constructor(private _LoadScripts:LoadscriptsService,private ads:AdsService) { 
    _LoadScripts.Charge(["HomeScreen/preview/functions"])

    this.ads.getAds().subscribe((response: any)=>{
      this.ad = response
    })
  }

  ngOnInit(): void {
  }

}
