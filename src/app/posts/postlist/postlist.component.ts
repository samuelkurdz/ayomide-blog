import { Component, OnInit } from '@angular/core';
import { ContentfulService } from 'src/app/contentful.service';
import { Entry } from 'contentful';
import { Router } from '@angular/router';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss']
})
export class PostListComponent implements OnInit {
  Posts: Entry<any>[] = [];
  
  constructor(
    private contentfulService: ContentfulService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.contentfulService.getProducts()
    .then((posts) => {
      this.Posts = posts;
    })
  }

  readPost(postId):void {
    this.router.navigate(['posts', postId]);
  }

}
