import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { VetrineRoutingModule } from './vetrine-routing.module';


import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';


import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [LoginComponent, LayoutComponent],
  imports: [
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule,
    VetrineRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    
  ]
})
export class VetrineModule { }
