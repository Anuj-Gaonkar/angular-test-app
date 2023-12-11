import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [SearchComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
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
