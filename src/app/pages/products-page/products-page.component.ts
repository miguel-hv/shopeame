import { ProductsService } from './../../products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  products: Product[] = [];

  constructor(private productsService: ProductsService) { }

  getProducts(): void {
    this.productsService.getProducts()
      .subscribe(products => this.products = products);
  }

  ngOnInit(): void {
    this.getProducts();
  }

}
