import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  ngOnInit(): void {
    for (let i = 0; i < 10; i++) {
      this.randomNumbers[i] = Math.floor(Math.random()* Number.MAX_SAFE_INTEGER)
    }
  }

  randomNumbers: number[] = [];
  title = 'angular-test-project';
}
