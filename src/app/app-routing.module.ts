import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { DemoComponent } from './demo/demo.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LayoutComponent } from './layout/layout.component';

import { AdminGuard } from './admin.guard';

const routes: Routes = [
  {
    path : '',
    component: LayoutComponent,
    children: [
      {
        path : '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path : 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path : 'products',
        component : ProductsComponent,
      },
      {
        path : 'products/:id',
        component : ProductDetailComponent,
      },
      {
        path : 'contact',
        loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule),
        /*canActivate: [
          AdminGuard
        ]*/
      }
      ,
      {
        path : 'demo',
        component : DemoComponent,
      }
    ]
  },{
    path : '**',
    component : PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy : PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
