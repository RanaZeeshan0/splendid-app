import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatCompanyPageRoutingModule } from './creat-company-routing.module';

import { CreatCompanyPage } from './creat-company.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatCompanyPageRoutingModule
  ],
  declarations: [CreatCompanyPage]
})
export class CreatCompanyPageModule {}
