import { Component } from '@angular/core';

@Component({
  selector: 'app-create-tab',
  templateUrl: 'create-tab.page.html',
  styleUrls: ['create-tab.page.scss']
})
export class CreateTab {
  constructor() {}

isCreate=true;
translations1={
    'FBK.POWERERED': '| Powered by NICE SATMETRIX The Net Promoter Company',
    'INFO.FBK.SURVEY_LINK.2.MESSAGE': 'Click Here',
    'FBK.SOCIAL_REVIEW_SITE_MSG_HEADER': 'Share your experience with our community on our social pages',
    'FBK.LABEL.OR': 'or',
    'FBK.SURVEY.MAXCHAR.LABEL.MESSAGE': 'Remaining characters:',
    'ERROR.WS_QUERY_RESPONSE_NULL.5.MESSAGE': 'No Record Found',
    'FBK.GRID.SELECT.PARAMETER': 'Select a Parameter',
    'FBK.BTN.SUBMIT': 'Submit',
    'ERROR.FBK.MANDATORY_REQUIRED.0.MESSAGE': 'Please provide a value for the mandatory field(s)',
    'FBK.SELECT.OTHER.NAME': 'Other (Please specify)',
    'ERROR.FBK.UNSUBSCRIBEURL_REPEAT.0.NAME': 'You are already unsubscribed from receiving emails.',
    'ERROR.FBK.PARTICIAPTION_COMPLETED.0.MESSAGE': 'Our records indicate that you have already completed this survey. In order to preserve the integrity of the survey results, respondents are allowed to complete the survey only once.',
    'POPUP_SURVEY_USER_DETAILS_PADE_HEADER': 'Help us know you better',
    'ERROR.FBK.GRID_RESPONSE_REQUIRED.0.MESSAGE': 'Please provide a response to all the questions below.',
    'ERROR.FBK.UNSUBSCRIBEURL_NOT_FOUND.0.NAME': "Requested item doesn't exist. If you copied the address into the address field of your browser, make sure you copied the entire web address, including the characters following the ? character.",
    'FBK.BTN.DONOT.SHOW.AGAIN': "Don't Show Again",
    'ERROR.FBK.MANUAL.SURVEY.INVALID_PARAMS': 'Internal Error while trying Manual Survey Entry.',
    'INFO.FBK.UNSUBSCRIBEURL.0.CONFIRMATION.MESSAGE': 'To unsubscribe from future survey invitations, click Confirm.',
    'INFO.FBK.UNSUBSCRIBEURL.0.CONFIRMATION.HEADING': 'Unsubscribe?',
    'FBK.SELECT.NOTAPPLICABLE.NAME': 'Not Applicable',
    'WARNING.FBK.MANUALSURVEY.PARALLEL.EXECUTION': 'Invited participant has started attending the survey.Please co ordinate with him.Only one person is advised to attend survey at a time.',
    'FBK.BTN.START': 'Start',
    'FBK.SHARE': 'SHARE',
    'FBK_PAGE_LOADER': 'loading...',
    'ERROR.FBK.MANUAL.SURVEY.OVERRIDEN_BY_USER': 'Another user has terminated your Manual Survey Entry Session.',
    'FBK.SLIDER.HELP.TEXT': 'Move the slider or click on the rating scale',
    'FBK.BTN.CLOSE': 'Close',
    'ERROR.FBK.UNSUBSCRIBEURL.0.REPEAT.MESSAGE': 'We have already unsubscribed you from receiving survey invitation emails.',
    'FBK.SELECT.OTHER.DESC': 'Other',
    'fbk.sumbitpage.delay.message': 'Please wait a moment while we save your responses. Thank you!',
    'INFO.FBK.UNSUBSCRIBEURL.0.SUCCESS.MESSAGE': 'You have been unsubscribed from future survey invitations. We apologize for the inconvenience.',
    'FBK.SURVEY.POWEREDBY.MESSAGE': 'Powered by',
    'ERROR.FBK.OFFLINE.0.MESSAGE': 'We are sorry, but the survey is not available at this time. Please try again later.',
    'FBK.SELECT.NOTAPPLICABLE.SHORT.NAME': 'NA',
    'INFO.FBK.SURVEY_UNSUBSCRIBE_LINK.2.MESSAGE': 'Unsubscribe',
    'ERROR.FBK.MANUAL.SURVEY.OVERRIDEN_BY_CONTACT': 'Participant has terminated your Manual Survey Entry Session.',
    'ERROR.FBK_UNSUBSCRIBEURL.0.FAILURE.HEADING': 'We Are Having Trouble',
    'ERROR.FBK.PROVIDERIDFIER.NOT.FOUND': 'Invalid Contact Record ID.',
    'FBK.BROWSER.SUPPORT.MESSAGE': 'Your Browser is not supported. We value your feedback but you might have trouble taking your survey in this browser.We recommend you to copy the survey URL to the most recent version of',
    'INFO.FBK.UNSUBSCRIBEURL.0.CONFIRMATION.BTNLABEL': 'Confirm',
    'ERROR.FBK.TOKEN_EXPIRED.0.MESSAGE': 'We are sorry, but the survey is no longer available.',
    'FBK.SHARECOMMENTS': 'Share Your Comments',
    'FBK.COMMENT_HELP': '*Click to edit your comment',
    'ERROR.FBK.EMAIL_PROVIDERIDFIER_INVLAID.0.MESSAGE': 'Please provide an Email or a valid Contact Record ID.',
    'FBK.DONOTPOSTCOMMENTS': 'Please enter a comment before sharing',
    'FBK.SELECT.NEW.OPTION.PREFIX': 'Option',
    'ERROR.FBK.OTHER_RESPONSE_REQUIRED.0.MESSAGE': "Please provide a response to the 'Other' option.",
    'ERROR.FBK.MULTISELECT_MIN_SELECT.0.MESSAGE': 'Please select at least {0} response(s).',
    'ERROR.FBK.LIMIT_REACHED.0.MESSAGE': 'Sorry, this survey is closed.',
    'FBK.EMPTY_SHARE': 'Enter your comments here',
    'ERROR.FBK.NUMBER_REQUIRED.0.MESSAGE': 'Please enter a number.',
    'ERROR.FBK.SYSTEM.0.MESSAGE': 'We are sorry, but the system experienced unexpected error. Please try again later.',
    'ERROR.WS_UPDATE_FAILED.5.MESSAGE': 'Update Failed, may be because of the record does not exist or has not been updated',
    'FBK.GRID.NOTAPPLICABLE': 'Not Applicable',
    'FBK.DROPDOWN.CLICKHERE': 'Click Here',
    'ERROR.FBK.MULTISELECT_MAX_SELECT.0.MESSAGE': "You can't select more than {0} response(s).",
    'fbk.sumbitpage.message': 'Do you wish to submit the Survey.',
    'FBK.SELECT.OTHER.SHORT.NAME': 'OT',
    'INFO.FBK.UNSUBSCRIBEURL.0.NAME': 'You are successfully unsubscribed.',
    'ERROR.FBK.RESPONSE_REQUIRED.0.MESSAGE': 'Please provide a response to the question below.',
    'ERROR.FBK.TOKEN_INVALID.0.MESSAGE': 'The web address you used to access this survey does not work. If you copied the address into the address field of your browser, make sure you copied the entire web address, including the characters following the ? character.',
    'ERROR.FBK.UNKNOWN': 'Invalid request.If you copied the link from the email, please make sure you copied it fully.',
    'ERROR.FBK.MANUAL.SURVEY.TOO_LATE': 'Your Manual Survey Entry Session is expired.Please login to NPX and try.',
    'POPUP_SURVEY_WINDOW_TITLE': 'Pop-up Survey',
    'ERROR.FBK.DATACOLLECTION.NOT_OPEN': 'The survey is not available yet. Your feedback is important to us. Please try again at a later date.  We are sorry for the inconvenience.',
    'ERROR.FBK.RESPONSE.MAXLENGTH.MESSAGE': 'The text limit is 4000 characters.  Please enter less text.',
    'ERROR.FBK.CLOSED.0.MESSAGE': 'We are sorry, but the survey is no longer available.',
    'INFO.FBK.UNSUBSCRIBEURL.0.ADVISORY': 'You are successfully unsubscribed.',
    'INFO.FBK.UNSUBSCRIBEURL.0.MESSAGE': 'You are successfully unsubscribed.',
    'FBK.QUESTION.REQUIRED.MARKER': '*',
    'POPUP.URL.USER.DETAILS.ERROR.MSG': 'Something Unexpected Happened.',
    'POPUP.SURVEY.CONTACT.INFO.TEXT': 'Please provide your contact information',
    'ERROR.FBK.UNSUBSCRIBEURL_REPEAT.0.ADVISORY': 'You are already unsubscribed from receiving emails.',
    'OF': 'of',
    'ERROR.FBK.UNSUBSCRIBEURL.0.REPEAT.HEADING': 'Unsubscribe Confirmation',
    'POPUP_SURVEY_FIRSTNAME_POPUPSURVEY': 'Anonymous',
    'FBK.BTN.NEXT': 'Next',
    'ERROR.FBK.UNSUBSCRIBEURL_REPEAT.0.MESSAGE': 'You are already unsubscribed from receiving emails.',
    'FBK.BTN.PREVIOUS': 'Previous',
    'FBK.SOCIAL_SHARE_MSG_HEADER': 'Share your experience with your contacts on your social pages',
    'ERROR.FBK.INVALID_RESPONSE': 'Invalid response.',
    'ERROR.FBK.EMAIL_INVLAID.0.MESSAGE': 'Please provide a valid Email Id.',
    'FBK.LOOKUPVALUE.NOTAPPLICABLE': 'Not Applicable',
    'FBK.COUPON_MSG': 'Your friends and business associates will receive...',
    'INFO.FBK.UNSUBSCRIBEURL.0.SUCCESS.HEADING': 'Successfully Unsubscribed!',
    'POPUP_SURVEY_LASTNAME_ANONYMOUS': 'Popup Survey',
    'ERROR.FBK.MANUAL.SURVEY.UNKNOWN.ERROR': 'Internal Error in Manual Survey Entry.',
    'FBK.SHARE.COMMENT.ANONYMOUSLY.ONLINE': 'I allow you to share my comment anonymously online',
    'FBK.BTN.BACK': 'Back',
    'FBK.QUESTION.REQUIRED.TEXT': '* Required.',
    'ERROR.FBK.NUMBER_REQUIRED_WITHIN_LMT.0.MESSAGE': 'Please enter a number between {0} and {1}.',
    'ERROR.FBK_UNSUBSCRIBEURL.0.FAILURE.MESSAGE': "We're very sorry, we are having trouble unsubscribing you because the system can't find your survey invitation record. Please forward your invitation to our survey vendor at support@satmetrix.com and we'll take care of this right away for you. We apologize for the inconvenience.",
    'fbk.submitpage.message': "Please click on the 'Submit' button below to send us your feedback.",
    'FBK.RECOMMENDATION': 'My recommendation for',
    'ERROR.FBK.PROVIDER_CLOSED.0.MESSAGE': 'We are closing this survey now. We apologize for any inconvenience.',
    'FBK.BTN.OK': 'OK',
    'FBK.PAGE.TITLE': 'Feedback'
}
addQuestionOptions = [
  {
    "displayValue": "Much more better than previous one",
    "icon": "icon-happy",
    "value": "1"
  },
  {
    "displayValue": "Slightly better than previous one",
    "icon": "icon-smile",
    "value": "2"
  },
  {
    "displayValue": "Made no difference",
    "icon": "icon-neutral",
    "value": "3"
  },
  {
    "displayValue": "Slightly less better than previous one",
    "icon": "icon-sad",
    "value": "4"
  },
  {
    "displayValue": "Much less better than previous one",
    "icon": "icon-angry",
    "value": "5"
  },
  {
    "displayValue": "Not Applicable",
    "value": "6"
  }
];
translations: any = {
  requiredLabel: '* Required.',
  naOptionLabel: 'FBK.SELECT.NOTAPPLICABLE.NAME',
  otherOptionLabel: 'FBK.SELECT.OTHER.NAME',
  emptyOtherLabel: 'ERROR.FBK.OTHER_RESPONSE_REQUIRED.0.MESSAGE',
  otherOptionPlaceHolder: 'Please type your answer here',
  otherOptionRequiredMessage: 'ERROR.FBK.OTHER_RESPONSE_REQUIRED.0.MESSAGE',
  numberRequiredMessage: 'ERROR.FBK.NUMBER_REQUIRED.0.MESSAGE',
  numberRangeMessage: 'ERROR.FBK.NUMBER_REQUIRED_WITHIN_LMT.0.MESSAGE',
  okButtonLabel: 'Ok',
  closeButtonLabel: 'Close',
  submitButtonLabel: 'Submit',
  lineBreakMessage: 'Please press Enter to break line',
  multipleOptionsMessage : 'INFO.FBK.MANY_OPTION_SELECTION.MESSAGE',
  commentAnswerPlaceholder : 'Please type your answer here',
  businessValueLabel : 'INFO.FBK.BUSINESS_VALUE'
};
questions = {
  comment : {
    
      "messageText": "Please let us know your device name, make and browser version details.",
      "messageType": "INPUT_REQUIRED",
      "messageSettings": {
        "lookups": [],
        "dataAttrCode": "CX.632501.23191870936214.1",
        "questionIdfier": "TEXT_632501_255",
        "inputRequiredYN": "N",
        "style": "LARGE",
        "inputType": "FILE",
        "questionType": "COMMENT",
        "elementIdfier": "TEXT_632501_255",
        "seqenceNumber": 4
      
    }
  },
  tap: {
    
      "messageText": "You can interact with this question by tapping on it, Please rate how do you feel about the interaction and look and feel of this question.",
      "messageType": "INPUT_REQUIRED",
      "messageSettings": {
        "lookups": [
          {
            "displayValue": "1",
            "lookupCodeValue": "1",
            "value": "1"
          },
          {
            "displayValue": "2",
            "lookupCodeValue": "2",
            "value": "2"
          },
          {
            "displayValue": "3",
            "lookupCodeValue": "3",
            "value": "3"
          },
          {
            "displayValue": "4",
            "lookupCodeValue": "4",
            "value": "4"
          },
          {
            "displayValue": "5",
            "lookupCodeValue": "5",
            "value": "5"
          },
          {
            "displayValue": "6",
            "lookupCodeValue": "6",
            "value": "6"
          },
          {
            "displayValue": "7",
            "lookupCodeValue": "7",
            "value": "7"
          }
        ],
        "showFacesEnabled": "Y",
        "inputRequiredYN": "Y",
        "shapeSelected": "heart",
        "facesEnabled": "Y",
        "shapeAnswerPosition": "on",
        "disableNAResponseYN": "Y",
        "dataAttrCode": "CX.632501.23187574981920.1",
        "questionIdfier": "TEXT_632501_250",
        "inputType": "TEXT",
        "horizontalResponsesYN": "Y",
        "questionType": "SATISFACTION",
        "questionInteractiveProperty": "TAP",
        "elementIdfier": "TEXT_632501_250",
        "seqenceNumber": 9
      }
    },
    slider: {
    
      "messageText": "You can interact with this question by tapping on it, Please rate how do you feel about the interaction and look and feel of this question.",
      "messageType": "INPUT_REQUIRED",
      "messageSettings": {
        "lookups": [
          {
            "displayValue": "1",
            "lookupCodeValue": "1",
            "value": "1"
          },
          {
            "displayValue": "2",
            "lookupCodeValue": "2",
            "value": "2"
          },
          {
            "displayValue": "3",
            "lookupCodeValue": "3",
            "value": "3"
          },
          {
            "displayValue": "4",
            "lookupCodeValue": "4",
            "value": "4"
          },
          {
            "displayValue": "5",
            "lookupCodeValue": "5",
            "value": "5"
          },
          {
            "displayValue": "6",
            "lookupCodeValue": "6",
            "value": "6"
          },
          {
            "displayValue": "7",
            "lookupCodeValue": "7",
            "value": "7"
          }
        ],
        "showFacesEnabled": "Y",
        "inputRequiredYN": "Y",
        "shapeSelected": "heart",
        "facesEnabled": "Y",
        "shapeAnswerPosition": "on",
        "disableNAResponseYN": "Y",
        "dataAttrCode": "CX.632501.23187574981920.1",
        "questionIdfier": "TEXT_632501_250",
        "inputType": "TEXT",
        "horizontalResponsesYN": "Y",
        "questionType": "SATISFACTION",
        "questionInteractiveProperty": "SLIDER",
        "elementIdfier": "TEXT_632501_250",
        "seqenceNumber": 9
      }
    }  
}
addQuestion(){
  this.isCreate = false;
}
}