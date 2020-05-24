import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material.module';

import { PostListComponent } from './postlist/postlist.component';
import { PostDetailComponent } from './postdetail/postdetail.component';
import { MdToHtmlPipe } from '../mdToHtml.pipe';

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
    PostDetailComponent,
    MdToHtmlPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    MdToHtmlPipe
  ]
})
export class PostsModule { }
