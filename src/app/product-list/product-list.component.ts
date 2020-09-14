import { Component, OnInit } from '@angular/core';
import {NgServiceService} from '../ng-service.service';
import {Product} from '../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
products : Product[];

  constructor(private _service:NgServiceService, private _route:Router) { }

  ngOnInit(): void {
this.listProduct();
  }

  addProduct(){
    this._route.navigate(['/addProduct']);
  }
 
  listProduct(){
    this._service.getProductList().subscribe(
      data=>this.products=data
    )
  }

  deleteProduct(id:number){
    this._service.deleteProduct(id).subscribe(
      data=>{
        console.log("data deleted");
        this.listProduct();
      }
    )
  }

  detail(id:Number){
    this._route.navigate(['/productDetail', id]);
  }

  update(id:Number){
    this._route.navigate(['/updateProduct', id]);
  }

  
  

}
