import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PostListComponent } from './postlist/postlist.component';
import { PostDetailComponent } from './postdetail/postdetail.component';

const routes: Routes = [
  {
    path: 'posts',
    children: [
      {path: '', component: PostListComponent},
      {path: ':id', component: PostDetailComponent}
    ]
  }
]

@NgModule({
  declarations: [
    PostListComponent,
    PostDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PostsModule { }
