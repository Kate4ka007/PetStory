import { Component } from '@angular/core';

@Component({
  selector: 'app-panda',
  templateUrl: './panda.component.html',
  styleUrls: ['./panda.component.scss'],
})
export class PandaComponent {
  clicked = false;
  photoPath = 'assets/images/panda_footer.jpg';

  onClick() {
    this.clicked = true;
  }
}
