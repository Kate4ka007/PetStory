import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { slider } from 'src/assets/data/slider';

interface Slider {
  name: string;
  src: string;
  from: string;
  food: string;
}

@Component({
  selector: 'app-main-image',
  templateUrl: './main-image.component.html',
  styleUrls: ['./main-image.component.scss']
})
export class MainImageComponent implements OnInit {
  @ViewChild('wrapper') wrapper!: ElementRef;

  animals: Slider[] = slider;

  marginLeft = 0;

  constructor() { }

  ngOnInit(): void {
  }

  moveRight() {
    if (this.marginLeft < 0) {
      this.marginLeft += 1188;
      this.wrapper.nativeElement.style.marginLeft = `${this.marginLeft}px`;

    }

  }
  moveLeft() {
    if (this.marginLeft > -3500)
      this.marginLeft -= 1188;
    this.wrapper.nativeElement.style.marginLeft = `${this.marginLeft}px`;
  }

}
