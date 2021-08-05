import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FeaturesComponent } from './features/features.component';
import { ITMSComponent } from './features/itms/itms.component';
import { MicrosoftComponent } from './features/microsoft/microsoft.component';
import { SAPComponent } from './features/sap/sap.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',redirectTo:'home',pathMatch:'full'
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'features', component:FeaturesComponent
  },
  {
    path:'about', component:AboutComponent
  },
  {
    path:'contact', component:ContactComponent
  },
  {
    path:'features',
    children:[
      {path:'', component:FeaturesComponent},
      {path:'microsoft', component:MicrosoftComponent},
      {path:'SAP', component: SAPComponent},
      {path:'itms', component : ITMSComponent}
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
