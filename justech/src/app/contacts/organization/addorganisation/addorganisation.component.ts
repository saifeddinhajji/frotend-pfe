import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { NotificationService } from '../../../services/notification.service';
import { HttpClient } from '@angular/common/http';

import { first } from 'rxjs/operators';
import {OrganisationService} from './../../../services/organisation.service';
import { Item } from 'src/app/models/Item';
import {ListpaysService} from './../../../services/listpays.service'

@Component({
  selector: 'app-addorganisation',
  templateUrl: './addorganisation.component.html',
  styleUrls: ['./addorganisation.component.css']
})
export class AddorganisationComponent implements OnInit {
  loading = false;
  submitted = false;
  orgform:FormGroup;
  /*******************image***/
  defaultvalue="choisir un logo";
  formData:FormData;
  uploadfile: File = null;
  all_pays:String[];
  all_service:Item[];
  all_type:Item[];
  /*************telphone*********/
  inputphone:boolean=false;
  phoneplus:boolean=false;
  arraytel: Array<number>=[];
  listtel:String;
  test: Array<any>=[];
  default:string="selctionner un pays";


  constructor(  private http: HttpClient,  private ListpaysService: ListpaysService,private notifyService : NotificationService,private organisationService:OrganisationService) { }

  ngOnInit(): void {
  this.all_pays=this.ListpaysService.getlistpays();
    this.listservice();
    this.listtype();
    this.orgform= new FormGroup({
      name:new FormControl(''),
      abreviation :new FormControl(''),
      description:new FormControl(''),
      email:new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      type:new FormControl('',[Validators.required]),
      domaine:new FormControl('',[Validators.required]),
      logo:new FormControl(''),
      listetelp:new FormControl(''),
      fax:new FormControl(''),
      pays:new FormControl(null),
      ville:new FormControl(''),
    });
    
    
  }


 
  onSubmit(){
    this.submitted=true;
    this.loading=true;
    this.listtelphone();
  
    this.organisationService.add(this.orgform.value).pipe(first())
    .subscribe(
      comment =>{
      this.notifyService.showSuccess(comment.message,'')
        this.revert()
      },
      error => {
        this.loading=false;
        console.log(error)
      this.notifyService.showError(error,'')
    },
      () => this.onComplete()
    );
   


  }
  
  onComplete(){
    console.log("fini")
  }
  listservice(){
    this.organisationService.listservice().subscribe(res=>{this.all_service=res})
  }
  listtype(){
    this.organisationService.listtype().subscribe(res=>{this.all_type=res;
    })
  }
  /**********************************uplod logo organisation */
 
  selectImage(file: FileList) {
    this.uploadfile = file.item(0);
    this.defaultvalue=this.uploadfile.name;
    this.sendfiletoserveur();
    
}
sendfiletoserveur() {
 this.organisationService.postFile(this.uploadfile).subscribe(resultat => {
    
    if(resultat!="Only .png, .jpg and .jpeg format allowed!"){
      this.logo(resultat)
    }
    else{
      this.defaultvalue="choisir un logo"
        this.notifyService.showError("Seuls les formats .png, .jpg et .jpeg sont autorisés!",'');

    }
    
   

    }, erreur => {
      console.log("Erreur lors de l'envoi du fichier : ", erreur);
    });
   
    
}


 /**********************************end -uplod logo organisation */

 listtelphone(){
   if(this.listtel)
  {this.test=this.listtel.split(",");}
   this.orgform.controls['listetelp'].setValue(this.test)
 }
 logo(value:String){
this.orgform.controls['logo'].setValue(value);
}
  // Choose type  using select dropdown
  changetype(e) {
    /*this.orgform.controls['type'].setValue(e.target.value, {
      onlySelf: true
    });*/
    
  }
  changedomaine(e) {
    /*this.orgform.controls['doamine'].setValue(e.target.value, {
      onlySelf: true
    });*/
   
  }
  get name() {
    return this.orgform.get('name');
  }

 
  getphone(value)
{
  event.stopPropagation();
  this.inputphone=true;
  if(value){
   
    this.arraytel.push(value)
    
    this.listtel=this.arraytel.toString();
  }
}

revert(){
  this.loading=false;
  this.defaultvalue="";
  this.arraytel=[];
  this.listtel=""
  this.inputphone=false;
 // this.orgform.reset();
}



}


