import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { NotificationService } from '../../../services/notification.service';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';
import {OrganisationService} from './../../../services/organisation.service';
import {FormationService} from './../../../services/formation.service';
import {ListpaysService} from './../../../services/listpays.service';
import {SharedserviceService} from './../../../services/shared/sharedservice.service'
@Component({
  selector: 'app-addformation',
  templateUrl: './addformation.component.html',
  styleUrls: ['./addformation.component.css']
})
export class AddformationComponent implements OnInit {
  loading = false;
  submitted = false;
  formationform:FormGroup;
  uploadedFiles: Array <File> ;
  filename:String;
  images:any;
  items:any;
  formData:FormData;
  uploadfile: File = null;
   URLFile:String;
 dateNow = new Date();
 defaultvalue1="choisir un ficher";
 defaultvalue2="choisir un ficher";
 defaultvalue3="choisir un photo";
 all_pays:String[];
 //disabled: true
selected = [];

  constructor(private SharedService:SharedserviceService,private ListpaysService:ListpaysService,private formationService:FormationService,private http: HttpClient,  private notifyService : NotificationService,private organisationService:OrganisationService) { }

  ngOnInit(): void {
    this.all_pays=this.ListpaysService.getlistpays();
    this.formationform= new FormGroup({
      titre:new FormControl('',[Validators.required]),
      description:new FormControl(''),
      modele_certificat:new FormControl(''),
      support :new FormControl(''),
      formateur:new FormControl(''),
      organisateurs:new FormControl(''),
      date_depart:new FormControl('',[Validators.required]),
      date_fin:new FormControl('',[Validators.required]),
      affiche:new FormControl(''),
      pays :new FormControl(''),
      ville:new FormControl(''),

    });
   

    //https://www.freakyjolly.com/angular-ngselect-with-single-multiple-and-search-filter-tutorial/
    this.organisationService.list().subscribe((value) => {
     
      this.items=value;
   }, (error) => {
       
   }, () => {
       
   })
    
   }
 
  



    /*************************save new formation  ******************************/
  onSubmit(){
   
     
    if (this.formationform.invalid ) {
      return;
      }
      this.submitted=true;
      this.loading=true;
      this.formationform.controls['organisateurs'].setValue(this.selected);
     
      this.SharedService.created(this.formationform.value,"/formation/create").pipe(first()).subscribe(
        success=>{
          this.loading=false
          this.revert;
          this.notifyService.showSuccess(success['message'],'')
         
          console.log(success,success['message'])
        },
        error =>{
          this.loading=false
          console.log(error)
         this.notifyService.showError(error,'')
        },
        ()=>{}
      )
  
  
        
  }
  revert() {
    this.selected=[],
    this.formationform.reset();
  }

    /*************************getter ******************************/
    setaffiche(value:String){
      this.formationform.controls['affiche'].setValue(value);
      } 
      setmodele_certificat(value:String){
        this.formationform.controls['modele_certificat'].setValue(value);
        } 
        setsupport(value:String){
          this.formationform.controls['support'].setValue(value);
          } 
    get titre() {
      return this.formationform.get('titre');
    }
    get description() {
      return this.formationform.get('description');
    }
    get modele_certificat() {
      return this.formationform.get('modele_certificat');
    }
    get support() {
      return this.formationform.get('support');
    }
    get formateur() {
      return this.formationform.get('formateur');
    }
    get organisateurs() {
      return this.formationform.get('organisateurs');
    }
    get date_depart() {
      return this.formationform.get('date_depart');
    }
    get date_fin() {
      return this.formationform.get('date_fin');
    }
    get affiche() {
      return this.formationform.get('affiche');
    }
  
    get ville() {
      return this.formationform.get('ville');
    }
    get pays() {
      return this.formationform.get('pays');
    }
  
    get f() { return this.formationform.controls; }


      /**********************************uplod file to formation */

selectfile(value,file:FileList) {
  if(file.length>=0){
    this.uploadfile=file.item(0)

  const formData: FormData = new FormData();
  var uri;
 var name;
    if(value.name=="csv")
    {
       uri="/upload/formation/csv"
      formData.append('csv', this.uploadfile, this.uploadfile.name);
      this.defaultvalue2=this.uploadfile.name
      name="csv"
    }
    else if(value.name=="image"){
       uri="/upload/formation/image"
       this.defaultvalue3=this.uploadfile.name
      formData.append('formation', this.uploadfile, this.uploadfile.name);
    name="image"
      //this.formationService.postFile(formData).
    }
    else if(value.name=="pptx"){
       uri="/upload/formation/pptx"
       name="pptx"
       this.defaultvalue1=this.uploadfile.name
      formData.append('pptx', this.uploadfile, this.uploadfile.name);
    }
    else {
     console.log(" win nzelt brabi")
    }
    if(formData && uri){

this.SharedService.postFile(formData,uri).subscribe(
  success=>{
    
if(name=="image"){
 
  this.setaffiche(success);

}
else if(name=="pptx"){
  this.setmodele_certificat(success)
}
else if(name=="csv"){
  this.setsupport(success)
  
}
},
  error=>{
    
this.notifyService.showError(error,'')
  },
  ()=>console.log(".")
)
    }
  
  }
 
  
  
 
}
}
