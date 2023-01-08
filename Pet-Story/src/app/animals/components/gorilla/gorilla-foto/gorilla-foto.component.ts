import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gorilla-foto',
  templateUrl: './gorilla-foto.component.html',
  styleUrls: ['./gorilla-foto.component.scss'],
})
export class GorillaFotoComponent {
  @Input() photoPath!: string;
  content = 'DONATE';
}
