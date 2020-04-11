import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';

import { OrganisationComponent } from './organisation/organisation.component';
import { FormationComponent } from './formation/formation.component';
import { LayoutComponent } from './layout/layout.component';
import { AllcontactComponent } from './allcontact/allcontact.component';
import { AddorganisationComponent } from './addorganisation/addorganisation.component';
import { DetailleorganisationComponent } from './detailleorganisation/detailleorganisation.component';


@NgModule({
  declarations: [OrganisationComponent, FormationComponent, LayoutComponent, AllcontactComponent, AddorganisationComponent, DetailleorganisationComponent],
  imports: [
    CommonModule,
    ContactsRoutingModule
  ]
})
export class ContactsModule { }
