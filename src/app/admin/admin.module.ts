import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from './shared/shared.module';

import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { BlogListComponent } from './blog/blog-list/blog-list.component';
import { SpecialListComponent } from './special/special-list/special-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { SpecialDetailComponent } from './special/special-detail/special-detail.component';
import { SpecialEditComponent } from './special/special-edit/special-edit.component';
import { SpecialCreateComponent } from './special/special-create/special-create.component';
import { UserActiviyComponent } from './user/user-activiy/user-activiy.component';
import { SettingComponent } from './setting/setting.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoginComponent, 
    UserListComponent, 
    BlogListComponent, 
    SpecialListComponent, 
    DashboardComponent, 
    UserDetailComponent, 
    SpecialDetailComponent, 
    SpecialEditComponent, 
    SpecialCreateComponent, 
    UserActiviyComponent, SettingComponent, BlogDetailComponent
  ]
})
export class AdminModule { }
