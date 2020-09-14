import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgServiceService } from '../ng-service.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
id:number;
product:Product;
  constructor(private route:ActivatedRoute, private router:Router, private service:NgServiceService) { }

  ngOnInit(){
    this.product = new Product();

    this.id=this.route.snapshot.params['id'];

    this.service.getProduct(this.id).subscribe(data=>
      {
        console.log(data)
        this.product=data;
      },
      error=>console.log(error));
  }

  gotoList(){
    this.router.navigate(['productList']);
  }

}