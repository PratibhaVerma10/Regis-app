import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { Addsubcat } from './addsubcats';

@Injectable({
  providedIn: 'root'
})
export class AddsubcatsService {

  constructor(private http: Http) { }

  getAddsubcats() 
  {
    return this.http.get('http://localhost:3000/api/addsubcats')
    .map(res => res.json());
  }
 
  addAddsubcat(newAddsubcat) 
  {
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/api/addsubcat', newAddsubcat, {headers:headers})
      .map(res => res.json());
  }
 
  deleteAddsubcat(id)
   {
    return this.http.delete('http://localhost:3000/api/addsubcat/'+id)
     .map(res => res.json());
  }
 }
