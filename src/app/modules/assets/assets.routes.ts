import { Routes } from '@angular/router';
import { AuthGuard } from '@Core/guards/auth.guard';
import { AssetsComponent } from './index/index.component';
import { CreateAssetComponent } from './create/create.component';
import { ListComponent } from './components/add-details/accessories/assign-accessories/list/list.component';
import { AccessoriesDetailsComponent } from './components/add-details/accessories/assign-accessories/accessories-details/accessories-details.component';

export const assetsRoutes: Routes = [
  {
    path: 'assets',
    children: [
      {
        path: '',
        component: AssetsComponent,
      },
      {
        path: 'create',
        component: CreateAssetComponent,
      },
      {
        path: 'create/assign-accessories/list',
        component: ListComponent,
      },
      {
        path: 'create/assign-accessories/details',
        component: AccessoriesDetailsComponent,
      },
    ],
  },
];
