import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShareTabPage } from './share-tab.page';

const routes: Routes = [
  {
    path: '',
    component: ShareTabPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShareTabPageRoutingModule {}
