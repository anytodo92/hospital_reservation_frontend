import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SpecialItemComponent } from './components/special-item/special-item.component';
import { MainBannerComponent } from './components/main-banner/main-banner.component';
import { RatingStarComponent } from './components/rating-star/rating-star.component';
import { ChartComponent } from './components/chart/chart.component';
import { PagenatorComponent } from './components/pagenator/pagenator.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { SmallSearchBarComponent } from './components/small-search-bar/small-search-bar.component';
import { RatingSlidebarComponent } from './components/rating-slidebar/rating-slidebar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    SpecialItemComponent,
    MainBannerComponent,
    RatingStarComponent,
    ChartComponent,
    PagenatorComponent,
    BlogItemComponent,
    SmallSearchBarComponent,
    RatingSlidebarComponent
  ],
  exports: [
    SpecialItemComponent,
    MainBannerComponent,
    RatingStarComponent,
    ChartComponent,
    PagenatorComponent,
    BlogItemComponent,
    RatingSlidebarComponent
  ]
})
export class SharedModule { }
