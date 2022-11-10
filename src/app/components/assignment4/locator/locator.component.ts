import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-locator',
  templateUrl: './locator.component.html',
  styleUrls: ['./locator.component.css'],
})
export class LocatorComponent implements OnInit {
  @Output() locate = new EventEmitter<any>();
  latitude: number = 0;
  longtitude: number = 0;
  locationGoTO: any = { lat: 0, long: 0 };
  constructor() {}

  ngOnInit(): void {}

  onBtnLocatedClicked() {
    this.locate.emit({ lat: this.latitude, long: this.longtitude });
  }
}
