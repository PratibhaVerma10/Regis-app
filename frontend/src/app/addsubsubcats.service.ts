import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { Addsubsubcat } from './addsubsubcats';

@Injectable({
  providedIn: 'root'
})
export class AddsubsubcatsService {

  constructor(private http: Http) { }

  getAddsubsubcats() 
  {
    return this.http.get('http://localhost:3000/api/addsubsubcats')
    .map(res => res.json());
  }
 
  addAddsubsubcat(newAddsubsubcat) 
  {
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/api/addsubsubcat', newAddsubsubcat, {headers:headers})
      .map(res => res.json());
  }
 
  deleteAddsubsubcat(id)
   {
    return this.http.delete('http://localhost:3000/api/addsubsubcat/'+id)
     .map(res => res.json());
  }
 }

