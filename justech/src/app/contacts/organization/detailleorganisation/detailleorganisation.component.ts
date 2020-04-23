import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {OrganisationService} from './../../../services/organisation.service';
import {Organisation} from './../../../models/organisation';
import {Formation} from './../../../models/formation';

import { first } from 'rxjs/operators';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-detailleorganisation',
  templateUrl: './detailleorganisation.component.html',
  styleUrls: ['./detailleorganisation.component.css'],
 
})
export class DetailleorganisationComponent implements OnInit {
  socialform:FormGroup;
  isHidden: boolean = false;
  loading_data:boolean=false;
  organisation:Organisation;
  _id:any;
    constructor( private routeact:ActivatedRoute,
      private router:Router,
      private OrganisationService:OrganisationService,) {
     }


  ngOnInit(): void {

    this._id= this.routeact.snapshot.params['id'];
    this.OrganisationService.detaille(this._id).subscribe(
      data =>{this.organisation=data;console.log(this.organisation);this.loading_data=true}
    )
    this.socialform=new FormGroup({
      facebook:new FormControl(''),
      instagram :new FormControl(''),
      website:new FormControl(''),
      linkedin:new FormControl(''),
    })
  }


/**social Media form */
socialshow(){
  this.isHidden=true;
}
close(){
  this.isHidden=false;
}

onSubmit(){
  this.OrganisationService.SocialMedia(this.organisation._id,this.socialform.value).subscribe(
    res=>{console.log(res)}
  )
}


}





