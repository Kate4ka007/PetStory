import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  /*   links = [
      { name: 'gorilla', path: 'assets/images/gorilla_icon.svg' },
      { name: 'crocodile', path: 'assets/images/crocodile_icon.svg' },
      { name: 'panda', path: 'assets/images/panda_icon.svg' },
      { name: 'eagle', path: 'assets/images/eagle_icon.svg' },
      { name: 'sloth', path: 'assets/images/sloth_icon.svg' },
      { name: 'penguin', path: 'assets/images/penguin_icon.svg' },
      { name: 'cheetah', path: 'assets/images/cheetah_icon.svg' },
    ]; */

  links = [
    'gorilla',
    'crocodile',
    'panda',
    'eagle',
    'sloth',
    'penguin',
    'cheetah',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
