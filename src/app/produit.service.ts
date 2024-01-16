import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  urlProduct ="http://localhost:8089/retrieveallProduits";

  constructor(private Http: HttpClient) { }

  // Exemple d'une méthode pour récupérer des données depuis le backend
 
  getProduit() {
    return this.Http.get(this.urlProduct);
         }
}
