import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../Services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private productsservice: ProductsService,private router: Router) {}

  products: any[] = [];
  cart: any[] = [];
  user: string | undefined;
  amount: number = 1;

  ngOnInit(): void {
    this.productsservice.GetAllProducts().subscribe((productsdata) => {
      this.products = productsdata;
      console.log('products', this.products);
    });
  }

  addProduct(product: any) {
    var obj = { item: product, quantity: this.amount };
    console.log(obj);

    //  if (this.user) {
    //    console.log('yes');
    //  } else {
    if ('cart' in localStorage) {
      this.cart = JSON.parse(localStorage.getItem('cart')!);
      var exist = this.cart.find((itemm) => itemm._id == obj.item._id);
      if (exist) {
        alert('This product is already added');
      } else {
        this.cart.push(obj);
        localStorage.setItem('cart', JSON.stringify(this.cart));
      }
    } else {
      this.cart.push(obj);
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
    //  }
  }

  goToDetails(id:string) {
    this.router.navigate(['product',id])
  }
}
