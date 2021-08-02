import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaleQuotationFormPage } from './sale-quotation-form.page';

const routes: Routes = [
  {
    path: '',
    component: SaleQuotationFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaleQuotationFormPageRoutingModule {}
