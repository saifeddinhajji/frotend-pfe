import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { first } from 'rxjs/operators';

import { ToastrService } from 'ngx-toastr';

import { AuthenticationService } from 'src/app/services/authentication.service';
import { NotificationService } from './../../services/notification.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  cheminImage:any = "./../../../assets/images/justech.png";
  returnUrl: string;
  currentUser:User
  loading = false;
  submitted = false;
  loginForm:FormGroup
  constructor(    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
   private authenticationService: AuthenticationService,
    private notifyService : NotificationService
    ) { }

  ngOnInit(): void {
    this.loginForm= new FormGroup({
      email:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required),
});
//this.loginForm.reset();

  }

   // convenience getter for easy access to form fields
   get f() { return this.loginForm.controls; }
   get email() {
     return this.loginForm.get('email');
   }
 
   get password() {
     return this.loginForm.get('password');
   }

   onlogin(){
    this.loading=true;
    // stop here if form is invalid
  if (this.loginForm.invalid) {
    return;
    }

    this.authenticationService.login(this.f.email.value, this.f.password.value)
    .pipe(first())
    .subscribe(
        data => {
         
          console.log(data)
            this.loading=false;
            this.toastr.success('login correct', '');
            if(data.role=="employeur")
            {
              this.router.navigate(['/employeur']);

            }
            else if(data.role=="admin")
            {this.router.navigate(['/admin']);

            }
            else if(data.role=="RH")
            {
              this.router.navigate(['/contacts']);
            }
            else{
              console.log("route not supported any url")
            }
                  },
        error => {
          console.log(error)
          
          this.notifyService.showError("login ou mot de passe incorrect", "");
          this.loading=false;
        });
   }

   showSuccess() {
    this.notifyService.showError("saif", "ItSolutionStuff.com");
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

}
