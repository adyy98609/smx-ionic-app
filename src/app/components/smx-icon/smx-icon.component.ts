import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'smx-icon',
  templateUrl: './smx-icon.component.html',
  styleUrls: ['./smx-icon.component.scss']
})
export class SmxIconComponent implements OnInit {

  @Input() name: string;

  @Input() type: 'fill' | 'outline';

  @Input() fillRule: string;

  @Input() viewBox: string;

  get iconPath() {
    return `../../../../assets/icon-map.svg#${name}`;
  }

  constructor() { }

  ngOnInit(): void {

  }

}
