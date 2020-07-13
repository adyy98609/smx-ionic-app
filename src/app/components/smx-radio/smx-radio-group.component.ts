import { Component, ContentChildren, forwardRef, QueryList, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SmxRadioComponent } from './smx-radio.component';
import { SmxUidService } from '../../services/smx-uid/uid.service';

@Component({
  selector: 'smx-radio-group',
  template: `<ng-content select="smx-radio"></ng-content>`,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SmxRadioGroupComponent),
      multi: true,
    },
  ]
})

export class SmxRadioGroupComponent implements ControlValueAccessor {

  @ContentChildren(SmxRadioComponent, { descendants: true }) smxRadio: QueryList<SmxRadioComponent>;

  /**
   * default selected value of radio group
   */
  @Input('selected') selected;

  /**
   * unique name for the radio group
   * HTML decides radio input part of groups by matching thier 'name' attribute
   */
  @Input('name') set name(val: string) {
    this._name = val || this.uid.generate('radio');
  }

  private _name: string;

  constructor(private uid: SmxUidService) {

  }

  ngOnInit() {
    if (!this._name) {
      throw new Error(`smx-radio-group component requires unique 'name' attribute`);
    }

  }

  /**
   * select radio input with the passed value and update selection
   * update only when view is initialized
   */
  ngAfterViewInit() {
    this._value = this.selected ? this.selected : null;
    this.updateChildSelection();
  }

  /**
   * subscribe to all radio inputs for any changes
   * and update the form control value
   */
  ngAfterContentInit() {
    if (!this.smxRadio || !this.smxRadio.length) {
      return;
    }

    // listen & update the form control value based on the current selection
    // TODO: Need to unsubscribe for all the selection  'use' merge operator
    this.smxRadio.map((radio: SmxRadioComponent) => {
      radio.valueChange.subscribe((value: any) => {
        this.writeValue(value);
      });
    });

    this.updateName();
  }


  protected _value: any;

  /**
   * getter to get the current value of radio group
   */
  get value() {
    return this._value;
  }

  /**
   * set the value of group
   */
  set value(val) {
    this._value = val;
    this.onChange(val);
    this.updateChildSelection();
  }

  updateName() {
    Promise.resolve().then(() => {
      this.smxRadio.forEach(radio => radio._setGroupName(this._name));
    });
  }

  /**
   * update and select the radio selection asynchronously based on value in model
   */
  private updateChildSelection() {
    // async to skip the current change detection
    Promise.resolve().then(() => {
      const radio = this.smxRadio.find(radio => radio.value == this.value);
      if (radio) {
        radio.checked = true;
      }
    });
  }

  onChange = (_) => { };

  onTouched = () => { };

  /**
   * update the component state with the form model value
   * @param val latest updated value based on model (after change detection)
   */
  writeValue(val: any): void {
    this.value = val;
  }

  /**
   * set form change method
   * @param fn form update function
   */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  /**
   * set touch state function
   * @param fn form state function
   */
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }


  setDisabledState?(isDisabled: boolean): void {
    throw new Error("Method not implemented.");
  }


}