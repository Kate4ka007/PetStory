import { Component } from '@angular/core';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  down = false;
  isRotate = false;
  links = [
    'gorilla',
    'crocodile',
    'panda',
    'eagle',
    'sloth',
    'penguin',
    'cheetah',
  ];
  isDown() {
    this.down = !this.down;
    this.isRotate = !this.isRotate;
  }

}
