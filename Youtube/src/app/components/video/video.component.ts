import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit, OnChanges {

  constructor(private sanitizer : DomSanitizer) { }

  ngOnInit(): void {
    this.videoURL = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/yLX87IkvT8I');
    this.videoTitle = 'PTAZETA || BZRP Music Sessions #45';
    this.videoDescription = '47M visualizaciones -- 7 oct 2021 -- 1.4M likes';
  }

  ngOnChanges() {
    this.videoURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.video.video);
    this.videoTitle = this.video.title;
    this.videoDescription = this.video.description;
  }

  @Input() video : any = '';
  videoURL : SafeResourceUrl = '';
  videoTitle : string = '';
  videoDescription : string = '';
}