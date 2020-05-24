import { Component, OnInit } from '@angular/core';
import { ContentfulService } from './contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Temp';
  private products: Entry<any>[] = [];

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    // this.contentfulService.getProducts()
    // .then((products) => {
    //   this.products = products;
    //   this.showReturns()
    // })
  }

  showReturns() {
    console.log(this.products[0].fields.title)
  }
}
