// Importation des modules nécessaires depuis Angular et RxJS
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductResponse, ProductUnit } from '../models/product.models';

// Déclaration du service Injectable qui peut être injecté n'importe où dans l'application
@Injectable({
  providedIn: 'root'
})
export class ProductService {

    // Propriété pour stocker le numéro de la page actuelle
    currentPage = 1;

    // Constructeur du service, injecte le service HttpClient pour effectuer des requêtes HTTP
    constructor(private http: HttpClient) { }

    // Méthode pour récupérer une liste de produits paginée à partir de l'API Open Food Facts
    getProducts(page: number, pageSize: number): Observable<ProductResponse> {
        // Construction de l'URL avec les paramètres de pagination
        const url = `https://world.openfoodfacts.org/cgi/search.pl?search_simple=1&action=process&json=1&page_size=${pageSize}&page=${page}`;
        // Utilisation du service HttpClient pour effectuer la requête GET et retourner un observable de type ProductResponse
        return this.http.get<ProductResponse>(url);
    }

    // Méthode pour récupérer les détails d'un produit par son identifiant à partir de l'API Open Food Facts
    GetProductById(Id: number): Observable<ProductUnit> {
        // Construction de l'URL avec l'identifiant du produit
        return this.http.get<ProductUnit>(`https://world.openfoodfacts.org/api/v0/product/${Id}.json`);
    }
}
