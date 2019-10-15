import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NbAccordionModule,
  NbButtonModule,
  NbCardModule,
  NbListModule,
  NbRouteTabsetModule,
  NbStepperModule,
  NbTabsetModule, 
  NbUserModule,
  NbInputModule,
  NbSelectModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { TransactionRoutingModule } from './transaction-routing.module';
import { TransactionComponent } from './transaction.component';
import { DepositComponent } from './deposit/deposit.component';
import { AddDepositComponent } from './deposit/add-deposit.component';
import { TransferComponent } from './transfer/transfer.component';
import { AddTransferComponent } from './transfer/add-transfer.component';
import { TransactionService } from './transaction.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbStepperModule,
    NbCardModule,
    NbButtonModule,
    NbListModule,
    NbAccordionModule,
    NbUserModule,
    TransactionRoutingModule,
    Ng2SmartTableModule,
    NbInputModule,
    NbSelectModule,
  ],
  declarations: [
    DepositComponent,
    AddDepositComponent,
    TransactionComponent,
    AddTransferComponent,
    TransferComponent
  ],
  providers: [
    TransactionService,
  ],
})
export class TransactionModule { }
