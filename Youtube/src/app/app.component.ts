import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Youtube';

  video : any = '';

  getVideo(video : any) {
    this.video = video;
  }
}
