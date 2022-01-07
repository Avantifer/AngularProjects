import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-credit-card-form',
  templateUrl: './credit-card-form.component.html',
  styleUrls: ['./credit-card-form.component.scss']
})
export class CreditCardFormComponent implements OnInit {

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.creditForm = this.fb.group({
      'cardNumber' : '',
      'cardHolder' : '',
      'month' : '',
      'year' : '',
      'cvv' : ''
    });
    
    let imageFront = document.querySelector('.creditCard__front__image');
    let imageBack = document.querySelector('.creditCard__back__image');

    this.creditForm.valueChanges.subscribe( (form) => {
      if (form.cardNumber.startsWith('3')) {
        imageFront!.setAttribute('src', '../../../assets/images/cc__american--front.png');
        imageBack!.setAttribute('src', '../../../assets/images/cc__american--back.png');
      }else if (form.cardNumber.startsWith('4')) {
        imageFront!.setAttribute('src', '../../../assets/images/cc__visa--front.png');
        imageBack!.setAttribute('src', '../../../assets/images/cc__visa--back.png');
      }else if (form.cardNumber.startsWith('5')) {
        imageFront!.setAttribute('src', '../../../assets/images/cc__mastercard--front.png');
        imageBack!.setAttribute('src', '../../../assets/images/cc__mastercard--back.png');
      }else if (form.cardNumber.startsWith('6')) {
        imageFront!.setAttribute('src', '../../../assets/images/cc__discover--front.png');
        imageBack!.setAttribute('src', '../../../assets/images/cc__discover--back.png');
      }
    })
  }

  cardNumber : string = '0000 0000 0000 0000';
  cardHolder : string = '';
  month : string = '01';
  year : string = '2002';
  cvv : string = '123';

  creditForm : FormGroup = new FormGroup({});

  submitCreditCard(){
    this.cardNumber = this.creditForm.controls['cardNumber'].value;
    this.cardHolder = this.creditForm.controls['cardHolder'].value;
    this.month = this.creditForm.controls['month'].value;
    this.year = this.creditForm.controls['year'].value;
    this.cvv = this.creditForm.controls['cvv'].value;
  }
}
