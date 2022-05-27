import { Component, OnInit } from '@angular/core';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faWrench } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contribuitor',
  templateUrl: './contribuitor.component.html',
  styleUrls: ['./contribuitor.component.scss']
})
export class ContribuitorComponent implements OnInit {
  faUser = faUser;
  faNewspaper = faNewspaper;
  faWrench = faWrench;
  faEyeslash = faEyeSlash;

  constructor() { }

  ngOnInit(): void {
  }

}
