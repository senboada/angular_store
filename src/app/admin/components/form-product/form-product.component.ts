import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import  { AngularFireStorage } from  '@angular/fire/storage';

import { MyValidators } from '../../../utils/validators';

import { ProductsService } from '../../../core/services/products/products.service';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form!: FormGroup;
  image$!: Observable<any>;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private angularFireStorage: AngularFireStorage
  ) { 
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      id: ['',[
        Validators.required
      ]],
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
      this.productsService.createProduct(product)
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

  uploadFile(event: Event) {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    const dir = 'images';
    const fileRef = this.angularFireStorage.ref(dir);
    const task = this.angularFireStorage.upload(dir, file);

    task.snapshotChanges()
      .pipe(
        finalize(() => {
          this.image$ = fileRef.getDownloadURL();
          this.image$.subscribe(url => {
            console.log(url);
            this.form.get('image')!.setValue(url);
          })
        })
      )
      .subscribe();
  }

  

}
