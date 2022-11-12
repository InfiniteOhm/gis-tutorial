import { ElementRef, Injectable } from '@angular/core';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import Graphic from '@arcgis/core/Graphic';
import Point from '@arcgis/core/geometry/Point';
import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol';
import MapImageLayer from '@arcgis/core/layers/MapImageLayer';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  map!: Map;
  mapView!: MapView;
  latitude: number = 13;
  longtitude: number = 100;
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

    //Add Layer
    this.mapView.when(() => {
      const usaLayer = new MapImageLayer({
        url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer',
      });
      this.map.add(usaLayer);
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

    //Add Graphic to map
    const symbol = new SimpleMarkerSymbol({
      style: 'square',
      color: 'blue',
      size: '8px', // pixels
      outline: {
        // autocasts as new SimpleLineSymbol()
        color: [255, 255, 0],
        width: 3,
      },
    });

    const point = new Point({
      latitude: lat,
      longitude: long,
    });
    const graphic = new Graphic({
      geometry: point,
      symbol: symbol,
    });
    this.mapView.graphics.add(graphic);
  }
}
