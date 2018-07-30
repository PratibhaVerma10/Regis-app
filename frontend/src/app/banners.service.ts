import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { Banner } from './banners';

@Injectable({
  providedIn: 'root'
})
export class BannersService {

  constructor(private http: Http) { }

  getBanners() 
  {
    return this.http.get('http://localhost:3000/api/banners')
    .map(res => res.json());
  }
 
  addBanner(newBanner) 
  {
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/api/banner', newBanner, {headers:headers})
      .map(res => res.json());
  }
 
  deleteBanner(id)
   {
    return this.http.delete('http://localhost:3000/api/banner/'+id)
     .map(res => res.json());
  }
 }

