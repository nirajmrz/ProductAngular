import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NgServiceService {
   private baseUrl:string="http://localhost:8080/product";
  constructor(private _http:HttpClient) { }

getProductList(): Observable<any>{
  return this._http.get<any>("http://localhost:8080/list");
}

addProduct(product: Product): Observable<Product>{
  return this._http.post<Product>("http://localhost:8080/addProduct", product);
}

editProduct(id:number): Observable<any>{
  return this._http.get<any>("http://localhost:8080/product/"+id).pipe(
    map(response => response)
  );
}

deleteProduct(id:number): Observable<any>{
  return this._http.delete("http://localhost:8080/product/"+ id, { responseType :'text'});
}

updateProduct(product: Product): Observable<Product>{
  return this._http.put<Product>("http://localhost:8080/updateProduct/",product);
}

getProduct(id:number): Observable<Product>{
  return this._http.get<Product>("http://localhost:8080/product/"+id).pipe(
    map(response => response)
    )
    }

}
