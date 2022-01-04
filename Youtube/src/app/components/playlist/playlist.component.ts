import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  videos = [
    {'position' : 0, 'video' : 'https://www.youtube.com/embed/yLX87IkvT8I', 'image' : '../../../assets/images/ptazeta.jpg', 'title' : 'PTAZETA || BZRP Music Sessions #45', 'description' : '47M visualizaciones -- 7 oct 2021 -- 1.4M likes'},
    {'position' : 1, 'video' : 'https://www.youtube.com/embed/of_3rje8oKA', 'image' : '../../../assets/images/mhd.jpg', 'title' : 'MHD || BZRP Music Sessions #44', 'description' : '18M visualizaciones -- 16 sept 2021 -- 950K likes'},
    {'position' : 2, 'video' : 'https://www.youtube.com/embed/h7U8TqOVyxc', 'image' : '../../../assets/images/tiago.jpg', 'title' : 'TIAGO PZK || BZRP Music Sessions #48', 'description' : '21M visualizaciones -- 28 dic 2021 -- 1.7M likes'},
    {'position' : 3, 'video' : 'https://www.youtube.com/embed/t490zXLrQDE', 'image' : '../../../assets/images/snow.jpg', 'title' : 'Snow Tha Product || BZRP Music Sessions #39', 'description' : '146M visualizaciones -- 29 abr 2021 -- 3.2M likes'},
    {'position' : 4, 'video' : 'https://www.youtube.com/embed/HbeLYtQqkIg', 'image' : '../../../assets/images/ysy.jpg', 'title' : 'YSY A || BZRP Music Sessions #37', 'description' : '62M visualizaciones -- 27 ene 2021 -- 62M likes'},
    {'position' : 5, 'video' : 'https://www.youtube.com/embed/exuRTyiNbYU', 'image' : '../../../assets/images/lalo.jpg', 'title' : 'LALO EBRATT || BZRP Music Sessions #22', 'description' : '26M visualizaciones -- 22 ene 2020 -- 630K likes'},
    {'position' : 6, 'video' : 'https://www.youtube.com/embed/Ksg6lbZrxpM', 'image' : '../../../assets/images/dani.jpg', 'title' : 'DANI || BZRP Freestyle Sessions #7', 'description' : '52M visualizaciones -- 7 nov 2019 -- 1.2M likes'},
    {'position' : 7, 'video' : 'https://www.youtube.com/embed/gW165h1-AZE', 'image' : '../../../assets/images/nicki.jpg', 'title' : 'NICKI NICOLE || BZRP Music Sessions #13', 'description' : '163M visualizaciones -- 14 ago 2019 -- 2.9M likes'},
    {'position' : 8, 'video' : 'https://www.youtube.com/embed/1iZ999P03KU', 'image' : '../../../assets/images/toto.jpg', 'title' : 'KIDDO TOTO || BZRP Music Sessions #11', 'description' : '70M visualizaciones -- 2 ago 2019 -- 980K likes'},
    {'position' : 9, 'video' : 'https://www.youtube.com/embed/RHUKLQ6nWpc', 'image' : '../../../assets/images/trueno.jpg', 'title' : 'TRUENO || BZRP Freestyle Sessions #6', 'description' : '203M visualizaciones -- 28 jun 2019 -- 3M likes'},
  ]

  @Output() videoSelected : EventEmitter<any> = new EventEmitter();
  
  selectVideo(position : number) {
    this.videoSelected.emit(this.videos[position]);
  }
}
