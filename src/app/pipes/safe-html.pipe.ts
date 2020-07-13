import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import DOMPurify from 'dompurify';

@Pipe({
  name: 'safeHtml'
})
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  // filter to bypass style attributes in html
  transform(value) {
    // const regexCheck = `/((on)\w+(\s*=\s*(?:".*?"|'.*?'|[^'">\s]+)))`

    // DOM purify removes any harmful XSS vectors & then angular sanitize parses the safe HTML
    value = DOMPurify.sanitize(value);
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }

}
