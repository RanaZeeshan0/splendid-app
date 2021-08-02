import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatCompanyPage } from './creat-company.page';

const routes: Routes = [
  {
    path: '',
    component: CreatCompanyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatCompanyPageRoutingModule {}
