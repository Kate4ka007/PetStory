import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {
  content = 'Feed a friend now';
  isInfoClosed = false;

  onClick() {
    this.isInfoClosed = !this.isInfoClosed;
  }
}
