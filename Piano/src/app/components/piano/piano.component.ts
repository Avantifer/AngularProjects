import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piano',
  templateUrl: './piano.component.html',
  styleUrls: ['./piano.component.scss']
})
export class PianoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sound(num : number){
    let audio = new Audio();
    audio.src = '../../../assets/audio/key-' + num + '.mp3'; 
    audio.load();
    audio.play();
  }
}
