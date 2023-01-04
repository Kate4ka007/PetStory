import { Component } from '@angular/core';

@Component({
  selector: 'app-panda-info',
  templateUrl: './panda-info.component.html',
  styleUrls: ['./panda-info.component.scss']
})
export class PandaInfoComponent {
  content = 'Feed a friend now';
  isInfoClosed = false;

  onClick() {
    this.isInfoClosed = !this.isInfoClosed;
  }

}
