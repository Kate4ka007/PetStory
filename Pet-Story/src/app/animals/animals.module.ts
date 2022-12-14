import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
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
import { FlowersComponent } from './components/flowers/flowers.component';
import { GorillaFotoComponent } from './components/gorilla/gorilla-foto/gorilla-foto.component';
import { PandaVideoComponent } from './components/panda/panda-video/panda-video.component';
import { PandaInfoComponent } from './components/panda/panda-info/panda-info.component';
import { CrocodileVideoComponent } from './components/crocodile/crocodile-video/crocodile-video.component';
import { CrocodileInfoComponent } from './components/crocodile/crocodile-info/crocodile-info.component';
import { EagleVideoComponent } from './components/eagle/eagle-video/eagle-video.component';
import { EagleInfoComponent } from './components/eagle/eagle-info/eagle-info.component';


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
    InfoComponent,
    FlowersComponent,
    GorillaFotoComponent,
    PandaVideoComponent,
    PandaInfoComponent,
    CrocodileVideoComponent,
    CrocodileInfoComponent,
    EagleVideoComponent,
    EagleInfoComponent,
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
