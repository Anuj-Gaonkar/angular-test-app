import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [SearchComponent, CommonModule, ProductListComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  // name: string = 'iphone';
  // price: number = 900;
  // color: string = 'Red';
  // name: string = "Test"
  addToCart: number = 0;
  product = {
    name:'iphone',
    price: 900,
    color: 'Red',
    discount: 8.3,
    inStock: 5,
    pImage: "/assets/iphone.png"
  }

  products: product[] = [this.product];

  // calculateDiscountedPrice(price: number, discount: number) : number{
  //   return price - (price * discount / 100);
  // }

  calculateDiscountedPrice() : number{
    return this.product.price - (this.product.price * this.product.discount / 100);
  }

  onBuy(){
    this.product.inStock--;
    if (this.product.inStock < 0) {
      this.product.inStock = 0
    }
  }

  addProductToCart() {
    let stock = this.product.inStock;
    if (this.product.inStock !== 0) {
      this.addToCart++;
      this.product.inStock--;
      // if (this.product.inStock == 0) {
      //   return
      // }
    }
  }

  removeProductFromCart() {
    if (this.addToCart > 0) {
      this.addToCart--;
      this.product.inStock++;
    }
  }

  // editName(event: any) {
  //   console.log(event);
  //   console.log(event.target.value);
  //   this.name = event.target.value;
  // }
}

type product = {
  name: string;
  price: number;
  color: string;
  discount: number;
  inStock: number;
  pImage: string;
}
