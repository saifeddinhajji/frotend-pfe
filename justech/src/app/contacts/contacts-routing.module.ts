import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddorganisationComponent } from './addorganisation/addorganisation.component';
import { LayoutComponent } from './layout/layout.component';
import { OrganisationComponent } from './organisation/organisation.component';
import { FormationComponent } from './formation/formation.component';
import { AllcontactComponent } from './allcontact/allcontact.component';
import { DetailleorganisationComponent } from './detailleorganisation/detailleorganisation.component';

const routes: Routes = [
  {path:'contact',component:LayoutComponent,
        children: [
          { path: '', redirectTo: 'home', pathMatch: 'full' },
          { path: 'home', component: AllcontactComponent },
          {path:'organisation',
            children:[
             {path:'add',component:AddorganisationComponent},
             {path:':id',component:DetailleorganisationComponent},
            ]},
          {path:'formation',component:FormationComponent}
        ]},   
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
