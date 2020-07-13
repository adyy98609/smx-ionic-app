import { Component, forwardRef, Input, ViewChild, ElementRef, Output, EventEmitter, Renderer2, ChangeDetectorRef } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: 'smx-select',
  templateUrl: './select.component.html',
  styleUrls: ['select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SmxSelectComponent),
      multi: true
    }
  ]
})

export class SmxSelectComponent implements ControlValueAccessor {

  @ViewChild('search') searchInput: ElementRef;

  @Input() placeholder?: string;

  @Input() searchable?: boolean = true;

  @Input('attrMap') set selectKeys(keys: { label: string, value: string }) {
    this.labelKey = keys.label || 'label';
    this.valueKey = keys.value || 'value';
  };

  @Input('error') errorMsg: string;

  @Input('smxData') selectData: any[];

  @Input() set disabled(val: boolean) {
    this._disabled = val;
    this.setDisabledState(val);
  }

  @Input() width: string;

  @Input('initValue') set selectValue(val: number | string) {
    this._value = val;
    this.setInitialValue();
    console.log(val);
  }

  @Output() selectionChange: EventEmitter<any> = new EventEmitter<any>();

  public isOpen: boolean = false;
  public searchTxt: string = "";
  public selected: string | number;
  public fieldLabel: string;
  public labelKey: string = 'label';
  public valueKey: string = 'value';
  public dropdownClass: string;
  _disabled: boolean;
  private _value;

  constructor(private renderer: Renderer2,
    private changeRef: ChangeDetectorRef,
    private elm: ElementRef) {

  }

  ngOnInit() {
    this.setDisabledState(this._disabled);
    this.setInitialValue();
  }

  /**
   * set intial value of dropdown based on the passed initial value
   */
  setInitialValue() {
    if (this._value) {
      this.writeValue(this._value);
      return;
    }
    if (!(this.selectData && this.selectData.length)) {
      this.writeValue('');
      return;
    }
    if (!this.placeholder) {
      this.writeValue(this.selectData[0][this.valueKey]);
      return;
    }

    if (!this._value) {
      this.fieldLabel = null;
    }
  }

  /**
   * returns current selected value of widget
   */
  val(): number | string {
    return this.selected;
  }

  /**
   * on click of drodown item, select the item and close the dropdown
   * @param data currently selected option's data
   */
  selectOption(event, data) {
    this.selected = data[this.valueKey];
    this.fieldLabel = data[this.labelKey];
    this.close(event);
    // this.onChange(data[this.valueKey]);
    this.onChangeSelection(data[this.valueKey]);
  }

  /**
   * dismiss event propagation to the search container and set focus to search boc
   */
  openSearch(event?) {
    event.stopPropagation();
    this.searchInput.nativeElement.focus();
  }

  /**
   * close dropdown list container
   */
  public close(event?) {
    event.stopPropagation();
    this.isOpen = false;
  }

  /**
   * toggles drodown list container
   */
  toggle(event?) {
    event.stopPropagation();
    if (!this._disabled) {
      this.isOpen = !this.isOpen;
      this.onTouched();
    }
    if (this.isOpen) {
      this.changeRef.detectChanges();
      this.setPosition();
    }
  }

  /**
   * update select field label and with selected value
   * @param val value passed from model to form control
   */
  private setFieldLabel(val) {
    if (this.selectData) {
      let selectedObj = this.selectData.filter(elm => {
        return elm[this.valueKey] == val;
      })[0];
      if (selectedObj) {
        this.fieldLabel = selectedObj[this.labelKey];
        return;
      }
    }

    this.fieldLabel = this.placeholder;
  }

  /**
   * set the position (up, down) of drodown list depending upon the available space
   * function checks for the container, if its inside modal, it position in
   * that container
   */
  private setPosition() {
    this.dropdownClass = 'dropdown-container ';
    let hostElmTop: number = this.elm.nativeElement.getBoundingClientRect().top;
    let modalElm: HTMLElement = this.elm.nativeElement.classList.contains('.modal-container');
    let containerHeight = window.innerHeight

    //if inside modal component, reset containerHeight in reference to that
    if (modalElm) {
      containerHeight = modalElm.getBoundingClientRect().bottom;
    }

    let showDropup = hostElmTop + 200 >= containerHeight;
    this.dropdownClass += showDropup ? 'up' : 'down';
  }

  /**
   * placeholder for change trigger function
   */
  onChange = (_) => { }

  /**
   * emit selected value whenever user changes the select option
   */
  onChangeSelection = (data) => {
    this.onChange(data);
    this.selectionChange.emit(data);
  }

  /**
   * placholder for form state
   */
  onTouched = () => { }

  /**
   * write value to the model on value change
   * @param val updated value
   */
  writeValue(val: any): void {
    //this.onChange(val);
    //this.onChangeSelection(val);
    this.setFieldLabel(val)
    this.selected = val;
  }

  /**
   * register change function with callback
   * @param fn callback function for value changes
   */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  /**
   * register touch function
   * @param fn call back function for touch state updates
   */
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  /**
   *
   * @param isDisabled
   */
  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.renderer.addClass(this.elm.nativeElement, 'select-disabled');
    } else {
      this.renderer.removeClass(this.elm.nativeElement, 'select-disabled');
    }
    this.renderer.setProperty(this.elm.nativeElement, 'disabled', isDisabled);
  }

  /**
   * unsubscribe and destroy all opened events, observables and objects.
   */
  ngOnDestroy() {
    this.selectionChange.unsubscribe();
  }
}
