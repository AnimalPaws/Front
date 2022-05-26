import { Component, OnInit } from '@angular/core';
import { UpdatesService } from 'src/app/services/updates.service';

@Component({
  selector: 'app-patch-notes',
  templateUrl: './patch-notes.component.html',
  styleUrls: ['./patch-notes.component.scss']
})
export class PatchNotesComponent implements OnInit {
  public updates: Array<any> = [0]

  constructor(private update:UpdatesService) { 
    this.update.getUpdates().subscribe((response:any)=>{
      this.update = response
      console.log(response)
    })
  }

  ngOnInit(): void {
  }

}
