import { Component, Input, forwardRef, ElementRef, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'smx-input',
  templateUrl: './smx-input.component.html',
  styleUrls: ['./smx-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SmxInputComponent),
      multi: true
    }
  ]
})
export class SmxInputComponent implements ControlValueAccessor {

  @ViewChild('input', { read: ElementRef }) input: ElementRef<HTMLInputElement>;

  @Input('type') type: 'email' | 'number' | 'text' | 'hidden' = 'text';

  @Input('value') value: string | number;

  @Input('label') label: string;

  @Input('required') required: boolean = false;

  @Input('hasErrors') hasErrors: boolean = false;

  disabled: boolean = false;

  constructor() { }


  ngOnInit(): void {
    // this.setDisabledState(this.disabled);
  }



  inputChange(val) {
    this.value = val;
    this.onChange(this.value)
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

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

}