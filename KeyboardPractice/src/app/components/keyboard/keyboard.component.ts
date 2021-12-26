import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  class : string = 'keyboard__line__key__selected';

  barra : string = '\\';
  arrKeys : string[] = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
                      'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',
                      'caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'enter',
                      'shiftleft', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'shiftright']

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    let selected = document.querySelector('.' + this.class);
    let newSelected : HTMLElement | null;

    let clicked : boolean = false;
    let randomKey = this.arrKeys[Math.round(Math.random() * this.arrKeys.length - 1)];
    newSelected = document.getElementById(randomKey);

    if (selected != null && newSelected != null) {
      if (event.key === this.barra[0]){
        clicked = true;
      }else if (event.key.toLowerCase() === 'shift') {
        if (event.code.toLowerCase() === selected.id) {
          clicked = true;
        }
      }else if (selected.id === event.key.toLowerCase()) {    
        clicked = true;
      }

      if (clicked) {
        selected.classList.remove(this.class);
        newSelected.classList.add(this.class);
      }
    }
  }
}
