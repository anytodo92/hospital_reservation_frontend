import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { WwwRoutingModule} from './www-routing.module';
import { SharedModule } from './shared/shared.module';

import { HomeComponent } from './home/home.component';
import { SpecialListComponent } from './special/special-list/special-list.component';
import { SpecialDetailComponent } from './special/special-detail/special-detail.component';
import { BlogWriteComponent } from './blog/blog-write/blog-write.component';
import { PersonalProfileComponent } from './personal/personal-profile/personal-profile.component';
import { PersonalBlogComponent } from './personal/personal-blog/personal-blog.component';
import { PersonalSpecialListComponent } from './personal/personal-special-list/personal-special-list.component';
import { PersonalComponent } from './personal/personal.component';
import { PersonalSecurityComponent } from './personal/personal-security/personal-security.component';
import { BlogEditComponent } from './blog/blog-edit/blog-edit.component';
import { SearchComponent } from './search/search.component';
import { PersonalSpecialEditComponent } from './personal/personal-special-edit/personal-special-edit.component';
import { PersonalSpecialCreateComponent } from './personal/personal-special-create/personal-special-create.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    WwwRoutingModule,
    SharedModule
  ],

  declarations: [
    HomeComponent,
    SpecialListComponent,
    SpecialDetailComponent,
    BlogWriteComponent,
    PersonalProfileComponent,
    PersonalBlogComponent,
    PersonalSpecialListComponent,
    PersonalComponent,
    PersonalSecurityComponent,
    BlogEditComponent,
    SearchComponent,
    PersonalSpecialEditComponent,
    PersonalSpecialCreateComponent,
    UserDetailComponent,
    BlogDetailComponent
  ]
})
export class WwwModule { }
