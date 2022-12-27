import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { ButtonComponent } from './components/button/button.component';
import { CoreRoutingModule } from './core-routing.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    ButtonComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
  ],
  exports: [HeaderComponent, FooterComponent, ButtonComponent]
})
export class CoreModule { }
