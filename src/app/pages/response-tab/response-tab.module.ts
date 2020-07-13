import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ResponseTabPage } from './response-tab.page';
import { ResponseTabPageRoutingModule } from './response-tab-routing.module'
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: ResponseTabPage }]),
    ResponseTabPageRoutingModule,
  ],
  declarations: [ResponseTabPage]
})
export class TabPa4geModule {}
