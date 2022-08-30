import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  products: Array<Object> = [
    {
      image: "https://images.thdstatic.com/productImages/983ea558-8144-45b7-8cbe-ad6a1eea9cc0/svn/purple-royal-printers-79119q-4f_600.jpg",
      name: "Vintage Typewriter to post awesome stories about UI design and webdev.", 
      price: 49.50,
      description: "Eligible for Shipping To Mars or somewhere else",
      rating: 4.5
    },
    {
      image: "https://cdn.shopify.com/s/files/1/1145/2636/products/gsmith_x20210615_002_3a9a0710-d302-4f5b-96f6-ac98d5d44c81_2048x2048.jpg?v=1648234823",
      name: "Lee Pucker design. Leather botinki for handsome designers. Free shipping.", 
      price: 13.95,
      description: "1258 bids, 359 watchers",
      rating: 3
    },
    {
      image: "https://media.istockphoto.com/photos/little-red-kitten-picture-id1186143372?k=20&m=1186143372&s=612x612&w=0&h=GB36pTxSw8wcNzV4I9BHfoeXOlVG9JytynlwgnLoVr4=",
      name: "Timesaving kitten to save months on development. Playful, cute, cheap!", 
      price: 128.99,
      description: "Eligible for nothing :(",
      rating: 4.9
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
