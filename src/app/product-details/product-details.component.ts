import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductCardComponent } from '../product-card/product-card.component';

interface products {
  id: number;
  title: string;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  category: string;
}

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  products!: products[];
  productItem!: any;

  constructor(private route: ActivatedRoute) {
    this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.loadProductDetails();
  }

  async loadProductDetails() {
    const productId = Number(this.route.snapshot.paramMap.get('id'));

    try {
      const response = await fetch('/products.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const products: products[] = data.products;

      this.productItem = products.find((product) => product.id === +productId);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
}
