import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreRoutingModule } from './core-routing.module';

import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    MainLayoutComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    CoreRoutingModule

  ],
  exports: [MainLayoutComponent]
})
export class CoreModule { }
