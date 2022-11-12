import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MapService } from 'src/app/services/map.service';

@Component({
  selector: 'app-assignment5',
  templateUrl: './assignment5.component.html',
  styleUrls: ['./assignment5.component.css'],
})
export class Assignment5Component implements OnInit {
  latitude: number = 13;
  longtitude: number = 100;
  @ViewChild('mapDiv') mapDiv!: ElementRef;

  constructor(private mapService: MapService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.mapService.initialMap(this.mapDiv);
  }
  onClickLocate(lat: number, long: number) {
    this.mapService.goTo(lat, long);
  }
}
