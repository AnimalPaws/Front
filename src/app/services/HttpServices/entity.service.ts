import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EntityI } from '../../models/entities.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntityService {
  url = 'https://ap-api-server.azurewebsites.net/api/Donation'

  constructor(private http:HttpClient) { }
  getPost():Observable<EntityI[]>{
    let ad = this.url + "/";
    return this.http.get<EntityI[]>(ad);
  };
}
