import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { NotificationService } from '../../../services/notification.service';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';
import {OrganisationService} from './../../../services/organisation.service';
import {ContactService} from './../../../services/contact.service';
@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.css']
})
export class AddclientComponent implements OnInit {
  loading = false;
  submitted = false;
  contactform:FormGroup;
  formData:FormData;
  uploadfile: File = null;
  URLFile:String;
  
  items:any;
  Type: any = ['client', 'fournisseur', 'partenaire']
  constructor(private organisationService:OrganisationService,
    private contactService:ContactService,
    private notifyService:NotificationService) { }

 //disabled: true
    selected = [];
  ngOnInit(): void {

    this.contactform= new FormGroup({
      first_name:new FormControl(''),
      last_name :new FormControl(''),
      sexe:new FormControl(''),
      niveau:new FormControl(''),
      tel:new FormControl(''),
      type:new FormControl(''),
      profession:new FormControl(''),
      email:new FormControl(''),
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

  getValues() {
    if(this.selected)
    {
    //  alert(this.selected)
    }
    else{
     // alert("vide")
    }
  }

  saveclient(){
    this.loading=true
    this.contactService.add({form:this.contactform.value,orgs:this.selected}).subscribe(
      res =>{console.log(res);
        this.notifyService.showSuccess("enregistré avec succès","this.contactform.controls['first_name'].value");
        this.loading=false}
    )
   console.warn(this.contactform.value)
  }






/********************upload photo to serveur express js*****************/
photo(value:String){
  this.contactform.controls['photo'].setValue(value);
  }

selectImage(file: FileList) {
  this.uploadfile = file.item(0);
  
}
sendfiletoserveur() {
this.organisationService.postFile(this.uploadfile).subscribe(resultat => {
  this.URLFile=resultat;
 this.photo(this.URLFile)
  }, erreur => {
    console.log("Erreur lors de l'envoi du fichier : ", erreur);
  });
}
}