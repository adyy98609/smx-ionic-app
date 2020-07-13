import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PageRoute } from '../../app.model';

@Component({
  selector: 'smx-footer',
  templateUrl: './smx-footer.component.html',
  styleUrls: ['./smx-footer.component.scss']
})
export class SmxFooterComponent implements OnInit {


  @Input('routes') pageRoutes: PageRoute;

  @Input() poweredByText: string = '';

  @Input() poweredBySMXLogoYN: 'Y' | 'N' = 'Y';

  @Output() pageChange: EventEmitter<any> = new EventEmitter();

  showFooter: boolean = false;

  constructor() { }

  ngOnInit(): void {
    console.log(this.pageRoutes);
  }

  next() {
    this.pageChange.emit({ route: this.pageRoutes.nextRoute, dir: 'next' });
  }

  previous() {
    this.pageChange.emit({ route: this.pageRoutes.prevRoute, dir: 'prev' });
  }



}
