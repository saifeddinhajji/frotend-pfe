import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { VetrineModule } from './vetrine/vetrine.module';
import {ContactsModule} from './contacts/contacts.module'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VetrineModule,
    ContactsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
    // required animations module
    /*config toaster 
    {  timeOut: 10000,
      positionClass: 'toast-bottom-left',
      preventDuplicates: true,}*/
    //ToastrModule.forRoot() // ToastrModule added
    /*timeOut: 10000,
    positionClass: 'toast-bottom-right',
    preventDuplicates: true,*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
