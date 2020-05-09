import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '../material.module';
import { FeaturesModule } from '../features/features.module';
import { CoreRoutingModule } from './core-routing.module';

import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { HomepageComponent } from './layout/homepage/homepage.component';



@NgModule({
  declarations: [
    MainLayoutComponent,
    PageNotFoundComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    FeaturesModule,
    CoreRoutingModule,

  ],
  exports: [MainLayoutComponent]
})
export class CoreModule { }
