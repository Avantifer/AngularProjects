import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnChanges {

  constructor() { }
  
  ngOnInit(): void {
  }
  
  ngOnChanges(): void {
    if (this.plateSelected != undefined) {
      this.plateSelected['quantity'] = 1;
      this.plateSelected['position'] = this.position;
      this.plateSelected['totalPrice'] = this.plateSelected['quantity'] * parseFloat(this.plateSelected['price']);
      this.position++;
      this.arrPlates.push(this.plateSelected);
      this.calculateTotalPrices();
    }
  }

  @Input() plateSelected : any;
  arrPlates : any = [];
  position : number = 0 ;
  subtotal : number = 0;
  taxes : number = 0;
  total : number = 0;

  increase(num : number) {
    this.arrPlates[num]['quantity']++;
    this.calculateEachPrice(num);
    this.calculateTotalPrices();
  }

  decrease(num : number) {
    let position = this.arrPlates[num]['position']; 

    if (this.arrPlates[num]['quantity'] >= 1) {
      this.arrPlates[num]['quantity']--;    
      this.calculateEachPrice(num);
      this.calculateTotalPrices();
    }

    if (this.arrPlates[num]['quantity'] === 0) {
      this.arrPlates.splice(position, 1);
      
      for (let i = position ; i < this.arrPlates.length; i++) {
        this.arrPlates[i]['position']--;
      }
      this.position--;
    }
  }

  calculateEachPrice(num : number) {
    this.arrPlates[num]['totalPrice'] = this.arrPlates[num]['quantity'] * parseFloat(this.arrPlates[num]['price']);
    this.arrPlates[num]['totalPrice'] = Math.round(this.arrPlates[num]['totalPrice'] * 100) / 100;
  }

  calculateTotalPrices() {
    this.subtotal = 0;
    this.arrPlates.forEach( (plate : any) => {
      this.subtotal += plate.totalPrice;
    });

    this.subtotal = Math.round(this.subtotal * 100) / 100;
    this.taxes = Math.round(this.subtotal * 0.21 * 100) / 100;
    this.total = Math.round((this.subtotal + this.taxes) * 100) / 100;
  }
}
