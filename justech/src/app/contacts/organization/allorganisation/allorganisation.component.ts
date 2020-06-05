import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {OrganisationService} from './../../../services/organisation.service';
import { FormGroup, FormControl} from '@angular/forms';
import { first } from 'rxjs/operators';
import {SharedserviceService} from './../../../services/shared/sharedservice.service';
@Component({
  selector: 'app-allorganisation',
  templateUrl: './allorganisation.component.html',
  styleUrls: ['./allorganisation.component.css']
})
export class AllorganisationComponent implements OnInit {
  Serachform:FormGroup;
all_organisation:any;
loading:boolean=false;
deleted=false;
date;nbrpage;textsearch;orderdate:FormControl;
page:number;
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private OrganisationService:OrganisationService,
    private SharedService:SharedserviceService
  ) {
    this.loading=true;

   }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{
      this.loadAllorganisation(params);
    })
   
      this.date=new FormControl('');
      this.nbrpage =new FormControl('page');
      this.textsearch=new FormControl('');
     this.orderdate=new FormControl('trier par date');
    
  }
  /*****************************************recherche*********************************/
 serach(){
   if(this.orderdate.value=="trier par date")
   {
     this.orderdate.setValue('')
   }
   if(this.nbrpage.value=="page")
   {
     this.nbrpage.setValue("")
   }
   
 var  data={"nbr":this.nbrpage.value,"orderby":this.orderdate.value,"textserach":this.textsearch.value,date:this.date.vamue};
 console.log(data)
  this.OrganisationService.all(this.page,data).pipe(first()).subscribe(res  =>{
    this.all_organisation=res;
   console.log(res)
    this.loading=false;
  })
      
  }
  serachdate(){
    alert(this.date.value)
  }
  /*******************************************end recherche*********************** */
  private loadAllorganisation(params){
    
  
    this.loading=true;

    if(params.page){
      this.page=params.page;
    }else{
      this.page=1
    }

    this.OrganisationService.all(this.page,{}).pipe(first()).subscribe(res  =>{
      this.all_organisation=res;
      
      this.loading=false;
    })
    
  }
  
  pageChange(newPage:number){
this.router.navigate(['/contact/organisation/all'],{queryParams : {page:newPage}});
}


delete(id)
{
 
if(confirm("voulez-vous de supprimer l\'organisation Définitivement "))
{
  this.SharedService.delete(id,'/organisation/delete').subscribe(
    res=>{
    
      console.log("5000")
    
    },
    error=>{
      alert("probleme de sup")
    }
  )
}
else
{
 return null;
}

}
}
