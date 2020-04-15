import { Component } from '@angular/core';
import { products } from '../data/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent {
  public products = products;

  public share() {
    alert('The product has been shared!');
  }
}
