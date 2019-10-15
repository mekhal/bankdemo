import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'login.component',
  styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html',
})
export class LoginComponent {

  constructor() {
   
  }


  private login(){
    console.log("click")

  }

}
