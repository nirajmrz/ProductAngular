import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { NgServiceService } from '../ng-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
product=new Product();

  constructor(private _service: NgServiceService, private _route: Router, private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const idPresent=this._activatedRoute.snapshot.paramMap.has('id');
    if(idPresent){
      const id=+this._activatedRoute.snapshot.paramMap.get('id');
      this._service.editProduct(id).subscribe(
      data=>{
console.log("data received");
this.product=data;
      },
      error=>console.log("exception occured")
    )
  }
}

  addProduct(){
    console.log(this.product);
    this._service.addProduct(this.product).subscribe(
      data=> {
        console.log("data added successfully");
        this.gotoList();
      },
      error => console.log(error));
    
  }

  gotoList(){
    this._route.navigate(['productList']);
  }


}
