import { Component, OnInit } from '@angular/core';
import { Addsubsubcat } from '../addsubsubcats';
import {  AddsubsubcatsService } from '../addsubsubcats.service';

@Component({
  selector: 'app-add-sub-sub-category',
  templateUrl: './add-sub-sub-category.component.html',
  styleUrls: ['./add-sub-sub-category.component.css'],
  providers: [AddsubsubcatsService]
})
export class AddSubSubCategoryComponent implements OnInit {

  addsubsubcats: Addsubsubcat[];
  Addsubsubcat: Addsubsubcat;        
  subcat:string;
  subsubcat:string;
  sscat:string;

 constructor(private addsubsubcatsService: AddsubsubcatsService) { }

 addAddsubsubcat(){
    const newAddsubsubcat ={
      subcat: this.subcat,
      subsubcat: this.subsubcat,
      sscat: this.sscat
    }
    this.addsubsubcatsService.addAddsubsubcat(newAddsubsubcat)
    .subscribe(addsubsubcat => {
      this.addsubsubcats.push(addsubsubcat);
      this.addsubsubcatsService.getAddsubsubcats()
     .subscribe( addsubsubcats =>
     this.addsubsubcats = addsubsubcat);
    });
   
  }
  deleteAddsubsubcat(id:any) {
   var addsubsubcats = this.addsubsubcats;
   this.addsubsubcatsService.deleteAddsubsubcat(id)
   .subscribe(data =>{
     if(data.n==1)
     {
       for(var i=0; i< addsubsubcats.length; i++ )
     {
     if(addsubsubcats[i]._id ==id )
     {
     addsubsubcats.splice(1,1);
     }
   }
   }
   })
 }

//onFileSelected(event) {
 //this.selectedFile = event.target.files[0];
 //}

 ngOnInit() {
     this.addsubsubcatsService.getAddsubsubcats()
     .subscribe( addsubsubcats =>
     this.addsubsubcats = addsubsubcats);
  
 }

}