import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccessControlComponent } from './access-control.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './user/add-user.component';

const routes: Routes = [{
  path: '',
  component: AccessControlComponent,
  children: [
    {path: 'user',component: UserComponent,},
    {path: 'add-user',component: AddUserComponent,},
    {path: '',redirectTo: 'user', pathMatch: 'full',}
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccessControlRoutingModule {
}
