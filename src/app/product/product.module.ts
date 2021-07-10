import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './components/product/product.component';
import { ProductsContainer } from './container/products/products.container';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from '../material/material.module';
@NgModule({
  declarations: [
    ProductComponent,
    ProductsContainer,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductRoutingModule,
    MaterialModule
  ]
})
export class ProductModule { }
