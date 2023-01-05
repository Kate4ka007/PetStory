import { Component } from '@angular/core';

@Component({
  selector: 'app-eagle-info',
  templateUrl: './eagle-info.component.html',
  styleUrls: ['./eagle-info.component.scss']
})
export class EagleInfoComponent {
  content = 'Feed a friend now';
  isInfoClosed = false;

  onClick() {
    this.isInfoClosed = !this.isInfoClosed;
  }
}
