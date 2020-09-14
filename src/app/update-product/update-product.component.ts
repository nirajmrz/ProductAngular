import { Component, OnInit } from '@angular/core';
import { NgServiceService } from '../ng-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  product=new Product();
  id:number;
  constructor(private _service: NgServiceService, private _route: Router, private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
   this.id=this._activatedRoute.snapshot.params['id'];

      this._service.editProduct(this.id).subscribe(
      data=>{
console.log("data received");
this.product=data;
      },
      error=>console.log("exception occured")
    )
  }

  


  updateProduct(){
    console.log(this.product);
    this._service.updateProduct(this.product).subscribe(
      data=> {
        console.log(data);
      },
      error => console.log(error));
      this.product=new Product();
      this.gotoList();
    
  }

  gotoList(){
    this._route.navigate(['productList']);
  }

}
