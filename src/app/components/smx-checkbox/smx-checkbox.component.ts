import { Component, OnInit, Input, forwardRef, ElementRef, ViewChild, Renderer2, HostBinding } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'smx-checkbox',
  templateUrl: './smx-checkbox.component.html',
  styleUrls: ['./smx-checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SmxCheckboxComponent),
      multi: true,
    },
  ]
})
export class SmxCheckboxComponent implements OnInit, ControlValueAccessor {

  @ViewChild('input', { read: ElementRef }) input: ElementRef<HTMLElement>;

  /**
   * initial value of checkbox component
   */
  @Input('value') value;

  @Input() disabled: boolean;

  @HostBinding('class.selected') @Input('checked') checked: boolean = false;


  isDisabled: boolean;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {

  }

  /**
   * trigger changes on user selection
   * @param val selected value
   */
  selectionChange(val) {
    this.checked = val;
    this.onChange(val);
  }

  onChange = (_) => { };

  onTouched = () => { };

  /**
   * update component with the propagated value by form
   * @param val propagated value by form
   */
  writeValue(val: any): void {
    this.value = val;
  }

  /**
   * set formcontrol change call back method
   * @param fn value change callback function
   */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  /**
   * set formcontrol state change call back method
   * @param fn state change callback function
   */
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  /**
   * trigger disabled state changes here
   * @param isDisabled disabled state
   */
  setDisabledState?(isDisabled: boolean): void {
    this.renderer.setProperty(this.input.nativeElement, 'disabled', isDisabled)
  }

}
