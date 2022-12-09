import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { MainImageComponent } from './components/main-image/main-image.component';
import { BackstageComponent } from './components/backstage/backstage.component';
import { PickComponent } from './components/pick/pick.component';
import { TestimonailsComponent } from './components/testimonails/testimonails.component';


@NgModule({
  declarations: [
    CoreComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    MainImageComponent,
    BackstageComponent,
    PickComponent,
    TestimonailsComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
