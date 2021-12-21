import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-gear',
  templateUrl: './gear.component.html',
  styleUrls: ['./gear.component.scss']
})
export class GearComponent implements OnInit {

  constructor(private dialog : MatDialogRef<GearComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  newMinutes : number = 0;
  newSeconds : number = 0;

  formatMinutes(value : number) : number {
    this.newMinutes = value;
    return value
  }

  formatSeconds(value : number) : number {
    this.newSeconds = value;
    return value
  }

  closeDialog() {    
    this.dialog.close({minutes : this.newMinutes, seconds : this.newSeconds});
  }
}
