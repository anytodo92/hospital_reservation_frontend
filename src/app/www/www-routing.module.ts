import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { WwwLayoutComponent } from '../shared/layouts/www-layout/www-layout.component';

import { HomeComponent } from './home/home.component';
import { SpecialListComponent } from './special/special-list/special-list.component';
import { SpecialDetailComponent } from './special/special-detail/special-detail.component';
import { BlogWriteComponent } from './blog/blog-write/blog-write.component';
import { PersonalComponent } from './personal/personal.component';
import { PersonalBlogComponent } from './personal/personal-blog/personal-blog.component';
import { PersonalProfileComponent } from './personal/personal-profile/personal-profile.component';
import { PersonalSpecialListComponent } from './personal/personal-special-list/personal-special-list.component';
import { PersonalSecurityComponent } from './personal/personal-security/personal-security.component';
import { BlogEditComponent } from './blog/blog-edit/blog-edit.component';
import { SearchComponent } from './search/search.component';
import { AppConfig } from '../config/app.config';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { PersonalSpecialCreateComponent } from './personal/personal-special-create/personal-special-create.component';
import { PersonalSpecialEditComponent } from './personal/personal-special-edit/personal-special-edit.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';


const wwwRoutes : Routes = [
  {
    path : AppConfig.routes.www,
    component : WwwLayoutComponent,
    children : [
      { path : '', component : HomeComponent },
      { path : 'home', component : HomeComponent },
      /*{ path : 'user/detail/:id', component : UserDetailComponent },*/
      { path : 'special/list', component : SpecialListComponent },
      { path : 'special/detail/:id', component : SpecialDetailComponent},
      { path : 'blog/write/:id', component : BlogWriteComponent },
      /*{ path : 'blog/edit/:id', component : BlogEditComponent },*/
      { path : 'blog/detail/:id', component : BlogDetailComponent },
      { path : 'search/:id/:keyword', component : SearchComponent },
      {
        path : 'personal',
        component : PersonalComponent,
        children : [
          { path : 'profile', component : PersonalProfileComponent },
          { path : 'security', component : PersonalSecurityComponent },
          { path : 'blog', component : PersonalBlogComponent },
          { path : 'special/list', component : PersonalSpecialListComponent },
          { path : 'special/create', component : PersonalSpecialCreateComponent },
          { path : 'special/edit/:id', component : PersonalSpecialEditComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(wwwRoutes)
  ],
  exports : [
    RouterModule
  ],
  declarations: []
})
export class WwwRoutingModule { }
