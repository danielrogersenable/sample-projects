import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  @Input() public heading: string;
  @Input() public content: string;
  constructor() { }

  ngOnInit() {
    if (!this.heading) {
      this.heading = "Sample title";
    }

    if (!this.content) {
      this.content = "Lorem ipsum pro patria mori.";
    }
  }

}
