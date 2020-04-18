import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { NotificationService } from '../../../services/notification.service';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';
import {OrganisationService} from './../../../services/organisation.service';
@Component({
  selector: 'app-addorganisation',
  templateUrl: './addorganisation.component.html',
  styleUrls: ['./addorganisation.component.css']
})
export class AddorganisationComponent implements OnInit {
  loading = false;
  submitted = false;
  orgform:FormGroup;
  uploadedFiles: Array <File> ;
  filename:String;
  images:any;


  // City Names
  Type: any = ['client', 'fournisseur', 'partenaire']
Domaine:any=["Les établissements universitaires publics, privé,","Les écoles primaires et secondaires","Les centres","Les labos de recherche","Les hôpitaux"," Les hôtels","Les maisons d’édition","Les agrégateurs"];
  constructor(  private http: HttpClient,  private notifyService : NotificationService,private organisationService:OrganisationService) { }

  ngOnInit(): void {
    this.orgform= new FormGroup({
      name:new FormControl(''),
      abreviation :new FormControl(''),
      description:new FormControl(''),
      email:new FormControl('example@example.com'),
      type:new FormControl(''),
      domaine:new FormControl(''),
      tel1:new FormControl(''),
      tel2:new FormControl(''),
      fax:new FormControl(''),
      pays:new FormControl(''),
      ville:new FormControl(''),
    });

    
  }


  
  onSubmit(){
    this.submitted=true;
    this.loading=true;
    
    this.organisationService.add(this.orgform.value).pipe(first())
    .subscribe(
        data => {
          console.log(data)
          this.loading=false;
          this.notifyService.showSuccess("enregistré avec succès",this.orgform.controls['name'].value);
        },
        error => {
          console.log(error)
          this.loading=false;
          this.notifyService.showError("probléme de sauvegarde ",this.orgform.controls['name'].value);
         
        }
    );
        

   /*console.warn(this.orgform.value);
   console.warn(this.orgform.controls['email'].value)
   console.warn(this.orgform.get('email').value)
   this.notifyService.showSuccess("mergil","");
   this.notifyService.showError("login ou mot de passe incorrect", "");
   this.notifyService.showWarning("saif","saif");
   this.notifyService.showInfo("saif","saif");*/
  }
  selectImage(event){
   if(event.target.files>0)
   {
     const file=event.target.files[0];
     this.images=file;
   }
  }
  onupload(){

   var colors = ["Blue", "Red", "Orange", "Green"];
    
// Vérifie si la valeur existe dans le tableau
if(colors.indexOf("Green") !== -1){
       alert("La valeur existe!")
} else{
       alert("La valeur n'existe pas!")
}
localStorage.setItem('testObject', JSON.stringify(colors));
    /*let formData = new FormData();
    formData.append('profile',this.images);
    this.http.post<any>('http://localhost:5000/upload/image',formData).subscribe(
      (data)=>console.log(data),
      (err)=>console.log(err),
    );*/
  }
  get type() {
    return this.orgform.get('name');
  }
  // Choose type  using select dropdown
  changetype(e) {
    this.orgform.controls['type'].setValue(e.target.value, {
      onlySelf: true
    });
    console.log(this.orgform.controls['type'].value)
  }
  changedomaine(e) {
    this.orgform.controls['doamine'].setValue(e.target.value, {
      onlySelf: true
    });
    console.log(this.orgform.controls['domaine'].value)
  }
  get email() {
    return this.orgform.get('email');
  }
  get tel() {
    return this.orgform.get('tel1');
  }
  revert() {
    this.orgform.reset();
  }

}











/*

  fileChange(element) {
    this.uploadedFiles = element.target.files;
this.filename=this.uploadedFiles[1].name
console.log(this.filename);
 }
 upload() {
  let formData = new FormData();
  for (var i = 0; i < this.uploadedFiles.length; i++) {
      formData.append("profile[]", this.uploadedFiles[i], this.uploadedFiles[i].name);
  }
  this.http.post('http://localhost:5000/upload/image', formData)
      .subscribe((response) => {
          console.log('response received is ', response);
      })
}*/