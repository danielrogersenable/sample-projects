import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-home',
  templateUrl: './sample-home.component.html',
  styleUrls: ['./sample-home.component.scss']
})
export class SampleHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() numberValue: number;

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
      console.log('running');
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
