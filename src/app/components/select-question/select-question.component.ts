import {
  Component,
  OnInit,
  Input,
  forwardRef,
  ViewChildren,
  QueryList,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { SelectOption, QuestionMeta, QuestionShape } from '../../app.model';
import { SmxUidService } from '../../services/smx-uid/uid.service';
import { SmxCheckboxComponent } from '../smx-checkbox/smx-checkbox.component';
import { SmxTileComponent } from '../smx-tile/smx-tile.component';

@Component({
  selector: 'smx-select-question',
  templateUrl: './select-question.component.html',
  styleUrls: ['./select-question.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SmxSelectQuestionComponent),
      multi: true,
    },
  ],
})
export class SmxSelectQuestionComponent implements OnInit, ControlValueAccessor, AfterViewInit {

  @ViewChildren(SmxCheckboxComponent) smxCheckbox: QueryList<SmxCheckboxComponent>;

  @ViewChildren(SmxTileComponent) smxImageOptions: QueryList<SmxTileComponent>;

  @ViewChild('textArea', { read: ElementRef }) textArea: ElementRef;

  @Input('id') id: string;

  @Input('scrollHeight') scrollAreaHeight: number = 210;

  @Input('questionMeta') set questionMeta(val: QuestionMeta) {
    const messageSettings = val.messageSettings;
    const questionType: string =
      messageSettings?.questionType;
    // const questionSettings = val.messageSettings?.questionSettings[questionType];
    this.mandatory = messageSettings?.inputRequiredYN === 'Y';
    this.dir =
      messageSettings?.horizontalResponsesYN === 'Y'
        ? 'horizontal'
        : 'vertical';
    this.headerTxt = val.messageText;
    this.isMulti = questionType === 'MULTISELECT';
    this.isNAOption = messageSettings?.disableNAResponseYN === 'N';
    this.isOtherOption = messageSettings?.disableOtherResponseYN === 'N';
    this.shapeSelected = messageSettings?.shapeSelected;
    this.options = val.messageSettings?.lookups;
    this.imageOptions = this.options.some((option: SelectOption) => {
      return option?.image || option?.icon;
    });
    this.optionName = messageSettings.questionIdfier;
  }

  @Input('idx') idx: number;

  @Input() formErrors;

  @Input() isRequired: boolean = false;

  @Input() isFocussed: boolean = false;

  @Output() autoScroll: EventEmitter<number> = new EventEmitter<number>();

  @Input() translations: any;

  value: any;

  headerTxt: string;
  name: string;
  isMulti: boolean = false;
  isNAOption: boolean = false;
  isOtherOption: boolean = false;
  isOtherSelected: boolean = false;
  otherOptionText: string;
  shapeSelected: QuestionShape;
  dir: 'vertical' | 'horizontal' = 'vertical';
  options: SelectOption[];
  mandatory: boolean;
  isMandatory: boolean = false;
  otherNotAnswerd: boolean = false;
  imageOptions: boolean = false;
  optionName: string = '';

  constructor(private uid: SmxUidService) { }

  ngOnInit(): void {
    if (this.isNAOption) {
      this.removeDuplicateNA();
    }
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.autotextAreaGrow(), 100);
  }

  /**
   * Emit selected option
   * @param option selected option
   */
  selectOption(value) {
    if (this.isMulti) {
      this.value = [];
      this.smxCheckbox.forEach((item) => {
        if (item.checked) {
          if (item.value.toLowerCase() === 'other') {
            this.isOtherSelected = true;
          } else {
            this.value.push(item.value);
          }
        } else if (!item.checked && item.value.toLowerCase() === 'other') {
          this.isOtherSelected = false;
        }
      });
    } else {
      this.isMandatory = false;
      if (value.toLowerCase() === 'other') {
        this.isOtherSelected = true;
        this.value = '';
        return;
      }
      this.isOtherSelected = false;
      this.value = value;
    }

    if (this.isOtherSelected) {
      this.addOtherOptionValue();
    }
    this.onChange(this.value);
    if (!this.isMulti) {
      this.emitAuotoscrollEvent();
    }
  }

  /**
   * Emit selected options
   * @param value Selected Option
   */
  selectImageOption(value) {
    if (this.isMulti) {
      this.value = [];
      this.smxImageOptions.forEach((item) => {
        if (item.checked) {
          if (item.value.toLowerCase() === 'other') {
            this.isOtherSelected = true;
          } else {
            this.value.push(item.value);
          }
        } else if (!item.checked && item.value.toLowerCase() === 'other') {
          this.isOtherSelected = false;
        }
      });
    } else {
      if (value.toLowerCase() === 'other') {
        this.isOtherSelected = true;
        this.value = '';
        return;
      }
      this.isOtherSelected = false;
      this.value = value;
    }

    if (this.isOtherSelected) {
      this.addOtherOptionValue();
    }
    this.onChange(this.value);
    if (!this.isMulti) {
      this.emitAuotoscrollEvent();
    }

  }

  private addOtherOptionValue() {
    this.autotextAreaGrow();
    if (this.isMulti) {
      let otherValue = this.value.find((item) => item?.isOtherOption);
      if (otherValue) {
        otherValue.value = this.otherOptionText;
      } else {
        otherValue = { value: this.otherOptionText, isOtherOption: true };
        this.value.push(otherValue);
      }
      this.otherNotAnswerd = false;
      return;
    }
    this.value = { value: this.otherOptionText, isOtherOption: true };
  }

  removeDuplicateNA() {
    const lastElm = this.options[this.options.length - 1];
    if ((lastElm.displayValue).toLowerCase() === 'not applicable') {
      this.options.pop();
    }
  }

  autotextAreaGrow() {
    if (this.isOtherSelected) {
      const textArea = this.textArea?.nativeElement;
      if (textArea && this.otherOptionText) {
        if (textArea.scrollHeight < this.scrollAreaHeight) {
          textArea.style.overflow = 'hidden';
          textArea.style.height = '0px';
          textArea.style.height = textArea.scrollHeight + 'px';
        } else {
          textArea.style['overflow-y'] = 'scroll';
        }
      }
    }

  }

  submitMultipleResponse(event) {
    event?.stopPropagation();
    this.isMandatory = false;
    this.otherNotAnswerd = false;
    const textArea = this.textArea.nativeElement;
    // Validation for Mandatory Question
    if (this.mandatory) {
      // Validation for Multi select Question
      if (this.isMulti && this.value?.length) {
        if (this.value.length) {
          this.isMandatory = false;
          this.otherAnswred();
        } else if (this.isOtherSelected && !this.otherOptionText) {
          this.otherNotAnswerd = true;
        }
      } else if (!this.isMulti) {
        // Validation for Single select Question
        if ((!this.value && this.isOtherSelected) || this.value?.isOtherOption && !this.value?.value?.trim()) {
          textArea.value = '';
          this.focusOtherTextbox(textArea);
          this.isMandatory = true;
          this.otherNotAnswerd = true;
        }
      } else {
        this.isMandatory = true;
        this.otherNotAnswerd = this.isOtherSelected;
      }
    } else {
      if (this.value?.length) {
        this.isMandatory = false;
        this.otherAnswred();
      } else if (this.isOtherSelected && !this.otherOptionText) {
        this.otherNotAnswerd = true;
      } else {
        this.otherNotAnswerd = false;
      }
      if ((!this.value && this.isOtherSelected) || this.value?.isOtherOption && !this.value?.value?.trim()) {
        textArea.value = '';
        this.focusOtherTextbox(textArea);
        this.otherNotAnswerd = true;
      }
    }
    if (!this.isMandatory && !this.otherNotAnswerd) {
      this.emitAuotoscrollEvent();
    }

  }

  otherAnswred() {
    if (this.isOtherSelected) {
      let otherNotAns = true;
      const textArea = this.textArea.nativeElement;
      this.value?.forEach(opt => {
        if (this.otherOptionText && opt?.isOtherOption && opt?.value?.trim()) {
          otherNotAns = false;
        } else if (opt?.isOtherOption && opt?.value && !opt.value.trim()) {
          textArea.value = '';
          this.focusOtherTextbox(textArea);
        }
      });
      this.otherNotAnswerd = otherNotAns;
    }
  }

  selectNA(isChecked) {
    this.value = isChecked ? 'NA' : null;
    if (this.smxCheckbox.length) {
      this.smxCheckbox.forEach((item) => {
        if (item.value !== 'NA') {
          item.checked = false;
          if (this.isMulti) {
            item.disabled = isChecked;
          }
        }
      });
    } else if (this.smxImageOptions.length) {
      this.smxImageOptions.forEach((item) => {
        if (item.value !== 'NA') {
          item.checked = false;
          if (this.isMulti) {
            item.disabled = isChecked;
          }
        }
      });
    }
    this.isOtherSelected = false;
    this.otherOptionText = '';
    this.onChange(this.value);
    if (isChecked) {
      this.emitAuotoscrollEvent();
    }
  }

  onOtherOptionValueChange(event) {
    this.addOtherOptionValue();
    this.onChange(this.value);
  }

  emitAuotoscrollEvent() {
    this.autoScroll.emit(this.idx);
  }
  onChange = (_) => { };

  onTouched = () => { };

  writeValue(val: any): void {
    this.value = val;
    this.isOtherOptionSelected();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  stripHtmlTags(str) {
    return str.replace(/(<([^>]+)>)/gi, '');
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
    }
  }

  isOptionSelected(v) {
    return Array.isArray(this.value) && this.value.includes(v) ? true : false;
  }
  isOtherOptionSelected() {
    if (!this.value) { return false; }
    let otherOption;
    if (Array.isArray(this.value)) {
      otherOption = this.value.find(v => v?.isOtherOption);
    } else {
      otherOption = this.value;
    }
    this.otherOptionText = otherOption?.value;
    this.isOtherSelected = otherOption?.isOtherOption;
    this.isOtherSelected = !!this.otherOptionText;
  }

  focusOtherTextbox(txtArea) {
    this.otherNotAnswerd = false;
    setTimeout(() => txtArea?.focus(), 0);
  }
}
