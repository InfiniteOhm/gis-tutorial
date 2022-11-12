import { Component, OnInit, ViewChild } from '@angular/core';
import { MapgisComponent } from './mapgis/mapgis.component';

@Component({
  selector: 'app-assignment4',
  templateUrl: './assignment4.component.html',
  styleUrls: ['./assignment4.component.css'],
})
export class Assignment4Component implements OnInit {
  @ViewChild('mapgisComponent') mapgisComponent!: MapgisComponent;
  constructor() {}

  ngOnInit(): void {}

  onClickLocate(data: any) {
    console.log('data', data);
    this.mapgisComponent.goto(data);
  }
}
