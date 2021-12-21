import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GearComponent } from '../gear/gear.component';

@Component({
  selector: 'app-chronometer',
  templateUrl: './chronometer.component.html',
  styleUrls: ['./chronometer.component.scss']
})
export class ChronometerComponent implements OnInit {

  constructor(private dialog : MatDialog) { }

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
    } else {
      this.clicked = false;
      this.startStop = 'START';
    }
  }

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

  openDialog() {
    const dialogRef = this.dialog.open(GearComponent, {data :
      {minutes : this.minutes, seconds : this.seconds}
    });

    dialogRef.afterClosed().subscribe( (result) => {
      this.minutes = result.minutes;
      this.seconds = result.seconds;
      this.totalSeconds = this.calculateSeconds();
      this.value = 0;
      this.countSeconds = 0;
    })
  }
}
