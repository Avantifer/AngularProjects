import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PickMovementComponent } from './components/pick-movement/pick-movement.component';
import { WinnerScreenComponent } from './components/winner-screen/winner-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    PickMovementComponent,
    WinnerScreenComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
