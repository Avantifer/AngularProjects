import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-winner-screen',
  templateUrl: './winner-screen.component.html',
  styleUrls: ['./winner-screen.component.scss']
})
export class WinnerScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() movementJP : string = '';
  @Input() movementPC : string = '';
  @Input() winner : string = '';

  @Output() reset : EventEmitter<boolean> = new EventEmitter();
  
  resetGame() {
    this.reset.emit(true);
  }
}
