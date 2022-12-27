import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    ButtonComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [HeaderComponent, FooterComponent, ButtonComponent]
})
export class CoreModule { }
