import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { NotificationService } from '../../../services/notification.service';
import { HttpClient } from '@angular/common/http';
import { first, flatMap } from 'rxjs/operators';
import {OrganisationService} from './../../../services/organisation.service';
import {ContactService} from './../../../services/contact.service';
import { error } from '@angular/compiler/src/util';
@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.css']
})
export class AddclientComponent implements OnInit {
  loading = false;
  submitted = false;
  contactform:FormGroup;
   /*******************image***/
   defaultvalue="choisir un photo";
   formData:FormData;
   uploadfile: File = null;
   
  
  items:any;
  constructor(private organisationService:OrganisationService,
    private contactService:ContactService,
    private notifyService:NotificationService) { }

 //disabled: true
    selected = [];
  ngOnInit(): void {

    this.contactform= new FormGroup({
      first_name:new FormControl('',[Validators.required]),
      last_name :new FormControl('',[Validators.required]),
      sexe:new FormControl('',[Validators.required]),
      niveau:new FormControl(''),
      tel:new FormControl(''),
      type:new FormControl(''),
      organisateurs:new FormControl(''),
      profession:new FormControl(''),
      email:new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      photo:new FormControl(''),
      biograhie :new FormControl(''),
      

    });
  //https://www.freakyjolly.com/angular-ngselect-with-single-multiple-and-search-filter-tutorial/
    this.organisationService.list().subscribe((value) => {
     console.log(value)
     this.items=value;
  }, (error) => {
      console.log(error);
  }, () => {
      console.log('Fini !');
  })
   
  }


  onSubmit(){
    this.loading=true
    this.contactform.controls['organisateurs'].setValue(this.selected);

      this.contactService.add(this.contactform.value).subscribe(
      contact =>{
        this.loading=false
        this.revert() 
        this.notifyService.showSuccess(contact.message,this.contactform.controls['first_name'].value);
        
        
      },
      error=>{
        this.loading=false;
        this.notifyService.showError(error,'')
      },
      () => this.onComplete()
    )
  
  }

onComplete(){}





revert(){
  this.loading=false;
  this.defaultvalue="";
  this.selected=[]
  this.contactform.reset();
}

/********************upload photo to serveur express js*****************/
photo(value:String){
  this.contactform.controls['photo'].setValue(value);
  }

  selectImage(file: FileList) {
    this.uploadfile = file.item(0);
    this.defaultvalue=this.uploadfile.name;
    this.sendfiletoserveur();
    
}
sendfiletoserveur() {
this.contactService.postFile(this.uploadfile).subscribe(resultat => {
  if(resultat!="Only .png, .jpg and .jpeg format allowed!"){
    this.photo(resultat)
  }
  else{
    this.defaultvalue="choisir un photo"
      this.notifyService.showError("Seuls les formats .png, .jpg et .jpeg sont autorisés!",'');

  }
  
 
  }, erreur => {
    console.log("Erreur lors de l'envoi du fichier : ", erreur);
  });
}
}