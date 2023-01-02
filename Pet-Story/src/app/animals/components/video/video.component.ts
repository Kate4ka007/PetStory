import { Component, ViewChild, ViewEncapsulation } from "@angular/core";
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { FreeMode, Navigation, Swiper, SwiperOptions, Thumbs } from "swiper";

// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs]);

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class VideoComponent {
  thumbsSwiper: any;

  videoLinks = [
    'https://www.youtube.com/embed/rgXWDk7rh4w',
    'https://www.youtube.com/embed/rgXWDk7rh4w',
    'https://www.youtube.com/embed/rgXWDk7rh4w',
    'https://www.youtube.com/embed/rgXWDk7rh4w',
    'https://www.youtube.com/embed/rgXWDk7rh4w'
  ];

  videoImages = [
    'assets/images/pandas.jpg',
    'assets/images/pandas.jpg',
    'assets/images/pandas.jpg',
    'assets/images/pandas.jpg',
    'assets/images/pandas.jpg'
  ];
  @ViewChild('Tswiper', { static: false }) swiper?: SwiperComponent;
  slideNext() {
    this.swiper!.swiperRef.slideNext(500);
  }
  slidePrev() {
    this.swiper!.swiperRef.slidePrev(500);
  }
}
