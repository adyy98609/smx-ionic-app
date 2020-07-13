import { DomSanitizer } from '@angular/platform-browser';
import { SafeHtmlPipe } from './safe-html.pipe';

describe('SafeHtmlPipe', () => {
  let sanitizer: DomSanitizer;
  it('create an instance', () => {
    const pipe = new SafeHtmlPipe(sanitizer);
    expect(pipe).toBeTruthy();
  });
});
