import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: '首页'
  },
  {
    path: 'details/:id',
    component: DetailComponent,
    title: '详情'
  }
];
