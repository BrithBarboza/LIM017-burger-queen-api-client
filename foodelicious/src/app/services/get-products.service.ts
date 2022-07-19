import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private url: string = 'http://localhost:8080/products';

  constructor(private http: HttpClient) {}

  getProduct() : Observable <Product[]> {
    const listOfProducts = `${this.url}`;
    return this.http.get<Product[]>(listOfProducts);
  }

  getProducts() {
    const myJWTFromSessionStorage = sessionStorage.get('accessToken');
    const header = new HttpHeaders()
      .set('Content-Type', 'aplication/json')
      .set('Authorization', `Bearer: ${myJWTFromSessionStorage}`);

    return this.http.get('this.url', {
      headers: header,
    });
  }
}
