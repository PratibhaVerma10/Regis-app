import { Component, OnInit } from '@angular/core';
import { AdvertisersService } from '../advertisers.service';
import { Advertiser } from '../advertisers';

@Component({
  selector: 'app-add-advertiser',
  templateUrl: './add-advertiser.component.html',
  styleUrls: ['./add-advertiser.component.css']
})
export class AddAdvertiserComponent implements OnInit {

  advertisers: Advertiser[];
  Advertise: Advertiser;        
  fname:string;
  
 constructor(private advertisersService: AdvertisersService) { }

 addAdvertiser(){
    const newAdvertiser ={
      fname: this.fname
    }
    this.advertisersService.addAdvertiser(newAdvertiser)
    .subscribe(advertiser => {
      this.advertisers.push(advertiser);
      this.advertisersService.getAdvertisers()
     .subscribe( advertisers =>
     this.advertisers = advertisers);
    });
   
  }
  deleteAdvertiser(id:any) {
   var advertisers = this.advertisers;
   this.advertisersService.deleteAdvertiser(id)
   .subscribe(data =>{
     if(data.n==1)
     {
       for(var i=0; i< advertisers.length; i++ )
     {
     if(advertisers[i]._id ==id )
     {
      advertisers.splice(1,1);
     }
   }
   }
   })
 }

//onFileSelected(event) {
 //this.selectedFile = event.target.files[0];
 //}

 ngOnInit() {
     this.advertisersService.getAdvertisers()
     .subscribe( advertisers =>
     this.advertisers = advertisers);
  
 }

}
