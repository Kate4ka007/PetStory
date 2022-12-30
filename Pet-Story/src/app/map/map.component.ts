import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
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

  /*  private loadMap(): void {
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
       popupAnchor: [-10, -10],
     });

     const pandaIcon = L.icon({
       iconUrl: 'assets/images/panda-marker.svg',
       popupAnchor: [-10, -10],
     });

     const buttonRemove =
       '<button type="button" class="remove">delete marker</button>';


     const marker = L.marker([2080, 950], { icon }).addTo(this.map).bindPopup(buttonRemove);
     const marker2 = L.marker([2180, 850], { icon }).addTo(this.map).bindPopup(buttonRemove);
     const panda = L.marker([500, 1000], { icon: pandaIcon }).addTo(this.map).bindPopup(buttonRemove);

     const marker3 = L.marker([0, 0], { icon }).addTo(this.map).bindPopup(buttonRemove);



   } */

  private loadMap(): void {
    this.map = L.map('map', {
      minZoom: 1,
      maxZoom: 6,
      zoomControl: false
    }).setView([0, 0], 1);

    L.control.zoom({
      position: 'bottomright'
    }).addTo(this.map);
    const bounds = [[-940, -621], [940, 621]];
    L.imageOverlay('assets/images/map.svg', bounds).addTo(this.map);

    const icon = L.icon({
      iconUrl: 'assets/images/marker.svg',
      popupAnchor: [10, 10],
    });

    const pandaIcon = L.icon({
      iconUrl: 'assets/images/panda-marker.svg',
      popupAnchor: [10, 10],
    });

    const buttonRemove =
      '<button type="button" class="remove">delete marker</button>';

    const marker = L.marker([0, 0], { icon }).addTo(this.map).bindPopup('buttonRemove');
    const marker2 = L.marker([100, 100], { icon }).addTo(this.map).bindPopup('buttonRemove');
    const panda = L.marker([-100, -100], { icon: pandaIcon }).addTo(this.map).bindPopup('buttonRemove');



    const marker3 = L.marker([200, 200], { icon }).addTo(this.map).bindPopup('buttonRemove');
  }
}
