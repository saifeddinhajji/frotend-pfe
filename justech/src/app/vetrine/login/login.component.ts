import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { first } from 'rxjs/operators';

import { ToastrService } from 'ngx-toastr';

import { AuthenticationService } from 'src/app/services/authentication.service';
import { NotificationService } from './../../services/notification.service';
import { RoleService } from './../../services/role.service';
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
    private notifyService : NotificationService,
    private roleservice:RoleService
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
         if(data.error){
           this.notifyService.showError("login ou mot de passe incorrect", "");
          this.loading=false;
         }
         else
         { 
           
                 this.loading=false;
                console.log(data)
                 /*************all roles for this user*****************/
                this.roleservice.userroles(data._id).subscribe(res=>{
                /*  res.map(role=>{
                   console.log(role)
                 })*/
                
                    localStorage.setItem("roles", JSON.stringify(res))
                   // localStorage.setItem("roles", "saif");
                });
            if(data.role=="employeur")
            {
              this.router.navigate(['/employeur']);
              this.toastr.success('login correct', 'employeur');
            }
            else if(data.role=="admin")
            {this.router.navigate(['/admin']);
            this.toastr.success('login correct', 'admin');
            }
            else if(data.role=="RH")
            {
              this.router.navigate(['/contact/organisation/add']);
              this.toastr.success('login correct', 'RH');
            }
            else{
              this.toastr.success('login correct', 'any');
            }}
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
