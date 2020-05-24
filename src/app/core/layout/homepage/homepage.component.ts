import { Component, OnInit } from '@angular/core';
import { ContentfulService } from 'src/app/contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  shortPosts: Entry<any>[] = [];

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit(): void {
    this.contentfulService.getProducts()
    .then((posts) => {
      this.shortPosts = posts.slice(3);
    })
  }

}
