import { Component, OnDestroy ,OnInit} from '@angular/core';
import {Location} from '@angular/common';
import { AccessControlService } from './../access-control.service';

import { ToasterConfig } from 'angular2-toaster';

import 'style-loader!angular2-toaster/toaster.css';
import {
  NbComponentStatus,
  NbGlobalLogicalPosition,
  NbGlobalPhysicalPosition,
  NbGlobalPosition,
  NbToastrService,
} from '@nebular/theme';

declare function updateUrl(params):any;
declare function buildIbans(input):any;

@Component({
  selector: 'add-user.component',
  styleUrls: ['./add-user.component.scss'],
  templateUrl: './add-user.component.html',
})
export class AddUserComponent implements OnInit {
  inputIBANNumber:string;
  statusSuccess: NbComponentStatus = "success";
  isSave:boolean=false;

  constructor(private _location: Location,
    private _accessControlService: AccessControlService,
    private toastrService: NbToastrService) {
  
  }

  ngOnInit() {
    this.RandomIBAN();
  }

  private onBack(){
    this._location.back();
  }

  private RandomIBAN() {
    var how = buildIbans("Netherlands");
    this.inputIBANNumber = how;
  }

  private save(form){
    this.isSave = true;
    let data={
      IBANNumber:form.controls.inputIBANNumber.value,
      FirstName:form.controls.inputFirstName.value,
      LastName:form.controls.inputLastName.value,
      Email:form.controls.inputEmail.value
    };

    this._accessControlService.AddCustomer(data).subscribe(res=>{

      setTimeout(function(){
        const config = {
          status:this.statusSuccess,
          destroyByClick: true,
          duration: 2000,
          hasIcon: true,
          position: NbGlobalPhysicalPosition.TOP_RIGHT,
          preventDuplicates: false,
        };
        const titleContent = "Add User";
    
        this.toastrService.show(
          "Saved successfully",
          `${titleContent}`,
          config);
    
        this._location.back();
  
      }.bind(this),2000);
    });
  }

}
