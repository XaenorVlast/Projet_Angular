import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductResponse, ProductUnit } from '../models/product.models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    currentPage = 1;
    constructor(private http: HttpClient) { }

    getProducts(page: number, pageSize: number): Observable<ProductResponse> {
        const url = `https://world.openfoodfacts.org/cgi/search.pl?search_simple=1&action=process&json=1&page_size=${pageSize}&page=${page}`;
        return this.http.get<ProductResponse>(url);
}
GetProductById(faceSnapId: number): Observable<ProductUnit> {
    return this.http.get<ProductUnit>(`https://world.openfoodfacts.org/api/v0/product/${faceSnapId}.json`);
}

}
