import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SwiperModule } from "swiper/angular";

import { AnimalsRoutingModule } from './animals-routing.module';
import { AnimalsComponent } from './animals.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { GorillaComponent } from './components/gorilla/gorilla.component';
import { PandaComponent } from './components/panda/panda.component';
import { CrocodileComponent } from './components/crocodile/crocodile.component';
import { EagleComponent } from './components/eagle/eagle.component';
import { SlothComponent } from './components/sloth/sloth.component';
import { PenguinComponent } from './components/penguin/penguin.component';
import { CheetahComponent } from './components/cheetah/cheetah.component';
import { VideoComponent } from './components/video/video.component';
import { InfoComponent } from './components/info/info.component';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    AnimalsComponent,
    NavigationComponent,
    GorillaComponent,
    PandaComponent,
    CrocodileComponent,
    EagleComponent,
    SlothComponent,
    PenguinComponent,
    CheetahComponent,
    VideoComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AnimalsRoutingModule,
    SwiperModule,
    CoreModule,
  ]
})
export class AnimalsModule { }
