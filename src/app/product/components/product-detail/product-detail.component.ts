import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { ProductsService } from '@core/services/products/products.service';
import { RandomUserService } from '@core/services/randomuser/randomuser.service';

import { Product } from '@core/models/product.model';
import { User } from '@core/models/random-user';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})

export class ProductDetailComponent implements OnInit {

  product$!: Observable<Product>;
  user!: User;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private randomUserService: RandomUserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.fetchProduct();
    this.getRandomUser();
  }

  fetchProduct()
  {
    this.product$ = this.route.params.pipe(
      switchMap((params: Params) =>{
        const id = params.id;
        return this.productsService.getProduct(id)
      })
    )
  }

  getRandomUser(){
    this.randomUserService.getRandomUsers(1)
    .subscribe(users => {
      if(users.length != 0){
        this.user = users[0];
      }
    })
  }

}
