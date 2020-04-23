import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { NotificationService } from '../../../services/notification.service';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';
import {OrganisationService} from './../../../services/organisation.service';
import { elementClosest } from '@fullcalendar/core';
@Component({
  selector: 'app-addorganisation',
  templateUrl: './addorganisation.component.html',
  styleUrls: ['./addorganisation.component.css']
})
export class AddorganisationComponent implements OnInit {
  loading = false;
  submitted = false;
  orgform:FormGroup;
  formData:FormData;
  uploadfile: File = null;
   URLFile:String;
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
      logo:new FormControl(''),
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
        


  }
 
  selectImage(file: FileList) {
    this.uploadfile = file.item(0);
    
}
sendfiletoserveur() {
  this.organisationService.postFile(this.uploadfile).subscribe(resultat => {
    this.URLFile=resultat;
   this.logo(this.URLFile)
    }, erreur => {
      console.log("Erreur lors de l'envoi du fichier : ", erreur);
    });
}


  get type() {
    return this.orgform.get('name');
  }
 logo(value:String){
this.orgform.controls['logo'].setValue(value);
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









