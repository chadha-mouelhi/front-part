import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { ProduitService } from 'src/app/produit.service';


@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.css']
})
export class ListeProduitsComponent implements OnInit {
produits: any;

 
   // produits: string[] ;
  
    constructor(private produitService: ProduitService) {}
  
    ngOnInit(): void {
      this.produitService.getProduit();
    }
  }
