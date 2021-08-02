import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaleQuotationFormPageRoutingModule } from './sale-quotation-form-routing.module';

import { SaleQuotationFormPage } from './sale-quotation-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaleQuotationFormPageRoutingModule
  ],
  declarations: [SaleQuotationFormPage]
})
export class SaleQuotationFormPageModule {}
