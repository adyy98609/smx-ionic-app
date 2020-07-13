import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmxCommentQuestionComponent } from './comment-question.component';
import { SmxUidService } from '../../services/smx-uid/uid.service';
import { QuestionMeta } from 'smx-surveyui/src/app/app.model';

describe('SmxCommentQuestionComponent', () => {
  let component: SmxCommentQuestionComponent;
  let componentService: SmxUidService;
  let fixture: ComponentFixture<SmxCommentQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SmxCommentQuestionComponent],
      providers: [SmxUidService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmxCommentQuestionComponent);
    componentService = fixture.debugElement.injector.get(SmxUidService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.ngOnInit).toBeDefined();
  });

  it('should call ngOnit', () => {
    const ngOnitSpyFn = spyOn(component, 'ngOnInit');
    component.ngOnInit();
    expect(ngOnitSpyFn).toHaveBeenCalled();
  });

  it('should set value from text', () => {
    const inputText = { target: { value: 'test comment' } };
    const onChangeSpyFn = spyOn(component, 'onChange');
    component.respond(inputText);
    expect(onChangeSpyFn).toHaveBeenCalled();
    expect(component.value).toEqual(inputText.target.value);
  });

  it('should write value of selected option', () => {
    component.writeValue('test comment');
    expect(component.value).toEqual('test comment');
  });

  it('should set question meta data', () => {
    const questionMeta: QuestionMeta = {
      messageText:
        'Please provide the reason for the satisfaction score you just gave.',
      messageType: 'STRING',
      messageSettings: {
        dataAttrCode: 'CX.633657.22816009245316.1',
        inputRequired: 'Y',
        questionType: 'comment'
      }
    };
    component.questionMeta = questionMeta;
    expect(component.headerTxt).toEqual(questionMeta.messageText);
    expect(component.required).toEqual(questionMeta.messageSettings.inputRequired);
  });
});
