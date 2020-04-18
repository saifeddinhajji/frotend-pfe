import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {OrganisationService} from './../../../services/organisation.service';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-allorganisation',
  templateUrl: './allorganisation.component.html',
  styleUrls: ['./allorganisation.component.css']
})
export class AllorganisationComponent implements OnInit {
all_organisation:any;
loading:boolean;
page:number;
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private OrganisationService:OrganisationService,
  ) {
    this.loading=true;

   }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{
      this.loadAllorganisation(params);
    })
  }
  private loadAllorganisation(params){
    
  
    this.loading=true;

    if(params.page){
      this.page=params.page;
    }else{
      this.page=1
    }

    this.OrganisationService.all(this.page).pipe(first()).subscribe(res  =>{
      this.all_organisation=res;
      console.log(this.all_organisation);
      this.loading=false;
    })
  }
  pageChange(newPage:number){
this.router.navigate(['/contact/organisation/all'],{queryParams : {page:newPage}});
}

}
