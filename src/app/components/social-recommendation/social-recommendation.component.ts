import {
  Component,
  OnInit,
  Input,
  forwardRef,
  ViewChild,
  ElementRef,
  EventEmitter,
  Output,
  AfterViewInit
} from '@angular/core';
import { QuestionMeta } from '../../app.model';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SmxUidService } from '../../services/smx-uid/uid.service';

@Component({
  selector: 'smx-social-recommendation',
  templateUrl: './social-recommendation.component.html',
  styleUrls: ['./social-recommendation.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SmxSocialRecommendationComponent),
      multi: true,
    },
  ],
})
export class SmxSocialRecommendationComponent implements OnInit, AfterViewInit {

  @Input('id') id: string;

  @Input('idx') idx: number;

  @Input() isRequired: boolean = false;

  @Input() isFocussed: boolean = false;

  messageSettings: any;

  socialShareLinks: any;

  socialReviewLinks: any;

  required: string;

  value: string = '';

  // input scroll height for survey rendering based on device height
  @Input('scrollHeight') scrollAreaHeight: number = 250;

  @Output() saveSocialComment: EventEmitter<any> = new EventEmitter<any>();

  @Input() translations: any;
  @Input() surveyDetails: any;

  @Input('questionMeta') set questionMeta(val: QuestionMeta) {
    this.required =
      val.messageSettings?.inputRequiredYN;
    this.messageSettings = val.messageSettings;
    this.socialShareLinks = this.messageSettings?.socialShareLinks;
    this.socialReviewLinks = this.messageSettings?.socialReviewLinks;
  }

  @ViewChild('textArea', { read: ElementRef }) textArea: ElementRef;

  constructor(private uid: SmxUidService) { }

  ngOnInit(): void {
    if (this.messageSettings?.primaryCommentAnswer) {
      this.writeValue(this.messageSettings?.primaryCommentAnswer);
    }
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.autotextAreaGrow(), 100);
  }


  public respond(event: any) {
    this.value = event.target.value;
    this.onChange(this.value);
    this.autotextAreaGrow();
  }

  onChange = (_) => { };

  onTouched = () => { };

  writeValue(val: any): void {
    this.value = val;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  autoGrowText(event) {
    const textArea = this.textArea.nativeElement;
    if (event.key === 'Enter') {
      if (textArea.scrollHeight < this.scrollAreaHeight) {
        textArea.style.overflow = 'hidden';
        textArea.style.height = '0px';
        textArea.style.height = textArea.scrollHeight + 10 + 'px';
      } else {
        textArea.style['overflow-y'] = 'scroll';
      }
    }

    const delKey = event.key === 'Backspace' || event.key === 'Delete';
    if (delKey && !textArea.value) {
      textArea.style.overflow = 'hidden';
      textArea.style.height = '35px';
    }
  }



  autotextAreaGrow() {
    const textArea = this.textArea?.nativeElement;
    if (textArea) {
      if (this.value) {
        if (textArea.scrollHeight < this.scrollAreaHeight) {
          textArea.style.overflow = 'hidden';
          textArea.style.height = '0px';
          textArea.style.height = textArea.scrollHeight + 'px';
        } else {
          textArea.style['overflow-y'] = 'scroll';
        }
        return;
      }
      textArea.style.overflow = 'hidden';
      textArea.style.height = '35px';
    }

  }

  shareSocial(link: any) {
    if (this.value) {
      this.isRequired = false;
      this.saveComment(link, 'SOCIAL_SHARE');
      this.openLink(link);
    } else {
      this.isRequired = true;
    }
  }

  saveComment(link: any, sharetype: string) {
    const data = {
      linkData: link,
      questionsData: this.messageSettings,
      commentPosted: this.value,
      type: sharetype
    };
    this.saveSocialComment.emit(data);
  }

  reviewSocial(link: any) {
    let siteUrl = link.url;
    if (typeof siteUrl !== 'undefined' && siteUrl !== null) {
      const pattern = new RegExp('^(http|https)://', 'i');
      if (!pattern.test(siteUrl)) {
        siteUrl = 'http://' + siteUrl;
      }
      this.saveComment(link, 'SOCIAL_REVIEW');
      window.open(siteUrl, '_blank', 'noopener, noreferrer');
    }
  }

  openLink(link: any) {
    let descriptionLen = 250;
    if (link.id.toLowerCase() === 'twitter') {
      descriptionLen = 110;
    }
    const companyUrl = this.socialShareLinks?.companyUrl;
    const socialShareMessageTitle = this.socialShareLinks?.socialShareMessageTitle;
    const recommendation = this.translations.recommendation;
    const companyName = this.translations.companyName;
    const poweredbyCompanyName = this.translations.poweredbyCompanyName;
    const shareUrl = this.translations.shareUrl;
    const localeCode = this.surveyDetails.localeCode;
    const enterpriseIdfier = this.surveyDetails.enterpriseIdfier;
    const dataCollectionIdfier = this.surveyDetails.dataCollectionIdfier;
    const providerIdfier = this.surveyDetails.providerIdfier;
    const twitterShare = this.translations.twitterShare;
    const linkedinShare = this.translations.linkedinShare;
    const facebookShare = this.translations.facebookShare;
    const entDataProviderHashCode = this.hashCode(enterpriseIdfier + dataCollectionIdfier + providerIdfier + '');

    let description = this.value.substring(0, descriptionLen);
    if (this.value.length > 250) {
      const index = description.lastIndexOf(' ');
      if (index !== -1) {
        description = this.value.substring(0, index);
      }
    }

    let title = recommendation + ' ' + companyName + ' ' + poweredbyCompanyName;
    if (socialShareMessageTitle) {
      title = socialShareMessageTitle;
    }
    let urlPart = '';
    const origin = window.location.origin;
    urlPart = `${origin}/app/core/share/${(entDataProviderHashCode)}/all?`;
    let query = `l=${localeCode}&cu=${companyUrl}&cp=0&a=${enterpriseIdfier}&b=${dataCollectionIdfier}`;
    query += `&c=${providerIdfier}&d=${link.id.toLowerCase()}`;

    let url = '';
    if (link.id.toLowerCase() === 'twitter') {
      urlPart += `${encodeURIComponent(query)}`;
      url = urlPart;
      urlPart = `http://api.addthis.com/oexchange/0.8/forward/${link.id.toLowerCase()}/offer?via=`;
      if (link.handle !== '') {
        urlPart += link.handle;
      } else {
        urlPart += 'Satmetrix';
      }
      urlPart += `&shortener=bitly&url=${url}&title=${encodeURIComponent(title)}&description=${description}`;
      url = '';
    } else if (link.id.toLowerCase() === 'facebook' || link.id.toLowerCase() === 'linkedin') {
      query += `&e=${this.replaceAll(title, '#', ' ')}&f=${this.replaceAll(description, '#', ' ')}`;
      urlPart += `${encodeURIComponent(query)}`;
      url = urlPart;
      urlPart = `http://api.addthis.com/oexchange/0.8/forward/${link.id.toLowerCase()}/offer?url=`;
    }
    url = urlPart + '' + url;
    window.open(url, '_blank', 'noopener, noreferrer');
  }

  /**
   * Returns a hash code for a string.
   * (Compatible to Java's String.hashCode())
   *
   * The hash code for a string object is computed as
   *     s[0]*31^(n-1) + s[1]*31^(n-2) + ... + s[n-1]
   * using number arithmetic, where s[i] is the i th character
   * of the given string, n is the length of the string,
   * and ^ indicates exponentiation.
   * (The hash value of the empty string is zero.)
   *
   * @param str a string
   * @return number a hash code value for the given string.
   */
  hashCode(str: string) {
    let h = 0;
    const l = str.length;
    let i = 0;
    if (l > 0) {
      while (i < l) {
        h = (h << 5) - h + str.charCodeAt(i++) | 0;
      }
    }
    return h;
  }

  replaceAll(Source, stringToFind, stringToReplace) {
    let temp = Source;
    let index = temp.indexOf(stringToFind);
    while (index !== -1) {
      temp = temp.replace(stringToFind, stringToReplace);
      index = temp.indexOf(stringToFind);
    }
    return temp;
  }
}
