import { Component } from '@angular/core';

@Component({
  selector: 'app-crocodile',
  templateUrl: './crocodile.component.html',
  styleUrls: ['./crocodile.component.scss'],
})
export class CrocodileComponent {
  clicked = false;
  photoPath = 'assets/images/crocodile_footer.jpg';

  onClick() {
    this.clicked = true;
  }
}
