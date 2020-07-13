import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'smx-tile',
  templateUrl: './smx-tile.component.html',
  styleUrls: ['./smx-tile.component.scss']
})
export class SmxTileComponent implements OnInit {

  @Input('name') name;

  @Input('multi') multiselect: boolean = true;

  @Input('image') image: string;

  @Input() icon: string;

  @Input('value') value: any;

  @Input('disabled') disabled: boolean = false;

  @HostBinding('class.selected') @Input('selected') checked: boolean = false;

  type: 'radio' | 'checkbox' = 'checkbox';

  constructor() { }

  ngOnInit(): void {
    this.type = this.multiselect ? 'checkbox' : 'radio';
  }

  selectionChange(checked: boolean) {
    this.checked = checked;
  }

}
