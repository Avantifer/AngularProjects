import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private elementRef : ElementRef) { }

  ngOnInit(): void {
  }

  clicked : boolean = false;
  @Output() plateSelected : EventEmitter<any> = new EventEmitter();

  cart = [
    {'number' : '0', 'plate' : 'plate__0', 'image' : '../../../assets/img/plate__french-fries.png', 'title' : 'French Fries with Ketchup', 'price' : '2.23'},
    {'number' : '1', 'plate' : 'plate__1', 'image' : '../../../assets/img/plate__salmon-vegetables.png', 'title' : 'Salmon and Vegetables', 'price' : '5.12'},
    {'number' : '2', 'plate' : 'plate__2', 'image' : '../../../assets/img/plate__spaghetti-meat-sauce.png', 'title' : 'Spaghetti with Meat Sauce', 'price' : '7.82'},
    {'number' : '3', 'plate' : 'plate__3', 'image' : '../../../assets/img/plate__bacon-eggs.png', 'title' : 'Bacon, Eggs and Toast', 'price' : '5.99'},
    {'number' : '4', 'plate' : 'plate__4', 'image' : '../../../assets/img/plate__chicken-salad.png', 'title' : 'Chicken Salad Parmesan', 'price' : '6.98'},
    {'number' : '5', 'plate' : 'plate__5', 'image' : '../../../assets/img/plate__fish-sticks-fries.png', 'title' : 'Fish Sticks and Fries', 'price' : '6.34'}
  ];

  addToCart(event : any, num : string, cart : any) {
    let previousDiv = document.querySelector('.noClicked__' + cart.number)
    if (previousDiv) {
      if (event.target.localName === 'p') {
        event.path[1].classList.value = 'btn__bottom btn__bottom__' + cart.number + ' clicked';
      }else {
        event.target.classList.value = 'btn__bottom btn__bottom__' + cart.number + ' clicked';
      }

      let div = this.elementRef.nativeElement.querySelector('.btn__bottom__' + cart.number);
      let img = document.createElement('img');
      img.classList.add('image');
      img.src = '../../../assets/img/check.svg';
      img.style.marginRight = '1rem';
      div.appendChild(img);
      this.elementRef.nativeElement.querySelector('.p__plate__' + num).innerHTML = 'In Cart';

      this.plateSelected.emit(cart);
    }
  }
}
