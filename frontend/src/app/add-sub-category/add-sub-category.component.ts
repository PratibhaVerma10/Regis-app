import { Component, OnInit } from '@angular/core';
import { Addsubcat } from '../addsubcats'; 

import { AddsubcatsService } from '../addsubcats.service';

@Component({
  selector: 'app-add-sub-category',
  templateUrl: './add-sub-category.component.html',
  styleUrls: ['./add-sub-category.component.css'],
  providers: [AddsubcatsService]
})
export class AddSubCategoryComponent implements OnInit {
  
  addsubcats: Addsubcat[];
   Addsubcat: Addsubcat;
  subcat: string;
  sname:string;

  constructor(private addsubcatsService: AddsubcatsService) { }

addAddsubcat(){
     const newAddsubcat ={
       subcat: this.subcat,
       sname: this.sname
     }
     this.addsubcatsService.addAddsubcat(newAddsubcat)
     .subscribe(addsubcat => {
       this.addsubcats.push(addsubcat);
       this.addsubcatsService.getAddsubcats()
      .subscribe( addsubcats =>
      this.addsubcats = addsubcat);
     });
    
   }
   deleteAddsubcat(id:any) {
    var addsubcats = this.addsubcats;
    this.addsubcatsService.deleteAddsubcat(id)
    .subscribe(data =>{
      if(data.n==1)
      {
        for(var i=0; i< addsubcats.length; i++ )
      {
      if(addsubcats[i]._id ==id )
      {
      addsubcats.splice(1,1);
      }
    }
    }
    })
  }
 
 //onFileSelected(event) {
  //this.selectedFile = event.target.files[0];
  //}

  ngOnInit() {
      this.addsubcatsService.getAddsubcats()
      .subscribe( addsubcats =>
      this.addsubcats = addsubcats);
   
  }

}
