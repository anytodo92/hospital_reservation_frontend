import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { WwwLayoutComponent } from './layouts/www-layout/www-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { Error404Component } from './errors/error-404/error-404.component';
import { LoggerService } from './services/logger.service';
import { ProgressBarService } from './services/progress-bar.service';
import { MaterialModule } from './material.module';
import { DataService } from './services/data.service';

@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    FlexLayoutModule,
    TranslateModule,
    RouterModule
  ],

  declarations: [
    Error404Component,
    WwwLayoutComponent,
    AdminLayoutComponent
  ],

  exports : [
    FlexLayoutModule,
    TranslateModule,
    MaterialModule
  ],

  providers : [
    LoggerService,
    ProgressBarService,
    DataService
  ]
})

export class SharedModule { 
  static forRoot (): ModuleWithProviders {
    return {
      ngModule : SharedModule,
      providers : []
    };
  }
}
