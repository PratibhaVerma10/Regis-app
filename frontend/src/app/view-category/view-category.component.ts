import { Component, OnInit } from '@angular/core';
import { AddcatsService } from '../addcats.service';
import { Addcat } from '../addcats';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {
  addcats: Addcat[];
  AddCat: Addcat;
  cat_name:string;
  constructor(private addcatsService: AddcatsService) { }

  addAddcat(){
    const newAddcat ={
      cat_name: this.cat_name
    }
    this.addcatsService.addAddcat(newAddcat)
    .subscribe(addcat => {
      this.addcats.push(addcat);
      this.addcatsService.getAddcats()
     .subscribe( registered =>
     this.addcats = addcat);
    });
   
  }
  deleteAddcat(id:any) {
   var addcats = this.addcats;
   this.addcatsService.deleteAddcat(id)
   .subscribe(data =>{
     if(data.n==1)
     {
       for(var i=0; i< addcats.length; i++ )
     {
     if(addcats[i]._id ==id )
     {
     addcats.splice(1,1);
     }
   }
   }
   })
 }

//onFileSelected(event) {
 //this.selectedFile = event.target.files[0];
 //}

 ngOnInit() {
     this.addcatsService.getAddcats()
     .subscribe( addcats =>
     this.addcats = addcats);
  
 }

}

