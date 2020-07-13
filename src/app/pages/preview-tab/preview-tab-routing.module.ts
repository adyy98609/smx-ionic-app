import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreviewTabPage } from './preview-tab.page';

const routes: Routes = [
  {
    path: '',
    component: PreviewTabPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreviewTabPageRoutingModule {}
