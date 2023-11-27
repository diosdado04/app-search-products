import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesLink } from './core/constanst/routes-link';
import { ProductsComponent } from './components/products/products.component';
import { LayoutComponent } from './core/components/layout/layout.component';

const routes: Routes = [
  {
    path: RoutesLink.ANYTHING,
    redirectTo: RoutesLink.EMPTY,
    pathMatch: 'full',
  },
  {
    path: RoutesLink.EMPTY,
    component: LayoutComponent,
    children: [
      {
        path: RoutesLink.EMPTY,
        component: ProductsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
