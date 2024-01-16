import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeProduitsComponent } from './liste-produits/liste-produits.component';




import { HttpClientModule } from '@angular/common/http';



import { FormsModule, ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    ListeProduitsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
  
   HttpClientModule,
   FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
