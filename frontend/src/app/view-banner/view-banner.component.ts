import { Component, OnInit } from '@angular/core';
import { BannersService } from '../banners.service';
import { Banner } from '../banners';

@Component({
  selector: 'app-view-banner',
  templateUrl: './view-banner.component.html',
  styleUrls: ['./view-banner.component.css']
})
export class ViewBannerComponent implements OnInit {

  banners: Banner[];
  Banner: Banner;        
  subcat:string;
  sub:string;
  

 constructor(private bannersService: BannersService) { }

 addBanner(){
    const newBanner ={
      subcat: this.subcat,
      sub: this.sub
     
    }
    this.bannersService.addBanner(newBanner)
    .subscribe(banner => {
      this.banners.push(banner);
      this.bannersService.getBanners()
     .subscribe( banners =>
     this.banners = banners);
    });
   
  }
  deleteBanner(id:any) {
   var banners = this.banners;
   this.bannersService.deleteBanner(id)
   .subscribe(data =>{
     if(data.n==1)
     {
       for(var i=0; i< banners.length; i++ )
     {
     if(banners[i]._id ==id )
     {
     banners.splice(1,1);
     }
   }
   }
   })
 }

//onFileSelected(event) {
 //this.selectedFile = event.target.files[0];
 //}

 ngOnInit() {
     this.bannersService.getBanners()
     .subscribe( banners =>
     this.banners = banners);
  
 }

}