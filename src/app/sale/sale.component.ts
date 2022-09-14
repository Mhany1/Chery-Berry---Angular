import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../Services/products.service';



@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {

  constructor(private productsservice: ProductsService,private router: Router) { }
   products:any[]=[]
  ngOnInit(): void {
   this.productsservice.GetAllProducts().subscribe((productsdata) => {
      this.products = productsdata;
      console.log('products', this.products);
    });
  }

}
