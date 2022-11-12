import { ElementRef, Injectable } from '@angular/core';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  map!: Map;
  mapView!: MapView;
  constructor() {}

  initialMap(divMap: ElementRef) {
    this.map = new Map({
      basemap: 'topo-vector',
    });
    this.mapView = new MapView({
      map: this.map,
      container: divMap.nativeElement,
      zoom: 17,
      center: [100.1877531, 13.8036312],
    });
  }
  goTo(lat: number, long: number) {
    this.mapView.goTo(
      {
        center: [long, lat],
      },
      {
        duration: 500,
      }
    );
  }
}
