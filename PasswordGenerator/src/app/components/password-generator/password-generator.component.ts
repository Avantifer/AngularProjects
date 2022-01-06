import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.scss']
})
export class PasswordGeneratorComponent implements OnInit {

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.options = this.fb.group({
      'symbols' : true,
      'numbers' : true,
      'lowercase' : true,
      'uppercase' : true
    });
    
    this.options.valueChanges.subscribe( (options) => {
      this.fullarray = []

      for (let option in options) {
        if (options[option]) {
          if (option === 'symbols') {
            this.fullarray = this.fullarray.concat(this.symbols);
          }else if (option === 'numbers') {
            this.fullarray = this.fullarray.concat(this.numbers);
          }else if (option === 'uppercase') {
            this.fullarray = this.fullarray.concat(this.uppercase);
          }else if (option === 'lowercase') {
            this.fullarray = this.fullarray.concat(this.lowercase);
          }
        }
      }
      this.generatePassword(this.length);
    })    
  }

  options : FormGroup = new FormGroup({})

  symbols = this.arrayFromLowToHigh(33, 47).concat(this.arrayFromLowToHigh(58, 64)).concat(this.arrayFromLowToHigh(91, 96)).concat(this.arrayFromLowToHigh(123, 126));
  numbers = this.arrayFromLowToHigh(48, 57);
  uppercase = this.arrayFromLowToHigh(65, 90);
  lowercase = this.arrayFromLowToHigh(97, 122);
  fullarray : any[] = this.symbols.concat(this.numbers).concat(this.uppercase).concat(this.lowercase);
  length : number = 0;
  password : string = '';
  copied : boolean = false;

  arrayFromLowToHigh(low : number, high : number) {
    let array = [];
    for (let i = low; i <= high; i++) {
      array.push(i);
    }
    return array;
  }

  changeLength() {
    this.generatePassword(this.length);
  }

  generatePassword(length : number) {
    let password = '';
    for(let i = 0; i < length; i++) {
      let ascii = this.fullarray[Math.floor(Math.random() * this.fullarray.length)];
      if (ascii != undefined) {
        password += String.fromCharCode(ascii);
      }
    }
    this.password = password;
  }
}