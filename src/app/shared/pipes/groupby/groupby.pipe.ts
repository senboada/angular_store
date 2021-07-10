import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '@core/models/product.model';
import { ProductsOrder } from '@core/models/products-order';

@Pipe({
  name: 'groupby'
})
export class GroupbyPipe implements PipeTransform {
  transform(products: Product[]): any {
    const arrCart: ProductsOrder[] = [];
    products.forEach(product => {
      if (arrCart.length === 0) {
        arrCart.push({product,"quantity":1});
      } else {
        const searchProduct = arrCart.findIndex(resource => resource.product.id === product.id);
        if(searchProduct === -1){
          arrCart.push({product,"quantity":1});
        }else{
          arrCart[searchProduct].quantity = arrCart[searchProduct].quantity+1;
        }
      }
    });
    return arrCart;
  }
}
