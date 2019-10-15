import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransactionComponent } from './transaction.component';
import { DepositComponent } from './deposit/deposit.component';
import { AddDepositComponent } from './deposit/add-deposit.component';
import { TransferComponent } from './transfer/transfer.component';
import { AddTransferComponent } from './transfer/add-transfer.component';

const routes: Routes = [{
  path: '',
  component: TransactionComponent,
  children: [
    {path: 'deposit',component: DepositComponent,},
    {path: 'add-deposit',component: AddDepositComponent,},
    {path: 'transfer',component: TransferComponent,},
    {path: 'add-transfer',component: AddTransferComponent,},
    {path: '',redirectTo: 'deposit', pathMatch: 'full',}
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionRoutingModule {
}
