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
import { LoadingDataComponent } from './loading/loading-data/loading-data.component';
import { DefaultimagePipe } from './../pipe/defaultimage.pipe';
import { NgSelectModule } from '@ng-select/ng-select';
import { HomeComponent } from './home/home.component';
import { StatistiqueComponent } from './statistique/statistique.component';
import { StatComponent } from './loading/stat/stat.component';
@NgModule({
  declarations: [ FormationComponent, LayoutComponent, AddorganisationComponent, DetailleorganisationComponent, AllorganisationComponent, AddformationComponent, AllformationComponent, DetaillformationComponent, AddclientComponent, AllclientComponent, SendmailerComponent, LoadingDataComponent, HomeComponent, StatistiqueComponent, StatComponent],
  imports: [
    
    CommonModule, 
    ReactiveFormsModule,
    ContactsRoutingModule,
    NgxPaginationModule,
    NgSelectModule,
    FormsModule
  ]
})
export class ContactsModule { }
