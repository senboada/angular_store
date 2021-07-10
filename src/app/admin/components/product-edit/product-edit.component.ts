import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MyValidators } from '@utils/validators';

import { ProductsService } from '@core/services/products/products.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  form!: FormGroup;
  id!: string;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { 
    this.buildForm();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.productsService.getProduct(params.id)
        .subscribe(response => {
          this.form.patchValue(response);
        })
    })
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      title: ['',[
        Validators.required
      ]],
      price: ['',[
        Validators.required,
        MyValidators.isPriceValid
      ]],
      image: ['',[
      ]],
      description: ['',[
        Validators.required
      ]]
    });
  }

  saveProduct(event: Event)
  {
    event.preventDefault();//Por buena practica es mejor esto en los form
    if(this.form.valid){
      const product = this.form.value;
      this.productsService.updateProduct(this.id, product)
        .subscribe(response => {
          this.router.navigate([
            './admin/products'
          ]);
        });
    }
  }

  get priceField()
  {
    return this.form.get('price');
  }

  

}
