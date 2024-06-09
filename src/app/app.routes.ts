import { Routes } from '@angular/router';
import { authRoutes } from './modules/auth/auth.routes';
import { AuthGuard } from '@Core/guards/auth.guard';
import { HomeComponent } from './modules/home/home/home.component';
import { NotFoundComponent } from '@Core/components/not-found/not-found.component';
import { IndexComponent } from '@Core/components/layout/index/index.component';
import { AssetsComponent } from 'modules/assets/index/index.component';
import { assetsRoutes } from 'modules/assets/assets.routes';

export const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: IndexComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },

      ...assetsRoutes,
    ],
  },
  ...authRoutes,

  {
    path: '**',
    component: NotFoundComponent,
  },
];
