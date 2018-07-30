import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { Advertiser } from './advertisers';

@Injectable({
  providedIn: 'root'
})
export class AdvertisersService {

  constructor(private http: Http) { }

  getAdvertisers() 
  {
    return this.http.get('http://localhost:3000/api/advertisers')
    .map(res => res.json());
  }
 
  addAdvertiser(newAdvertiser) 
  {
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/api/advertiser', newAdvertiser, {headers:headers})
      .map(res => res.json());
  }
 
  deleteAdvertiser(id)
   {
    return this.http.delete('http://localhost:3000/api/advertiser/'+id)
     .map(res => res.json());
  }
 }
