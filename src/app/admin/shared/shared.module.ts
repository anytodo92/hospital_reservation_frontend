import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PagenatorComponent } from './pagenator/pagenator.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    PagenatorComponent
  ],
  exports: [
    PagenatorComponent
  ]
})
export class SharedModule { }
