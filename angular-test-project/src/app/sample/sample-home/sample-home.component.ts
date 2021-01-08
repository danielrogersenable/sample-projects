import { Component, Input, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-sample-home',
  templateUrl: './sample-home.component.html',
  styleUrls: ['./sample-home.component.scss']
})
export class SampleHomeComponent implements OnInit {

  constructor(updates: SwUpdate) {
    this.message = '';
    updates.available.subscribe(event => {
      this.message = 'new event is available! oooooh, shiny!'
      console.log(this.message);
      setTimeout(() => {
        updates.activateUpdate();
      }, 2000);
    });

    updates.activated.subscribe(event => {
      this.message = 'assemble!';
      console.log(this.message);
    });
   }

  ngOnInit(): void {
  }

  @Input() numberValue: number;

  message: string;

  public getSmallestFactor(numberValue: number) : number {
    let currentNumber = 2;

    while (currentNumber <= Math.sqrt(numberValue)) {
      if (numberValue % currentNumber === 0) {
        return currentNumber;
      } else {
        currentNumber++;
      }
    }

    return numberValue;
  }

  public get factorText(): string[] {
    let stringText: string[] = [];
    let currentValue = this.numberValue;
    let complete = false;

    while(!complete) {
      const currentFactor = this.getSmallestFactor(currentValue);
      stringText.push(`One factor of ${this.numberValue} is ${currentFactor}.`);
      currentValue = currentValue / currentFactor;

      if (currentValue === 1){
        complete = true;
      }
    }

    stringText.push(`And that is the story of ${this.numberValue}`);

    return stringText;
  }
}
