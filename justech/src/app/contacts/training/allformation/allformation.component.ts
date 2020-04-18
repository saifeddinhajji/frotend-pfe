import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormationService} from './../../../services/formation.service';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-allformation',
  templateUrl: './allformation.component.html',
  styleUrls: ['./allformation.component.css']
})
export class AllformationComponent implements OnInit {

  all_formation:any;
  loading:boolean;
  page:number;
    constructor(
      private route:ActivatedRoute,
      private router:Router,
      private FormationService:FormationService,
    ) {
      this.loading=true;
  
     }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{
      this.loadAllformation(params);
    })

  }

  private loadAllformation(params){
    
  
    this.loading=true;

    if(params.page){
      this.page=params.page;
    }else{
      this.page=1
    }

    this.FormationService.all(this.page).pipe(first()).subscribe(res  =>{
      this.all_formation=res;
      console.log(this.all_formation);
      this.loading=false;
    })
  }
  pageChange(newPage:number){
this.router.navigate(['/contact/formation/all'],{queryParams : {page:newPage}});
}
}
