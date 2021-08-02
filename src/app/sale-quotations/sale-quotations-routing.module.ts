import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaleQuotationsPage } from './sale-quotations.page';

const routes: Routes = [
  {
    path: '',
    component: SaleQuotationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaleQuotationsPageRoutingModule {}
