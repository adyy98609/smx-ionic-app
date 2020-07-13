export interface SelectOption {
  label?: string;
  value?: any;
  displayValue?: string;
  image?: string;
  icon?: string;
}

// export type QuestionType = "single" | "multi" | "comment";

export type QuestionType = "SINGLESELECT" | "COMMENT" | "MULTISELECT" | "RECOMMEND";

export type QuestionShape = "star" | "rectangle" | "heart" | "circle";

// export interface QuestionSettings {
//   questionType: QuestionType;
//   inputRequired?: "Y" | "N";
//   dataAttrCode?: string; 
//   shapeSelected?: QuestionShape;
//   shapeAnswerPosition?: "on" | "below" | "noLabel";
//   disableNAResponse?: "Y" | "N";
//   disableOtherOption?: "Y" | "N";
//   direction?: "vertical" | "horizontal";
//   lookUps?: Array<any>;
// }

export interface MessageSettings {
  lookUps?: Array<any>;
  dataAttrCode?: string;
  questionSettings: QuestionSettings;
}
interface QuestionTypeSettings {
  INPUT_REQUIRED_YN: "Y | N";
  [key: string]: any;
}
export interface QuestionSettings {
  questionType: QuestionType;
  questionIdfier: string;
  COMMENT?: QuestionTypeSettings;
  SINGLESELECT?: QuestionTypeSettings;
  MULTISELECT?: QuestionTypeSettings;
  RECOMMEND?: QuestionTypeSettings;
}

export interface QuestionMeta {
  messageText?: string;
  messageType?: string;
  messageSettings: any;
}
export interface UserDetails {
  hierarchyFields: ContactField[];
  contactFields: ContactField[];
  survey_id: string;
  contact_id: string;
}
export interface ContactField {
  displayName: string;
  externalName: string;
  dataType: string;
  mandatoryYN: string;
  allowedValues?: any[];
  userInput?: any;
  dateFormat?: string;
}

export type ContactInput = "STRING" | "LIST" | "DATE";

export type Direction = "next" | "prev";

export interface LandingMeta {
  landingPage: LandingPage;
  routes: PageRoute[];
  conversationProperties: ConversationProperties;
  themeSettings: { [key: string]: string };
}

export interface ConversationProperties {
  enterpriseIdfier: string;
  surveyIdfier: string;
}

export interface LandingPage {
  pageName: string;
  pageData: any;
}

export interface RouteDirection {
  route: NextRoute;
  dir: Direction;
}

export interface PageRoute {
  pageName: string;
  nextRoute: NextRoute | null;
  prevRoute: NextRoute | null;
}

export interface NextRoute {
  pageName: string;
  path: string;
}

export interface AnswerInboundMessage {
  userInput: string | Array<any> | number;
  userInputType: "STRING";
  messageSettings?: any;
}

export interface ResponseHeader {
  source: string;
  address: string;
  sessionId: string | number;
  enterpriseIdfier: string;
}
export interface ResponseQuestionSettings {
  questionIdfier: string;
  questionType: "SINGLESELECT" | "COMMENT" | "MULTISELECT";
  RADIO?: any;
  comment?: any;
}
export interface ResponseMessageSettings {
  lookups?: Array<any>;
  dataAtteCode: string;
  questionSettings?: ResponseQuestionSettings;
}
export interface ResponseMessage {
  messageText: string;
  messageType: string;
  messageSettings: any;
}
export interface ResponseSurveySettings {
  pageNumber?: number;
  totalPages?: number;
}
export interface ResponseMessageBody {
  message: ResponseMessage;
  surveySettings?: ResponseSurveySettings;
  nextMessagesSequence?: Array<ResponseMessage>;
}

export interface ResponseQuestionsData {
  header: ResponseHeader;
  messageBody: ResponseMessageBody;
}

export interface GridMessageSettings {
  contextLevelValues: ContextLevelValue[];
  contextLevelAttrCodes: ContextLevelAttrCode[];
  answers: GridAnswered[];
  gridNAEnabledYN: string;
  disableNAResponseYN?: string;
  showFacesEnabled: string;
  inputRequiredYN: string;
  horizontalResponsesYN: string;
  questionInteractiveProperty: 'TAP' | 'SLIDER';
  elementIdfier: string;
  questionIdfier: string;
  seqenceNumber: number;
  questionType: string;
  inputType: string;
}

export interface ContextLevelAttrCode {
  lookups: Lookup[];
  dataAttrCode: string;
  contextLevelDataAttrCode: string;
  contextLevelDataAttrCodeLabel: string;
}

export interface Lookup {
  displayValue?: string;
  lookupTypeCode?: string;
  lookupCodeValue?: string;
  value?: string;
}

export interface ContextLevelValue {
  contextLevelValueLabel: string;
  contextLevelValue: string;
}

export interface GridInboundSetting {
  dataAttrCode: string;
  contextLevelValueLabel: string;
  contextLevelValue: string;
  contextLevelDataAttrCode: string;
  contextLevelDataAttrCodeLabel: string;
  contextLevelNumber: number;
  lookupValueOtherYN: string;
}

export interface GridInboundMessage {
  userInput: string;
  userInputType: string;
  messageSettings: GridInboundSetting;
}

export interface GridAnswered {
  valueAnswer: string;
  answerSettings: AnswerSettings;
}

export interface AnswerSettings {
  lookupValueOtherYN: string;
  noAnswerYN: string;
  dataAttrCode: string;
  contextLevelNumber: number;
  contextLevelValue: string;
  contextLevelValueLabel: string;
  contextLevelDataAttrCode: string;
  contextLevelDataAttrCodeLabel: string;
  questionVersion: any;
  naInputYN: string;
}
