import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.interface';
import { ProductsService } from 'src/app/services/get-products.service';

@Component({
  selector: 'app-list-of-products',
  templateUrl: './list-of-products.component.html',
  styleUrls: ['./list-of-products.component.scss'],
})
export class ListOfProductsComponent implements OnInit {
  products: Product[] | undefined = [];

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.getProduct().subscribe((data) => {
      this.products = data;
    });
  }

  async getProduct() {
    this.products = await this.productService.getProduct().toPromise();
    console.log('Bri', this.products);
  }
}
