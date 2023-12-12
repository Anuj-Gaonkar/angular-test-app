import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = [
    {
      "id": 1,
      "name": "Air Max 270",
      "description": "Nike Air Max 270 running shoes with advanced cushioning technology.",
      "brand": "Nike",
      "gender": "Unisex",
      "category": "Footwear",
      "size": "9",
      "color": "Black/White",
      "price": 149.99,
      "is_in_inventory": true,
      "items_left": 25,
      "imageURL": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/11-665455a5-45de-40fb-945f-c1852b82400d/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg",
      "slug": "air-max-270"
    },
    {
      "id": 2,
      "name": "React Infinity Run Flyknit",
      "description": "Nike React Infinity Run Flyknit for a comfortable and supportive running experience.",
      "brand": "Nike",
      "gender": "Unisex",
      "category": "Footwear",
      "size": "8.5",
      "color": "Blue/Green",
      "price": 169.99,
      "is_in_inventory": true,
      "items_left": 15,
      "imageURL": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/11-665455a5-45de-40fb-945f-c1852b82400d/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg",
      "slug": "react-infinity-run-flyknit"
    },
    {
      "id": 3,
      "name": "Air Force 1",
      "description": "Classic Nike Air Force 1 sneakers for casual wear.",
      "brand": "Nike",
      "gender": "Unisex",
      "category": "Footwear",
      "size": "10",
      "color": "White",
      "price": 129.99,
      "is_in_inventory": true,
      "items_left": 30,
      "imageURL": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/11-665455a5-45de-40fb-945f-c1852b82400d/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg",
      "slug": "air-force-1"
    }
    // Add more Nike shoes products as needed
  ]
}
