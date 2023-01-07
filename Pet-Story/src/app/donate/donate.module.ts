import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonateRoutingModule } from './donate-routing.module';
import { DonateComponent } from './donate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DonateComponent
  ],
  imports: [
    CommonModule,
    DonateRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class DonateModule { }
