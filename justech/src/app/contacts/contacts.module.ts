import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { FormationComponent } from './training/formation/formation.component';
import { LayoutComponent } from './layout/layout.component';
import { AddorganisationComponent } from './organization/addorganisation/addorganisation.component';
import { DetailleorganisationComponent } from './organization/detailleorganisation/detailleorganisation.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AllorganisationComponent } from './organization/allorganisation/allorganisation.component';
import { AddformationComponent } from './training/addformation/addformation.component';
import { AllformationComponent } from './training/allformation/allformation.component';
import { DetaillformationComponent } from './training/detaillformation/detaillformation.component';
import { AddclientComponent } from './client/addclient/addclient.component';
import { AllclientComponent } from './client/allclient/allclient.component';
import { SendmailerComponent } from './sendmailer/sendmailer.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [ FormationComponent, LayoutComponent, AddorganisationComponent, DetailleorganisationComponent, AllorganisationComponent, AddformationComponent, AllformationComponent, DetaillformationComponent, AddclientComponent, AllclientComponent, SendmailerComponent],
  imports: [
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule,
    ContactsRoutingModule,
    NgxPaginationModule
  ]
})
export class ContactsModule { }
