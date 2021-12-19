import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chronometer',
  templateUrl: './chronometer.component.html',
  styleUrls: ['./chronometer.component.scss']
})
export class ChronometerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  minutes : number = 0;
  seconds : number = 10;
  firstZero : number = 0;
  startStop : string = 'START';
  
  value : number = 0;
  totalSeconds : number = this.calculateSeconds();
  countSeconds : number = 0;
  clicked : boolean = false;

  logicChrono() : void{
    if (!this.clicked) {
      this.chrono();
      this.clicked = true;
      this.startStop = 'STOP';
      console.log(this.totalSeconds);
    } else {
      this.clicked = false;
      this.startStop = 'START';
    }
  }

  // ? Funciona el conometro, cambiar el color de una linea cuando termine el cronometro.
  chrono() : void{
    if (this.minutes != 0 || this.seconds != 0) {
      let toZero = setInterval(() => {
        this.countSeconds++;
        this.value = (this.countSeconds/this.totalSeconds) * 100;
    
        if (this.seconds == 0) {
          this.seconds = 59;
          this.minutes--;
        }else {
          this.seconds--;
        }
        
        
        if (this.minutes == 0 && this.seconds == 0){
          clearInterval(toZero);
        }
        
        if (!this.clicked) {
          clearInterval(toZero);
        }
      }, 1000);
    }
  }

  calculateSeconds() : number {
    if (this.minutes > 0) {
      return this.minutes * 60 + this.seconds;
    }else {
      return this.seconds;
    }
  }
}
