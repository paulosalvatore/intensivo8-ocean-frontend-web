import { Component, Input } from '@angular/core';
import { products } from '../../data/products';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.sass']
})
export class ProductViewComponent {
  @Input()
  public product;

  @Input()
  public index: number;

  constructor(
    private route: ActivatedRoute,
  ) {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id');

      if (!isNaN(id)) {
        this.product = products[id];
        this.index = id;
      }
    });
  }

  public share() {
    alert('The product has been shared!');
  }
}
