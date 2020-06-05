import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {SharedserviceService} from '../../../services/shared/sharedservice.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {Location} from '@angular/common';
import {ListpaysService} from './../../../services/listpays.service'
import {OrganisationService} from './../../../services/organisation.service';
import { NotificationService } from '../../../services/notification.service';
import { Item } from 'src/app/models/Item';;
@Component({
  selector: 'app-updateorganisation',
  templateUrl: './updateorganisation.component.html',
  styleUrls: ['./updateorganisation.component.css']
})
export class UpdateorganisationComponent implements OnInit {
_id:any;
loading = false;
  submitted = false;
updateorg:FormGroup;

organisation:any;
all_pays:String[];


all_service:Item[];
all_type:Item[];

inputphone:boolean=false;
  phoneplus:boolean=false;
  arraytel: Array<number>=[];
  listtel:String;
  test: Array<any>=[];
  default:string="selctionner un pays";

  constructor( private routeact:ActivatedRoute,
    private router:Router,
    private SharedService:SharedserviceService,
    private _location: Location,
    private ListpaysService: ListpaysService,
    private organisationService:OrganisationService
    ,private notifyService : NotificationService) { }

  ngOnInit(): void {
    this.listservice();
    this.listtype();
    this.all_pays=this.ListpaysService.getlistpays();
  
    
    
                      this._id= this.routeact.snapshot.params['id'];
                      if(!this._id)
                      {
                        //this._location.back();
                        this.router.navigate(['/contact/organisation/all'],{queryParams : {page:1}});


                      }
                      this.SharedService.findById(this._id,'/organisation/find').subscribe(
                       res=>{this.organisation=res;
                        this.listtel=this.organisation.listetelp.toString();
                        this.updateorg= new FormGroup({
     
                          name:new FormControl(this.organisation.name,[Validators.required]),
                          abreviation :new FormControl(this.organisation.abreviation),
                          description:new FormControl(this.organisation.description),
                          email:new FormControl(this.organisation.email,[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
                          type:new FormControl(this.organisation.type,[Validators.required]),
                          domaine:new FormControl(this.organisation.domaine,[Validators.required]),
                          logo:new FormControl(''),
                          listetelp:new FormControl(this.organisation.listetelp.toString()),
                          fax:new FormControl(this.organisation.fax),
                          pays:new FormControl(this.organisation.pays),
                          ville:new FormControl(this.organisation.ville),
                        });
                       
                        this.arraytel=this.organisation.listetelp;
                      },
                     
                       error =>{console.log(error)}
                      
                      )
                    
                   }
        
 listtelphone(){
  if(this.listtel)
 {this.test=this.listtel.split(",");}
  this.updateorg.controls['listetelp'].setValue(this.test)
}           
               
                   
                   listservice(){
                    this.organisationService.listservice().subscribe(res=>{this.all_service=res})
                  }
                  listtype(){
                    this.organisationService.listtype().subscribe(res=>{this.all_type=res;
                    })
                  }

                  getphone(value)
{
  event.stopPropagation();
  this.inputphone=true;
  if(value){
   
    this.arraytel.push(value)
    
    this.listtel=this.arraytel.toString();
  }}


  onupdate(){
    this.submitted=true;
    this.loading=true;
    this.listtelphone();
    
    this.SharedService.update(this._id,'/organisation/update',this.updateorg.value).subscribe(
        res=>{
          console.log("res",res)}
        ,
        error =>{
          
          console.log("error",error) 
         }
         ,
         ()=>{alert("termine")}
    )
   
 //   location.reload()
   }
}
