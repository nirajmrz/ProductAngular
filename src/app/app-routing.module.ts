import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  {path:'productList', component:ProductListComponent},
  {path:'addProduct', component:AddProductComponent},
  {path:'updateProduct/:id', component:UpdateProductComponent},
  {path:'productDetail/:id', component:ProductDetailComponent},
  {path:'', component:ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
