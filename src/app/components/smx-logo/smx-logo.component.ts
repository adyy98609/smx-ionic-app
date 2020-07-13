import { Component, OnInit, Input, Output, EventEmitter, HostBinding } from "@angular/core";

@Component({
  selector: "smx-logo",
  templateUrl: "./smx-logo.component.html",
  styleUrls: ["./smx-logo.component.scss"]
})
export class SmxLogoComponent implements OnInit {
  @Input() url: string;
  @Input() idx: number = 0;
  @HostBinding('class.no-image') noImage: boolean;
  @Output() logoStatusChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }
  ngOnInit(): void { }
  statusChanged(event) {
    if (event === 'error') {
      this.noImage = true;
    }
    this.logoStatusChange.emit({ status: event === 'loaded' });
  }

}
