import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppConfig } from './config/app.config';

import { Error404Component } from './shared/errors/error-404/error-404.component';

const routes: Routes = [
  { path : AppConfig.routes.www, loadChildren : './www/www.module#WwwModule' },
  { path : AppConfig.routes.admin, loadChildren : './admin/admin.module#AdminModule' },
  { path : '**', redirectTo : '/' + AppConfig.routes.error404 },
  { path : AppConfig.routes.error404, component : Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
