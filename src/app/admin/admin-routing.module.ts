import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AdminLayoutComponent } from '../shared/layouts/admin-layout/admin-layout.component';

import { DashboardComponent } from '../admin/dashboard/dashboard.component';
import { LoginComponent } from '../admin/login/login.component';
import { UserListComponent } from '../admin/user/user-list/user-list.component';
import { UserDetailComponent } from '../admin/user/user-detail/user-detail.component';
import { SpecialListComponent } from '../admin/special/special-list/special-list.component';
import { SpecialCreateComponent } from '../admin/special/special-create/special-create.component';
import { SpecialDetailComponent } from '../admin/special/special-detail/special-detail.component';
import { SpecialEditComponent } from '../admin/special/special-edit/special-edit.component';
import { BlogListComponent } from '../admin/blog/blog-list/blog-list.component';
import { UserActiviyComponent } from './user/user-activiy/user-activiy.component';
import { AppConfig } from '../config/app.config';
import { SettingComponent } from './setting/setting.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';

const adminRoutes : Routes = [
  {
    path : AppConfig.routes.admin, 
    component : AdminLayoutComponent,
    children : [
      { path : '', component : DashboardComponent },
      { path : 'dashboard', component : DashboardComponent },
      { path : 'setting', component : SettingComponent },
      {
        path : 'blog',
        children : [
          { path : '', component : BlogListComponent },
          { path : 'list', component : BlogListComponent },
          { path : 'detail/:id', component : BlogDetailComponent }
        ]
      }, 
      {
        path : 'user',
        children : [
          { path : '', component : UserListComponent },
          { path : 'list', component : UserListComponent },
          { path : 'detail/:id', component : UserDetailComponent },
          { path : 'activity', component : UserActiviyComponent }
        ]
      },
      {
        path : 'special',
        children : [
          { path : '', component : SpecialListComponent },
          { path : 'list', component : SpecialListComponent },
          { path : 'create', component : SpecialCreateComponent },
          { path : 'detail/:id', component : SpecialDetailComponent },
          { path : 'edit/:id', component : SpecialEditComponent },
        ]
      }
    ]
  },
  { path : AppConfig.routes.admin + '/login', component : LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class AdminRoutingModule { }
