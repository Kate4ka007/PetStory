import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from "swiper/angular";

import { StartPageRoutingModule } from './start-page-routing.module';
import { StartPageComponent } from './start-page.component';
import { MainImageComponent } from './components/main-image/main-image.component';
import { BackstageComponent } from './components/backstage/backstage.component';
import { PickComponent } from './components/pick/pick.component';
import { TestimonailsComponent } from './components/testimonails/testimonails.component';
import { CardComponent } from './components/testimonails/card/card.component';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    StartPageComponent,
    MainImageComponent,
    BackstageComponent,
    PickComponent,
    TestimonailsComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    StartPageRoutingModule,
    SwiperModule,
    CoreModule,
  ]
})
export class StartPageModule { }
