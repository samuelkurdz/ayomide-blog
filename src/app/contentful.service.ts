import { Injectable } from '@angular/core';
import { createClient, Entry} from 'contentful';

@Injectable({
  providedIn: 'root'
})

export class ContentfulService {
  CONFIG = {
    space: 'juik9xk50dd4',
    accessToken: 'Vz7V8HB4qbbDqBNJRJJZYImzS0yWa-6SFoyYEdG0_-8',
    contentTypeIds: {
      Blog: 'SampleBlogPost'
    }
  }

  private cdaClient = createClient({
    space: this.CONFIG.space,
    accessToken: this.CONFIG.accessToken
  });

  constructor() { }

  getProducts(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: this.CONFIG.contentTypeIds.Blog
    }, query))
    .then(res => res.items);
  }

  getPost(postId): Promise<Entry<any>> {
    return this.cdaClient.getEntries(Object.assign({
     content_type: this.CONFIG.contentTypeIds.Blog
    }, {'sys.id': postId}))
      .then(res => res.items[0]);
  }
}
