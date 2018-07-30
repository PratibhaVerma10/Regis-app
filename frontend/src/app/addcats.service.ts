import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { Addcat } from './addcats';


@Injectable({
  providedIn: 'root'
})
export class AddcatsService {

  constructor(private http: Http) { }

  getAddcats() 
  {
    return this.http.get('http://localhost:3000/api/addcats')
    .map(res => res.json());
  }
 
  addAddcat(newAddcat) 
  {
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/api/addcat', newAddcat, {headers:headers})
      .map(res => res.json());
  }
 
  deleteAddcat(id)
   {
    return this.http.delete('http://localhost:3000/api/addcat/'+id)
     .map(res => res.json());
  }
 }
 