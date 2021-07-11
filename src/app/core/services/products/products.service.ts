import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '@core/models/product.model';

import { environment } from '@env/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts()
  {
    let productos = this.http.get<Product[]>(`${environment.url_api}/products`);
    return productos;
  }

  getProduct(id: string)
  {
    let producto = this.http.get<Product>(`${environment.url_api}/products/${id}`);
    return producto;
  }

  createProduct(product: Product)
  {
    let resultado = this.http.post(`${environment.url_api}/products`,product);
    return resultado;
  }

  updateProduct(id:string, changes: Partial<Product>)
  {
    let resultado = this.http.put(`${environment.url_api}/products/${id}`, changes);
    return resultado;
  }

  deleteProduct(id:string)
  {
    let producto = this.http.delete(`${environment.url_api}/products/${id}`);
    return producto;
  }
}
