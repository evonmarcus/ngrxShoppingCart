import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../../model/product.model';
import { removeProduct } from '../state/product.action';
import { getProducts } from '../state/product.selector';
import { ProductState } from '../state/product.state';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Observable<Product[]> = new Observable<Product[]>;

  constructor(private store: Store<ProductState>) { }

  ngOnInit(): void {
    this.products = this.store.select(getProducts);
  }

  OnDeleteClick(product: Product) {
    this.store.dispatch(removeProduct({product:product}));
  }
}
