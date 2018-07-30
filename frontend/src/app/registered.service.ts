import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Register } from './registered';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class RegisteredService {

  constructor(private http: Http) { }

 getRegistered() 
 {
   return this.http.get('http://localhost:3000/api/registered')
   .map(res => res.json());
 }

 addRegister(newRegister) 
 {
   var headers = new Headers();
   headers.append('Content-Type','application/json');
   return this.http.post('http://localhost:3000/api/register', newRegister, {headers:headers})
     .map(res => res.json());
 }

 deleteRegister(id)
  {
   return this.http.delete('http://localhost:3000/api/register/'+id)
    .map(res => res.json());
 }
}
