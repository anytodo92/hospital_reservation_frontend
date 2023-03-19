import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { HttpLoaderFactory } from './app.translate.factory';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppConfig, APP_CONFIG } from './config/app.config';
import { ProgressBarService } from './shared/services/progress-bar.service';
import { ProgressInterceptor } from './shared/interceptors/progress.interceptor';
//import { TimingInterceptor } from './shared/interceptors/timing.interceptor';

import { SharedModule } from './shared/shared.module';
import { WwwModule } from './www/www.module';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader : {
        provide : TranslateLoader,
        useFactory : HttpLoaderFactory,
        deps : [HttpClient]
      }
    }),

    SharedModule.forRoot(),
    WwwModule,
    AdminModule,
    AppRoutingModule
  ],
  providers: [
    { provide : APP_CONFIG, useValue : AppConfig },
    { provide : HTTP_INTERCEPTORS, useClass : ProgressInterceptor, multi : true, deps : [ProgressBarService] }
    //{ provide : HTTP_INTERCEPTORS, useClass : TimingInterceptor, mutil : true }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
