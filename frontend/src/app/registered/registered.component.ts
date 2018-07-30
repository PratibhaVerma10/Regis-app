import { Component, OnInit } from '@angular/core';
import { RegisteredService } from '../registered.service';
import { Register } from '../registered';

@Component({
  selector: 'app-registered',
  templateUrl: './registered.component.html',
  styleUrls: ['./registered.component.css'],
  providers: [RegisteredService]
})
export class RegisteredComponent implements OnInit {
   registered: Register[];
   register: Register;
   name:string;
   email:string;
   password:string;
   image:string;

  constructor(private registeredService: RegisteredService) { }

  addRegister(){
     const newRegister ={
       name: this.name,
       email: this.email,
       password: this.password,
       image: this.image
     }
     this.registeredService.addRegister(newRegister)
     .subscribe(register => {
       this.registered.push(register);
       this.registeredService.getRegistered()
      .subscribe( registered =>
      this.registered = registered);
     });
    
   }
   deleteRegister(id:any) {
    var registered = this.registered;
    this.registeredService.deleteRegister(id)
    .subscribe(data =>{
      if(data.n==1)
      {
        for(var i=0; i< registered.length; i++ )
      {
      if(registered[i]._id ==id )
      {
      registered.splice(1,1);
      }
    }
    }
    })
  }
 
 //onFileSelected(event) {
  //this.selectedFile = event.target.files[0];
  //}

  ngOnInit() {
      this.registeredService.getRegistered()
      .subscribe( registered =>
      this.registered = registered);
   
  }

}
