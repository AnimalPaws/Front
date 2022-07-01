import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdoptI } from '../../models/AdoptInterfaces/adopt.interface';

@Injectable({
  providedIn: 'root'
})
export class AdoptService {
  url = 'https://ap-api-server.azurewebsites.net/api/Adoption'

  constructor(private http:HttpClient) {}
  getPost():Observable<AdoptI[]>{
    let ad = this.url + "/";
    return this.http.get<AdoptI[]>(ad);
  };
}
