import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: `home`, loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: `products`, loadChildren: () =>
      import('./pages/products/products.module').then(m => m.ProductsModule)
  },
  {
    path: `products/:id`, loadChildren: () =>
      import('./pages/product-detail/product-detail.module').then(m => m.ProductDetailModule)
  },
  {
    path: `form`, loadChildren: () =>
      import('./pages/create-form/create-form.module').then(m => m.FormModule)
  },
  // {
  //   path: 'form/:id',
  //   loadChildren: () => import('src/app/pages/edit-product/edit-product.module').then(m => m.EditProductModule)
  // },
  { path: ``, redirectTo: `home`, pathMatch: `full` }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
