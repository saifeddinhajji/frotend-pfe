import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {MailService} from './../../services/mail.service'
@Component({
  selector: 'app-sendmailer',
  templateUrl: './sendmailer.component.html',
  styleUrls: ['./sendmailer.component.css']
})
export class SendmailerComponent implements OnInit {
  submitted = false;
  mailform:FormGroup;
  loading=false
  constructor(private MailService:MailService) { }

  ngOnInit(): void {
    this.mailform= new FormGroup({
      to:new FormControl('',Validators.required),
      subject:new FormControl('',Validators.required),
      message:new FormControl('',Validators.required)})

  }

  get to() {
    return this.mailform.get('to');
  }

  get subject() {
    return this.mailform.get('subject');
  }

  get message() {
    return this.mailform.get('message');
  }

  sendmail(){
    this.loading=true
this.MailService.mail(this.mailform.value).subscribe(
  res=> {console.log(res)}
)
    console.log(this.mailform.value)
  }
}
