import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-crocodile-info',
  templateUrl: './crocodile-info.component.html',
  styleUrls: ['./crocodile-info.component.scss']
})
export class CrocodileInfoComponent {
  content = 'Feed a friend now';
  isInfoClosed = false;

  onClick() {
    this.isInfoClosed = !this.isInfoClosed;
  }

}
