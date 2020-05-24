import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';
import { ContentfulService } from 'src/app/contentful.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.component.html',
  styleUrls: ['./postdetail.component.scss']
})
export class PostDetailComponent implements OnInit {
  post: Entry<any>;
  showPost: boolean = false;

  constructor(
    private contentfulService: ContentfulService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const postId = this.route.snapshot.paramMap.get('id');
    this.contentfulService.getPost(postId).then((response) => {
      this.post = response;
      this.showPost = !this.showPost;
    })
  }

}
