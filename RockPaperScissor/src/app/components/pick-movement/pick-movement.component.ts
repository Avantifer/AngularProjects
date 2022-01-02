import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pick-movement',
  templateUrl: './pick-movement.component.html',
  styleUrls: ['./pick-movement.component.scss']
})
export class PickMovementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  movements : string[] = ['rock', 'paper', 'scissors'];

  @Output() movementPC : EventEmitter<string> = new EventEmitter();
  @Output() movementJP : EventEmitter<string> = new EventEmitter();
  @Output() winner : EventEmitter<string> = new EventEmitter();

  movementSelected(movement : number) {
    let movementJP = this.movements[movement];
    let movementPC = this.movements[Math.round(Math.random() * 2)]
    this.movementJP.emit(movementJP);
    this.movementPC.emit(movementPC);

    this.selectWinner(movementPC, movementJP);
  }
  
  selectWinner(movPC : string, movJP : string) {
    let winner = '';

    if (movPC === movJP) {
      winner = 'draw';
    }else if (movPC === 'rock'){
      if (movJP === 'scissors') {
        winner = 'pc';
      }else {
        winner = 'jp';
      }
    }else if (movPC === 'paper') {
      if (movJP === 'scissors') {
        winner = 'jp';
      }else {
        winner = 'pc';
      }
    }else if (movPC === 'scissors') {
      if (movJP === 'paper') {
        winner = 'pc';
      }else {
        winner = 'jp';
      }
    }

    this.winner.emit(winner);
  }
}