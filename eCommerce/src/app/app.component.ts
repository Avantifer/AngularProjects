import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eCommerce';

  plateSelected : any;
  
  countChangedHandler(algo : any) {
    this.plateSelected = algo;
  }
}
