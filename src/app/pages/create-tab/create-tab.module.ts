import { SmxModule } from './../../components/smx.module';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreateTab } from './create-tab.page';
import { CreateTabRoutingModule } from './create-tab-routing.module';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    CreateTabRoutingModule,
    SmxModule
  ],
  declarations: [CreateTab]
})
export class CreateTabModule {}
