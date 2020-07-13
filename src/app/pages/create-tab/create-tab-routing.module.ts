import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTab } from './create-tab.page';

const routes: Routes = [
  {
    path: '',
    component: CreateTab,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateTabRoutingModule {}
