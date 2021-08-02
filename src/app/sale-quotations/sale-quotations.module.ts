import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaleQuotationsPageRoutingModule } from './sale-quotations-routing.module';

import { SaleQuotationsPage } from './sale-quotations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaleQuotationsPageRoutingModule
  ],
  declarations: [SaleQuotationsPage]
})
export class SaleQuotationsPageModule {}
