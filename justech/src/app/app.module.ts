import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VetrineModule } from './vetrine/vetrine.module';
import {ContactsModule} from './contacts/contacts.module';
import {NgxPaginationModule} from 'ngx-pagination';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DefaultimagePipe } from './pipe/defaultimage.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DefaultimagePipe,
   
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    VetrineModule,
    ContactsModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    
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
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
  bootstrap: [AppComponent]
})
export class AppModule { }
