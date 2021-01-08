import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  constructor(
    private _swUpdate: SwUpdate
  ){
   }

  ngOnInit(): void {
    for (let i = 0; i < 10; i++) {
      this.randomNumbers[i] = Math.floor(Math.random()* Number.MAX_SAFE_INTEGER)
    }
  }

  public checkForUpdates(): void {
    console.log('I am getting ready to do some checking!');
    
    this._swUpdate.checkForUpdate()
    .then(() => {
      console.log('I have counted my checks before they have hatched');
    })
  }

  randomNumbers: number[] = [];
  title = 'angular-test-project';
}
