import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MapComponent implements AfterViewInit {
  map: any;

  constructor() {
  }

  public ngAfterViewInit(): void {
    this.loadMap();
  }

  private loadMap(): void {
    this.map = L.map('map', {
      crs: L.CRS.Simple,
      minZoom: -1.6,
      maxZoom: 2,
      id: 'mapbox',
    }).setView([0, 0], -1.6);


    const bounds = [[-1000, -2000], [1000, 2000]];
    L.imageOverlay('assets/images/map.svg', bounds).addTo(this.map);

    const icon = L.icon({
      iconUrl: 'assets/images/marker.svg',
      popupAnchor: [0, 0],
    });

    const pandaIcon = L.icon({
      iconUrl: 'assets/images/panda-marker.svg',
      popupAnchor: [10, 10],
    });


    const marker = L.marker([2080, 950], { icon }).bindPopup('Angular Leaflet');
    marker.addTo(this.map);

    const marker2 = L.marker([2180, 850], { icon }).bindPopup('Angular Leaflet2');
    marker2.addTo(this.map);

    const panda = L.marker([2000, 950], { icon: pandaIcon }).bindPopup('Angular Leaflet');
    panda.addTo(this.map);
  }
}
