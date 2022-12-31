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
      minZoom: 1,
      maxZoom: 4,
      zoomControl: false
    }).setView([0, 0], 1.5);

    L.control.zoom({
      position: 'bottomright'
    }).addTo(this.map);

    const bounds = [[-1085, -717], [1085, 717]];
    L.imageOverlay('assets/images/map2.svg', bounds).addTo(this.map);

    /*     const icon = L.icon({
          iconUrl: 'assets/images/marker.svg',
          popupAnchor: [10, 10],
          iconSize: [24, 40],
          iconAnchor: [14, 40]
        }); */

    const pandaIcon = L.icon({
      iconUrl: 'assets/images/panda-marker.svg',
      popupAnchor: [10, 10],
      iconSize: [28, 46],
      iconAnchor: [17, 46]
    });

    const rectangle = L.icon({
      iconUrl: 'assets/images/rect.png',
      popupAnchor: [-20, -30],
      iconSize: [50, 50]
    });

    const buttonRemove =
      '<button type="button" class="remove">delete marker</button>';

    //const panda = L.marker([-5, 155], { icon: pandaIcon }).addTo(this.map).bindPopup('buttonRemove');


    /*     const marker = L.marker([-5, 165], { icon }).addTo(this.map).bindPopup('buttonRemove');


        const marker2 = L.marker([100, 100], { icon }).addTo(this.map).bindPopup('buttonRemove');
        const marker3 = L.marker([200, 200], { icon }).addTo(this.map).bindPopup('buttonRemove'); */

    const createPopup = (animal: string, country: string) => {
      return `<div class="popup"><div class="popup__title">${animal},</div><div class="popup__subtitle">${country}</div><button class="popup__button">Watch online</button></div>`;
    };

    const pandaUrl = 'assets/images/panda-marker.svg',
      pandaBounds = [[13, 140], [-7, 160]];
    const panda = L.imageOverlay(pandaUrl, pandaBounds, { className: 'panda' }).addTo(this.map);
    const pandaRect = L.marker([5, 150], { icon: rectangle }).addTo(this.map).bindPopup(createPopup('Panda', 'China'));


    const pandasUrl = 'assets/images/pandas.svg',
      pandasBounds = [[-20, 140], [-40, 160]];

    const pandas = L.imageOverlay(pandasUrl, pandasBounds, { className: 'panda' }).addTo(this.map);
    const pandasRect = L.marker([-30, 150], { icon: rectangle }).addTo(this.map).bindPopup(createPopup('Panda', 'China'));



  }
}
