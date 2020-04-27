import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ContactService} from './../../../services/contact.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-allclient',
  templateUrl: './allclient.component.html',
  styleUrls: ['./allclient.component.css']
})
export class AllclientComponent implements OnInit {

  all_client:any;
  loading:boolean;
  page:number;
    constructor(
      private route:ActivatedRoute,
      private router:Router,
      private contactService:ContactService,
    ) {
      this.loading=true;
  
     }
  ngOnInit(): void {
    
    this.route.queryParams.subscribe(params=>{
      this.loadAllclient(params);
    })

  }

  private loadAllclient(params){
    
  
    this.loading=true;

    if(params.page){
      this.page=params.page;
    }else{
      this.page=1
    }

    this.contactService.all(this.page).pipe(first()).subscribe(res  =>{
      this.all_client=res;
      console.log(this.all_client);
      this.loading=false;
    })
  }
  pageChange(newPage:number){
this.router.navigate(['/contact/client/all'],{queryParams : {page:newPage}});
}
}
