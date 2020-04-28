import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { FeaturesModule } from './features/features.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FeaturesModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
