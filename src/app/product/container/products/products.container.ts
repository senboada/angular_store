import { Component, OnInit } from '@angular/core';
import { ProductsService } from '@core/services/products/products.service';
import { Product } from '@core/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.container.html',
  styleUrls: ['./products.container.scss']
})

export class ProductsContainer implements OnInit {

  products: Product[] = [];

  constructor(
    private productsService: ProductsService
  ) {

  }

  ngOnInit() {
    this.fetchProducts();
  }

  clickProduct(id: number)
  {
    console.log(`El id del producto es ${id}`);
  }

  fetchProducts()
  {
    this.productsService.getAllProducts()
      .subscribe(products  => {
        this.products = products;
      })
  }
}
