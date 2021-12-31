import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-pin-verification',
  templateUrl: './pin-verification.component.html',
  styleUrls: ['./pin-verification.component.scss']
})
export class PinVerificationComponent implements OnInit {

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.pinInputs = this.fb.group({
      'number0' : '',
      'number1' : '',
      'number2' : '',
      'number3' : ''
    })
  }

  pinInputs : FormGroup = new FormGroup({})
  pinCreated : number = Math.floor(Math.random() * (9999 - 1000)) + 1000;

  nextInput(event : any) {
    event.srcElement.nextElementSibling.focus();
  }

  verificatePin() {
    let pinUser : any = '';
    for (let input in this.pinInputs.controls) {
      pinUser += this.pinInputs.controls[input].value + ''
    }

    if (this.pinCreated === parseInt(pinUser)) {
      console.log('Everythig ok')
    }else {
      console.log('Everything bad')
    }
  }

}

