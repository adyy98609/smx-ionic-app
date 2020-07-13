import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'smx-progress',
  templateUrl: './smx-progress.component.html',
  styleUrls: ['./smx-progress.component.scss']
})
export class SmxProgressComponent implements OnInit {


  @Input() currentPage: number = 0;
  @Input() totalPage: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  getProgress(pgNo: number) {
    if (pgNo && this.totalPage) {
      return Math.round((pgNo - 1) * 100) / this.totalPage;
    } else {
      return 0;
    }
  }

}
