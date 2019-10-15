import { Component, OnDestroy, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';
import { Router } from '@angular/router';
import { TransactionService } from './../transaction.service';
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
  selector: 'deposit.component',
  styleUrls: ['./deposit.component.scss'],
  templateUrl: './deposit.component.html',
})
export class DepositComponent implements OnInit {

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
      amount: {
        title: 'Deposit Amount',
        type: 'number',
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

  constructor(
    private service: SmartTableData,
    private router: Router,
    private _transactionService:TransactionService,
    private toastrService: NbToastrService) {

  }

  ngOnInit(){

    this.LoadDeposit();
  }

  private onAddDeposit(){

    this.router.navigate(['/pages/transaction/add-deposit']);
  }

  
  private LoadDeposit(){
  
    this._transactionService.GetDeposit().subscribe(res=>{
      if(res.status == 'ok'){
        console.log(res);
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
