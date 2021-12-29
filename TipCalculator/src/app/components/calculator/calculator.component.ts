import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.inputsValues = this.fb.group({
      billAmount : 0,
      numberPeople : 0,
    })
  }

  inputsValues: FormGroup = new FormGroup({});

  billAmount : number = 0;
  numberPeople : number = 0;
  percentage : number = 5;
  tipAmount : number = 0.00;
  totalPerson : number = 0.00;

  calculate() {
    this.billAmount = this.inputsValues.controls.billAmount.value;
    this.numberPeople = this.inputsValues.controls.numberPeople.value;
    this.tipAmount = Math.round(this.billAmount * (this.percentage / 100) * 100)  / 100;
    this.billAmount += Math.round(this.tipAmount * 100) / 100 ;
    this.totalPerson = Math.round(this.billAmount / this.numberPeople * 100) / 100;
  }
}
