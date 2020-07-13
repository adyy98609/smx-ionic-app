import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PreviewTabPage } from './preview-tab.page';

import { PreviewTabPageRoutingModule } from './preview-tab-routing.module';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    PreviewTabPageRoutingModule
  ],
  declarations: [PreviewTabPage]
})
export class PreviewTabPageModule {}
