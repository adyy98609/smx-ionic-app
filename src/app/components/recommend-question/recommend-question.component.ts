import { Component, OnInit, forwardRef, Input, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { QuestionShape, SelectOption } from '../../app.model';

@Component({
  selector: 'smx-recommend-question',
  templateUrl: './recommend-question.component.html',
  styleUrls: ['./recommend-question.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SmxRecommendQuestionComponent),
      multi: true
    }
  ]
})
export class SmxRecommendQuestionComponent implements OnInit {

  constructor() { }

  @Input('id') id: string;

  @Input('idx') idx: number;

  @Input() isRequired: boolean = false;

  @Input() isFocussed: boolean = false;

  @Input() translations: any;

  @Output() autoScroll: EventEmitter<number> = new EventEmitter<number>();


  @Input('questionMeta') set questionMeta(question: any) {
    const questionType = question.messageSettings.questionType;
    this.messageSettings = question.messageSettings;
    this.direction = (this.messageSettings?.horizontalResponsesYN) === 'Y' ? 'horizontal' : 'vertical';
    this.headerTxt = question.messageText;
    this.shapeSelected = this.messageSettings?.shapeSelected;
    this.mandatory = this.messageSettings?.inputRequiredYN === 'Y';
    this.isNAOption = (this.messageSettings?.disableNAResponseYN) === 'N';
    this.showValue = this.messageSettings?.shapeAnswerPosition === 'on';
    this.options = question.messageSettings.lookups;
    this.interactionType = this.messageSettings?.questionInteractiveProperty || "tap";
    this.showFaceEmojis = this.messageSettings?.facesEnabled === 'Y';
  }
  @Input() value: any;
  headerTxt: string;
  name: string;
  interactionType: string;
  shapeSelected: QuestionShape;
  direction: 'vertical' | 'horizontal' = 'horizontal';
  options: SelectOption[];
  mandatory: boolean = false;
  isNAOption: boolean = false;
  messageSettings: any;
  showValue: boolean = false;
  disableScale: boolean;
  showFaceEmojis: boolean = false;

  ngOnInit(): void {
  }

  // Emit Selected option
  selectOption(value) {
    this.value = value.toString();
    this.onChange(this.value);
    if (this.value) {
      setTimeout(() => {
        this.autoScroll.emit(this.idx);
      }, 400);
    }

  }

  selectNA(checked, scroll = true) {
    this.value = checked ? 'NA' : null;
    this.disableScale = checked;
    this.onChange(this.value);
    if (checked && this.value && scroll) {
      setTimeout(() => {
        this.autoScroll.emit(this.idx);
      }, 400);
    }
  }


  onChange = (_) => { };

  onTouched = () => { };

  writeValue(val: any): void {
    this.value = val;
    this.onChange(val);
    if (val === 'NA') {
      this.selectNA(true, false);
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
