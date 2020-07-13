import {
  Component,
  OnInit,
  Output,
  Input,
  forwardRef,
  ViewChild,
  ElementRef,
  EventEmitter,
  AfterViewInit,
} from '@angular/core';
import { QuestionMeta } from '../../app.model';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SmxUidService } from '../../services/smx-uid/uid.service';

@Component({
  selector: 'smx-comment-question',
  templateUrl: './comment-question.component.html',
  styleUrls: ['./comment-question.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SmxCommentQuestionComponent),
      multi: true,
    },
  ],
})
export class SmxCommentQuestionComponent implements OnInit, ControlValueAccessor, AfterViewInit {

  @Input('id') id: string;

  @Input() isFocussed: boolean = false;

  // input scroll height for survey rendering based on device height
  @Input('scrollHeight') scrollAreaHeight: number = 250;

  @Input() translations: any;

  @Input('questionMeta') set questionMeta(val: QuestionMeta) {
    this.headerTxt = val.messageText;
    this.required = val.messageSettings?.inputRequiredYN;
  }

  headerTxt: string;
  required: string;
  value: string;
  mandatory: boolean = false;

  @ViewChild('textArea', { read: ElementRef }) textArea: ElementRef;
  @ViewChild('input', { read: ElementRef }) input: ElementRef;

  @Input('idx') idx: number;

  @Input() type: 'COMMENT' | 'NUMERIC' = 'COMMENT';

  @Input() formErrors;

  @Output() autoScroll: EventEmitter<number> = new EventEmitter<number>();

  constructor(private uid: SmxUidService) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    setTimeout(() => this.autotextAreaGrow(), 100);
  }

  public respond(event: any) {
    this.value = event.target.value?.trim();
    this.onChange(this.value);
    this.autotextAreaGrow();
  }

  submitComment(event) {
    event?.stopPropagation();
    const valStr = this.value?.trim();
    this.mandatory = false;
    if (this.required === 'Y' && !valStr) {
      this.mandatory = true;
      this.focusTextbox();
      return;
    }
    if (this.type === 'NUMERIC' && isNaN(Number(this.value))) {
      this.focusTextbox();
      return;
    }
    if (this.formErrors) {
      return;
    }
    this.autoScroll.emit(this.idx);
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
        textArea.style.height = '35px';
        textArea.style.height = textArea.scrollHeight + 10 + 'px';
      } else {
        textArea.style['overflow-y'] = 'scroll';
      }
    }

    const delKey = event.key === 'Backspace' || event.key === 'Delete';
    if (delKey && !textArea.value) {
      textArea.style.overflow = 'hidden';
      textArea.style.height = '35px';
      textArea.style.height = textArea.scrollHeight + 'px';
    }
  }

  autotextAreaGrow() {
    const textArea = this.textArea?.nativeElement;
    if (textArea && this.type === 'COMMENT') {
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

  focusTextbox() {
    let inputEL = null;
    if (this.type === 'COMMENT') {
      inputEL = this.textArea.nativeElement;
    }
    if (this.type === 'NUMERIC') {
      inputEL = this.input.nativeElement;
    }
    inputEL.value = '';
    this.writeValue('');
    setTimeout(() => inputEL?.focus(), 0);
  }
}
