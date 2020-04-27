import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { NotificationService } from '../../../services/notification.service';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';
import {OrganisationService} from './../../../services/organisation.service';
import {FormationService} from './../../../services/formation.service';
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
  constructor(private formationService:FormationService,private http: HttpClient,  private notifyService : NotificationService,private organisationService:OrganisationService) { }

  ngOnInit(): void {

    this.formationform= new FormGroup({
      titre:new FormControl(''),
      description:new FormControl(''),
      modele_certificat:new FormControl(''),
      support :new FormControl(''),
      formateur:new FormControl(''),
      organisateur:new FormControl(''),
      date_depart:new FormControl(''),
      date_fin:new FormControl(''),
      affiche:new FormControl(''),
      pays :new FormControl(''),
      ville:new FormControl(''),

    });
   
    this.organisationService.list().subscribe((value) => {
      console.log(value)
      this.items=value;
   }, (error) => {
       console.log(error);
   }, () => {
       console.log('Fini !');
   })
    
   
 
  }
/**********************************************image******************** */
selectImage(file: FileList) {
  this.uploadfile = file.item(0);
  
}
sendfiletoserveur() {
this.organisationService.postFile(this.uploadfile).subscribe(resultat => {
  this.URLFile=resultat;
 this.setaffiche(this.URLFile)
  }, erreur => {
    console.log("Erreur lors de l'envoi du fichier : ", erreur);
  });
}
  /*************************getter ******************************/
  setaffiche(value:String){
    this.formationform.controls['affiche'].setValue(value);
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
    return this.formationform.get('support');
  }
  get organisateur() {
    return this.formationform.get('organisateur');
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
    /*************************save new formation  ******************************/
  onSubmit(){
    this.submitted=true;
    this.loading=true;
     
    if (this.formationform.invalid) {
      return;
      }
  
   this.formationService.add(this.formationform.value).pipe(first())
    .subscribe(
        data => {
         
          
          this.loading=false;
          this.notifyService.showSuccess("enregistré avec succès",this.titre.value);
        },
        error => {
          console.log(error)
          this.loading=false;
          this.notifyService.showError("probléme de sauvegarde ",this.titre.value);
         
        })
  }
  revert() {
    this.formationform.reset();
  }

}
