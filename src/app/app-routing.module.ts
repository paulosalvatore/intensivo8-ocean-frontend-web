import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './view/product-list/product-list.component';
import { ProductViewComponent } from './view/product-view/product-view.component';
import { LugaresListComponent } from './view/lugares-list/lugares-list.component';
import { LugaresViewComponent } from './view/lugares-view/lugares-view.component';


const routes: Routes = [
  {
    path: 'product-list',
    component: ProductListComponent
  },
  {
    path: 'product-view/:id',
    component: ProductViewComponent
  },
  {
    path: 'lugares-list',
    component: LugaresListComponent
  },
  {
    path: 'lugares-view/:id',
    component: LugaresViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
