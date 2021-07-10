import { Component, OnInit } from '@angular/core';

import { ProductsService } from '@core/services/products/products.service';
import { Product } from '@core/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  displayedColumns: string[] = ['id', 'title', 'precio','acciones'];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts()
  {
    this.productsService.getAllProducts()
      .subscribe(products  => {
        this.products = products;
      })
  }

  deleteProduct(id: string)
  {
    this.productsService.deleteProduct(id)
    .subscribe(response  => {
      console.log(response);
      if(response)
      {
        this.fetchProducts();
      }else{
        alert("No se logro eliminar correctamente el registro!");
      }
    })
  }

}
