import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddorganisationComponent } from './organization/addorganisation/addorganisation.component';
import { LayoutComponent } from './layout/layout.component';
import { DetailleorganisationComponent } from './organization/detailleorganisation/detailleorganisation.component';
import { AllorganisationComponent } from './organization/allorganisation/allorganisation.component';
import { AddformationComponent } from './training/addformation/addformation.component';
import { AllformationComponent } from './training/allformation/allformation.component';
import { AddclientComponent } from './client/addclient/addclient.component';
import { AllclientComponent } from './client/allclient/allclient.component';

const routes: Routes = [
  {path:'contact',component:LayoutComponent,
        children: [
          { path: '', redirectTo: 'home', pathMatch: 'full' },
         /* { path: 'home', component: AllcontactComponent },*/
          {path:'formation',
          children:[
           {path:'add',component:AddformationComponent},
           {path:'all',component:AllformationComponent},
           {path:':id',component:DetailleorganisationComponent},
          ]},
          {path:'organisation',
            children:[
             {path:'add',component:AddorganisationComponent},
             {path:'all',component:AllorganisationComponent},
             {path:':id',component:DetailleorganisationComponent},
            ]},
            {path:'client',
            children:[
             {path:'add',component:AddclientComponent},
             {path:'all',component:AllclientComponent},
             {path:':id',component:DetailleorganisationComponent},
            ]},
        ]
      },   
      
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
