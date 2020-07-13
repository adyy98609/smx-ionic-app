import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmxRecommendQuestionComponent } from './recommend-question.component';

describe('RecommendQuestionComponent', () => {
  let component: SmxRecommendQuestionComponent;
  let fixture: ComponentFixture<SmxRecommendQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SmxRecommendQuestionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmxRecommendQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call ngOnit', () => {
    const ngOnitSpyFn = spyOn(component, 'ngOnInit');
    component.ngOnInit();
    expect(ngOnitSpyFn).toHaveBeenCalled();
  });

  it('should set selected value', () => {
    const selectValue = '1';
    const onChangeSpyFn = spyOn(component, 'onChange');
    component.selectOption(selectValue);
    expect(component.value).toEqual(selectValue);
    expect(onChangeSpyFn).toHaveBeenCalled();
  });

  it('should set question meta data', () => {
    const questionMeta = {
      messageText: 'How likely is it that you would recommend QA10ANIKET55 to a friend or colleague?',
      messageType: 'NUMBER',
      messageSettings: {
        lookUps: [
          {
            displayValue: '0 - Not at all Satisfied',
            value: '0'
          },
          {
            displayValue: 'number one',
            value: '1'
          },
          {
            displayValue: '2 sachin tendulkar',
            value: '2'
          },
          {
            displayValue: '3 go corona',
            value: '3'
          }
        ],
        dataAttrCode: 'CX.635205.21077507522656.1',
        questionSettings: {
          questionIdfier: 'TEXT_635205_207',
          RADIO: {
            HORIZONTAL_RESPONSES_YN: 'Y',
            INPUT_REQUIRED_YN: 'Y'
          },
          questionType: 'RECOMMEND'
        }
      }

    }
    component.questionMeta = questionMeta;
    // expect(component.questionSettings).toEqual(questionMeta['messageSettings'].questionSettings);
    expect(component.direction).toEqual('horizontal');
    expect(component.headerTxt).toEqual(questionMeta.messageText);
    expect(component.shapeSelected).toEqual(undefined);
    expect(component.mandatory).toEqual(true);
  });

  it('should write value of selected option', () => {
    component.writeValue('1');
    expect(component.value).toEqual('1');
  })
});
