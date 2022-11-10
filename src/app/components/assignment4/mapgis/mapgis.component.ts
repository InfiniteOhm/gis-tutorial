import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';

@Component({
  selector: 'app-mapgis',
  templateUrl: './mapgis.component.html',
  styleUrls: ['./mapgis.component.css'],
})
export class MapgisComponent implements AfterViewInit {
  @ViewChild('mapDiv') mapDiv!: ElementRef;

  constructor() {}

  mapView!: MapView;
  ngOnInit(): void {}

  ngAfterViewInit() {
    const myMap = new Map({
      basemap: 'streets-vector',
    });

    this.mapView = new MapView({
      container: this.mapDiv.nativeElement,
      map: myMap,
      zoom: 15,
      center: [100.5447275, 13.698999],
    });
  }

  goto(data: any) {
    console.log('goto data =', data);
    this.mapView.goTo(
      {
        center: [Number(data.long), Number(data.lat)],
      },
      {
        duration: 8000,
      }
    );
  }
}
