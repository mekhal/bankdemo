import { Component, OnDestroy, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';
import { Router } from '@angular/router';
import { AccessControlService } from './../access-control.service';
import { ToasterConfig } from 'angular2-toaster';
import * as moment from 'moment';

import 'style-loader!angular2-toaster/toaster.css';
import {
  NbComponentStatus,
  NbGlobalLogicalPosition,
  NbGlobalPhysicalPosition,
  NbGlobalPosition,
  NbToastrService,
} from '@nebular/theme';

@Component({
  selector: 'user.component',
  styleUrls: ['./user.component.scss'],
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit {

  constructor(
    private service: SmartTableData,
    private router: Router,
    private _accessControlService: AccessControlService,
    private toastrService: NbToastrService) {

  }

  ngOnInit(){
    this.LoadUsers();
  }

  settings = {
    actions: false,
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      ibanNumber: {
        title: 'ISBN',
        type: 'string',
      },
      firstName: {
        title: 'First Name',
        type: 'string',
      },
      lastName: {
        title: 'Last Name',
        type: 'string',
      },
      email: {
        title: 'E-mail',
        type: 'string',
      },
      created: {
        title: 'Created',
        type: 'date',
        valuePrepareFunction: (date) => {
          if (date) {
            return moment(date).format("DD-MMM-YYYY");
          }
          return null;
        },
        sort: false
      }
    },
  };

  source: LocalDataSource = new LocalDataSource();

  private onAddUser(){
    //https://angular.io/guide/router

    this.router.navigate(['/pages/access-control/add-user']);
  }

  private LoadUsers(){
  
    this._accessControlService.GetCustomers().subscribe(res=>{
      if(res.status == 'ok'){
        this.source.load(res.data);
      }else{
        let statustag: NbComponentStatus = "danger";
        const config = {
          status:statustag,
          destroyByClick: true,
          duration: 2000,
          hasIcon: true,
          position: NbGlobalPhysicalPosition.TOP_RIGHT,
          preventDuplicates: false,
        };
        const titleContent = "Get User";
    
        this.toastrService.show(
          "Error!",
          `${titleContent}`,
          config);
      }
    });

  }

}
