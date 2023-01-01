import { Component } from '@angular/core';

@Component({
  selector: 'app-gorilla',
  templateUrl: './gorilla.component.html',
  styleUrls: ['./gorilla.component.scss']
})
export class GorillaComponent {
  clicked = false;

  onClick() {
    this.clicked = true;
  }
}
