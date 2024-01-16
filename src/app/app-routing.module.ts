import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeProduitsComponent } from './liste-produits/liste-produits.component';

import { ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  { path: 'products', component: ListeProduitsComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,ReactiveFormsModule]
})
export class AppRoutingModule { }
