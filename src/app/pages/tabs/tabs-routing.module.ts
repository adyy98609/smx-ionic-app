import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'create-tab',
        loadChildren: () => import('../create-tab/create-tab.module').then(m => m.CreateTabModule)
      },
      {
        path: 'preview-tab',
        loadChildren: () => import('../preview-tab/preview-tab.module').then(m => m.PreviewTabPageModule)
      },
      {
        path: 'share-tab',
        loadChildren: () => import('../share-tab/share-tab.module').then(m => m.ShareTabPageModule)
      },
      {
        path: 'response-tab',
        loadChildren: () => import('../response-tab/response-tab.module').then(m => m.TabPa4geModule)
      },
      {
        path: '',
        redirectTo: '/tabs/create-tab',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/create-tab',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
