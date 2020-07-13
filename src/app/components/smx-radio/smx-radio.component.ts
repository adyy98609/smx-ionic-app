import { Component, OnInit, Input, Output, EventEmitter, Renderer2, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'smx-radio',
  templateUrl: './smx-radio.component.html',
  styleUrls: ['./smx-radio.component.scss']
})
export class SmxRadioComponent implements OnInit {

  @Input('name') name: string;

  @ViewChild('input', { read: ElementRef, static: false }) input: ElementRef<HTMLInputElement>;

  checked: boolean = false;

  /**
   * disabled state for radio input 
   */
  @Input('disabaled') disabled: boolean = false;

  /**
   * radio input value
   */
  @Input('value') value;

  /**
   * radio input change event emitter
   */
  @Output() valueChange: EventEmitter<any> = new EventEmitter();

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {

  }

  /**
   * trigger event when change in the selection
   */
  selectionChange(value) {
    this.value = value;
    this.valueChange.emit(this.value);
  }

  _setGroupName(name) {
    // this.name = name;
    this.renderer.setProperty(this.input.nativeElement, 'name', name);
  }

}
