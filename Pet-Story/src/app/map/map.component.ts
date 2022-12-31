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
      return `<div class="popup"><div class="popup__title">${animal}</div><div class="popup__subtitle">${country}</div><button class="popup__button">Watch online</button></div>`;
    };

    const pandaUrl = 'assets/images/panda-marker.svg',
      pandaBounds = [[13, 140], [-7, 160]];
    const panda = L.imageOverlay(pandaUrl, pandaBounds, { className: 'panda' }).addTo(this.map);
    const pandaRect = L.marker([5, 150], { icon: rectangle }).addTo(this.map).bindPopup(createPopup('Panda', 'China'));


    const pandasUrl = 'assets/images/pandas.svg',
      pandasBounds = [[-20, 140], [-40, 160]];
    const pandas = L.imageOverlay(pandasUrl, pandasBounds, { className: 'panda' }).addTo(this.map);
    const pandasRect = L.marker([-30, 150], { icon: rectangle }).addTo(this.map).bindPopup(createPopup('Panda', 'China'));

    const gorillasUrl = 'assets/images/gorillas.svg',
      gorillasBounds = [[-52, 0], [-72, 20]];
    const gorillas = L.imageOverlay(gorillasUrl, gorillasBounds, { className: 'panda' }).addTo(this.map);
    const gorillasRect = L.marker([-62, 10], { icon: rectangle }).addTo(this.map).bindPopup(createPopup('Gorillas', 'Congo, Africa'));

    const crocodileUrl = 'assets/images/crocodile.svg',
      crocodileBounds = [[-23, -145], [-43, -113]];
    const crocodile = L.imageOverlay(crocodileUrl, crocodileBounds, { className: 'panda' }).addTo(this.map);
    const crocodileRect = L.marker([-33, -126], { icon: rectangle }).addTo(this.map).bindPopup(createPopup('Crocodile', 'Florida, USA'));

    const eagle1Url = 'assets/images/eagle1.svg',
      eagle1Bounds = [[-5, -224], [-25, -204]];
    const eagle1 = L.imageOverlay(eagle1Url, eagle1Bounds, { className: 'panda' }).addTo(this.map);
    const eagle1Rect = L.marker([-15, -214], { icon: rectangle }).addTo(this.map).bindPopup(createPopup('Eagle', 'Los Angeles, USA'));

    const eagle2Url = 'assets/images/eagle2.svg',
      eagle2Bounds = [[-15, -205], [-35, -185]];
    const eagle2 = L.imageOverlay(eagle2Url, eagle2Bounds, { className: 'panda' }).addTo(this.map);
    const eagle2Rect = L.marker([-25, -195], { icon: rectangle }).addTo(this.map).bindPopup(createPopup('Eagle', 'Los Angeles, USA'));

  }
}
