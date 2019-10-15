import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {path: 'dashboard',component: ECommerceComponent,},
    {path: 'access-control',loadChildren: () => import('./access-control/access-control.module').then(m => m.AccessControlModule),},
    {path: 'transaction',loadChildren: () => import('./transaction/transaction.module').then(m => m.TransactionModule),},
    {path: 'layout',loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule),},
    {path: 'forms',loadChildren: () => import('./forms/forms.module').then(m => m.FormsModule),},
    {path: 'modal-overlays',loadChildren: () => import('./modal-overlays/modal-overlays.module').then(m => m.ModalOverlaysModule),},
    {path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule),},
    {path: '',redirectTo: 'dashboard', pathMatch: 'full',},
    {path: '**',component: NotFoundComponent,},
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
