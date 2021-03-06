import { Component, OnDestroy, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { TransactionService } from './../transaction.service';
import { ToasterConfig } from 'angular2-toaster';

import 'style-loader!angular2-toaster/toaster.css';
import {
  NbComponentStatus,
  NbGlobalLogicalPosition,
  NbGlobalPhysicalPosition,
  NbGlobalPosition,
  NbToastrService,
} from '@nebular/theme';

@Component({
  selector: 'add-deposit.component',
  styleUrls: ['./add-deposit.component.scss'],
  templateUrl: './add-deposit.component.html',
})
export class AddDepositComponent implements OnInit {

  customerData:any=null;
  customerID:any=null;
  isSave:boolean=false;
  statusSuccess: NbComponentStatus = "success";
  constructor(private _location: Location,
              private _transactionService:TransactionService,
              private toastrService: NbToastrService) {
    this.customerData = this.LoadUsers();
  }

  ngOnInit(){

  }

  private onBack(){
    this._location.back();
  }

  private LoadUsers(){

    this._transactionService.GetCustomers().subscribe(res=>{
      if(res.status == 'ok'){
        this.customerData = res;
        if(res.data.length > 0){
          this.customerID = res.data[0].id;
        }
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

  private Save(form){
    this.isSave = true;
    let data={
      CustomerID:form.controls.ddlCustomer.value,
      Amount:form.controls.txtAmount.value
    };

    this._transactionService.AddDeposit(data).subscribe(res=>{

      setTimeout(function(){
        const config = {
          status:this.statusSuccess,
          destroyByClick: true,
          duration: 2000,
          hasIcon: true,
          position: NbGlobalPhysicalPosition.TOP_RIGHT,
          preventDuplicates: false,
        };
        const titleContent = "Add Deposit";
    
        this.toastrService.show(
          "Saved successfully",
          `${titleContent}`,
          config);
    
        this._location.back();
  
      }.bind(this),2000);
    });

  }

}
