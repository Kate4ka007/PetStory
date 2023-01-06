import { Component } from '@angular/core';

@Component({
  selector: 'app-eagle',
  templateUrl: './eagle.component.html',
  styleUrls: ['./eagle.component.scss'],
})
export class EagleComponent {
  clicked = false;
  photoPath = 'assets/images/eagle_footer.jpg';

  onClick() {
    this.clicked = true;
  }
}
