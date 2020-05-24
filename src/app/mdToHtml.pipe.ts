import { Pipe, PipeTransform } from '@angular/core';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

@Pipe({
  name: 'mdToHtml'
})

export class MdToHtmlPipe implements PipeTransform {
  transform(value): any {
    return documentToHtmlString(value)
  }
}