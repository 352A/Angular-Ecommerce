import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';

interface products {
  id: number;
  title: string;
  images: string[];
  price: number;
  rating: number;
  stock: number;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  data: any;
  products!: products[];

  ngOnInit(): void {
    this.fetchData();
  }

  async fetchData() {
    try {
      const response = await fetch('/products.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      this.data = await response.json();
      this.products = this.data.products;
      console.log(this.products);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
}
