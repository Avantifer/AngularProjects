import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RockPaperScissor';

  movementJP : string = '';
  movementPC : string = '';
  winner : string = '';

  setMovementJP(mov : string) {
    this.movementJP = mov;
  }

  setMovementPC(mov : string) {
    this.movementPC = mov;
  }

  setWinner(winner : string) {
    this.winner = winner;
  }

  resetGame(reset : boolean) {
    this.movementJP = '';
    this.movementPC = '';
    this.winner = '';
  } 
}
