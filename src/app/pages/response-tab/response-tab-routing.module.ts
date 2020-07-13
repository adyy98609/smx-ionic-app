import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResponseTabPage } from './response-tab.page';

const routes: Routes = [
  {
    path: '',
    component: ResponseTabPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResponseTabPageRoutingModule {}
