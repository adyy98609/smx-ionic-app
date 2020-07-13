import { Component, OnInit, Renderer2, Input, forwardRef, ElementRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectOption } from '../../app.model';
import { EMOJIS_SCALE } from './emojis-scale-mapping';


@Component({
  selector: 'smx-slider',
  templateUrl: './smx-slider.component.html',
  styleUrls: ['./smx-slider.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SmxSliderComponent),
      multi: true,
    },
  ]
})
export class SmxSliderComponent implements OnInit, ControlValueAccessor {

  @Input() type: 'TAP' | 'SLIDER' = 'SLIDER';

  @Input() shape: 'circle' | 'rectangle' | 'star' | 'heart' = 'circle';

  @Input() showValue: boolean = true;

  @Input() showFaceEmojis: boolean = false;

  @Input('scale') set scale(val: SelectOption[]) {
    this.scaleList = val;
    const v = this._value;
    if (v === 'NA' || v == null || v === undefined) {
      this.resetValue();
    }
  }

  private _value;
  emojisValue: any;
  privateValue;
  scaleList;

  // @Input() value;

  @Input('value') set value(v) {
    this._value = v && v !== 'NA' ? parseInt(v, 10) : v;
    if (v === 'NA' || v == null || v === undefined) {
      this.resetValue();
    } else {
      this.privateValue = v;
    }
  }

  get value(): any {
    return this._value;
  }

  @Input() disabled: boolean;

  constructor(private renderer: Renderer2, private elm: ElementRef) { }

  minValue: number;
  maxValue: number;
  direction: 'rtl' | 'ltr' = 'ltr';

  ngOnInit(): void {
    this.minValue = Math.min.apply(null, this.scaleList.map((item) => {
      return +item.value;
    }));
    this.maxValue = this.minValue ? this.scaleList.length : (this.scaleList.length - 1);
    this.getDirection();
    this.setEmojis();
  }

  /**
   * reset slider position depending upon even/odd scale
   */
  resetValue() {
    if (this.scaleList) {
      const len = this.scaleList.length;
      // as per UX suggestions, all scales will start from left
      // const idx = len % 2 ? Math.floor(len / 2) : 0;
      this.privateValue = this.scaleList[0].value;
    }
  }

  private getDirection() {
    const len = this.scaleList.length;
    const isAscending = +this.scaleList[0].value < +this.scaleList[len - 1].value;
    this.direction = isAscending ? 'ltr' : 'rtl';
  }

  select(idx: number, event) {
    // event.preventDefault();
    if (this.disabled) {
      return;
    }
    const prevValue = this.privateValue;
    this.value = +idx;
    this.privateValue = idx;
    this.onChange(this.value);

    /* onChange propagates for form events only if something changes in form,
    * hence if event type is click or same selected option is selected, manually triggering
    * change event to propagate the form events
    */
    if (event.type === 'click' || prevValue === this.privateValue) {
      this.elm.nativeElement.dispatchEvent(new CustomEvent('change', { bubbles: true }));
    }
  }

  /**
   * Method to set emojis based on
   * different scale questions
   */
  setEmojis() {
    const scaleValue = 'scale' + this.minValue + '-' + this.maxValue;
    this.emojisValue = EMOJIS_SCALE[scaleValue];
  }

  onChange = (_) => { };

  onTouched = () => { };

  writeValue(val: any): void {
    this.value = val;
    this.onChange(val);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // this.renderer.setProperty(this.input.nativeElement, 'disabled', isDisabled);
  }


}
