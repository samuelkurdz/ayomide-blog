import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './layout/homepage/homepage.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';


const routes: Routes = [
  {path: 'welcome', component:HomepageComponent},
  {path: '', redirectTo:'welcome', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
