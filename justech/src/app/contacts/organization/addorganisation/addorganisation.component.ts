import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { NotificationService } from '../../../services/notification.service';

@Component({
  selector: 'app-addorganisation',
  templateUrl: './addorganisation.component.html',
  styleUrls: ['./addorganisation.component.css']
})
export class AddorganisationComponent implements OnInit {
  loading = false;
  submitted = false;
  orgform:FormGroup;

  // City Names
  Type: any = ['type1', 'type2', 'type3', 'type4']

  constructor(    private notifyService : NotificationService) { }

  ngOnInit(): void {
    this.orgform= new FormGroup({
      email:new FormControl('',Validators.required),
      description:new FormControl(''),
      tel:new FormControl('',[Validators.required]),
      typeName:new FormControl('',[Validators.required])

    });
  }
  
  onSubmit(){
    this.submitted=true;
    this.loading=true;
   console.warn(this.orgform.value);
   console.warn(this.orgform.controls['email'].value)
   console.warn(this.orgform.get('email').value)
   this.notifyService.showSuccess("mergil","");
   this.notifyService.showError("login ou mot de passe incorrect", "");
   this.notifyService.showWarning("saif","saif");
   this.notifyService.showInfo("saif","saif");
  }
  get type() {
    return this.orgform.get('cityName');
  }
  // Choose type  using select dropdown
  changetype(e) {
    this.orgform.controls['typeName'].setValue(e.target.value, {
      onlySelf: true
    });
  }
  get email() {
    return this.orgform.get('email');
  }
  get tel() {
    return this.orgform.get('tel');
  }
  revert() {
    this.orgform.reset();
  }

}
