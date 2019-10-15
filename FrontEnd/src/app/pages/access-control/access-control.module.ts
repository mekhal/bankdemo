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
  NbInputModule
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { AccessControlRoutingModule } from './access-control-routing.module';
import { AccessControlComponent } from './access-control.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './user/add-user.component';
import { AccessControlService } from './access-control.service';
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
    AccessControlRoutingModule,
    Ng2SmartTableModule,
    NbInputModule
  ],
  declarations: [
    UserComponent,
    AddUserComponent,
    AccessControlComponent
  ],
  providers: [
    AccessControlService,
  ],
})
export class AccessControlModule { }
