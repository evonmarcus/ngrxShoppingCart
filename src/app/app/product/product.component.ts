import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Product } from '../model/product.model';
import { ValidateText } from '../validator';
import { addProduct } from './state/product.action';
import { ProductState } from './state/product.state';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productForm: FormGroup | any;

  constructor(private store: Store<ProductState>) { }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      description:new FormControl(null,[Validators.required,ValidateText.IsString]),
      price:new FormControl(null,Validators.required),
      quantity:new FormControl(null,Validators.required)
    })
  }

  onAddProduct(){
    if(!this.productForm.valid){
      return;
    }

    const product: Product = {
      description: this.productForm.value.description,
      price : this.productForm.value.price,
      quantity: this.productForm.value.quantity
    };

    this.store.dispatch(addProduct({product}));
  }
}

