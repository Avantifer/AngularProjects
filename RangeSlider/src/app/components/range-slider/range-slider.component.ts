import { Component, OnInit } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-range-slider',
  templateUrl: './range-slider.component.html',
  styleUrls: ['./range-slider.component.scss']
})
export class RangeSliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  value : number | null = 0;

  change(event : MatSliderChange) {
    this.value = event.value;
  }
}
