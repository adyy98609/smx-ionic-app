import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { QuestionMeta } from '../../app.model';

@Component({
  selector: 'smx-text-question',
  templateUrl: './text-question.component.html',
  styleUrls: ['./text-question.component.scss']
})
export class TextQuestionComponent implements OnInit {

  headerTxt: string;

  @Input() idx: number;

  type: 'TEXT' | 'SUBMIT' = 'TEXT';

  @Input('questionMeta') set questionMeta(val: QuestionMeta) {
    this.headerTxt = val.messageText;
    this.type = val.messageSettings?.questionType;
  }

  @Input() translations: any;
  @Output() autoScroll: EventEmitter<number> = new EventEmitter<number>();

  btnText: string;

  constructor() { }

  ngOnInit(): void { }

  emitAutoscrollEvent() {
    if (this.type === 'TEXT' || this.type === 'SUBMIT') {
      this.autoScroll.emit(this.idx);
    }
  }
}
