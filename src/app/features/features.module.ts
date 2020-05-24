import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';

const routes: Routes= [
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent}
]

@NgModule({
  declarations: [AboutComponent, ContactComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})

export class FeaturesModule { }
