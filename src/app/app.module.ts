import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturesComponent } from './features/features.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SAPComponent } from './features/sap/sap.component';
import { MicrosoftComponent } from './features/microsoft/microsoft.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ITMSComponent } from './features/itms/itms.component';


@NgModule({
  declarations: [
    AppComponent,
    FeaturesComponent,
    AboutComponent,
    ContactComponent,
    SAPComponent,
    MicrosoftComponent,
    HomeComponent,
    ITMSComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
