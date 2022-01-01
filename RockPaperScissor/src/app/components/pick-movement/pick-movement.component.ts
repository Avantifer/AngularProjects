import { Component, OnInit } from '@angular/core';

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
  movementPC : string = this.movements[Math.round(Math.random() * 2)];
  movementJP : string = '';

  movementSelected(movement : number) {
    this.movementJP = this.movements[movement];
  }
}
