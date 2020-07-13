import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmxCheckboxComponent } from './smx-checkbox/smx-checkbox.component';
import { SmxFooterComponent } from './smx-footer/smx-footer.component';
import { SmxIconComponent } from './smx-icon/smx-icon.component';
import { SmxInputComponent } from './smx-input/smx-input.component';
import { SmxRadioGroupComponent } from './smx-radio/smx-radio-group.component';
import { SmxRadioComponent } from './smx-radio/smx-radio.component';
import { SmxSliderComponent } from './smx-slider/smx-slider.component';
import { SmxTileComponent } from './smx-tile/smx-tile.component';
import { SmxUidService } from '../services/smx-uid/uid.service';
import { SmxCommentQuestionComponent } from './comment-question/comment-question.component';
import { SafeHtmlPipe } from './../pipes/safe-html.pipe';
import { SmxRecommendQuestionComponent } from './recommend-question/recommend-question.component';
import { SmxSelectQuestionComponent } from './select-question/select-question.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SmxSelectComponent } from './select/select.component';
import { TextQuestionComponent } from './text-question/text-question.component';
import { SmxLoaderComponent } from './loader/loader.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        SmxCheckboxComponent,
        SmxCommentQuestionComponent,
        // SmxDatepickerComponent,
        SmxFooterComponent,
        // SmxGridQuestionComponent,
        SmxIconComponent,
        SmxInputComponent,
        // SmxLogoComponent,
        // SmxProgressComponent,
        SmxRadioGroupComponent,
        SmxRadioComponent,
        SmxRecommendQuestionComponent,
        SmxSelectComponent,
        SmxSelectQuestionComponent,
        // SmxSocialRecommendationComponent,
        SmxSliderComponent,
        SmxTileComponent,
        SafeHtmlPipe,
        // GridNAPipe,
        TextQuestionComponent,
        SmxLoaderComponent
    ],
    exports: [
        SmxCheckboxComponent,
        SmxCommentQuestionComponent,
        // SmxDatepickerComponent,
        SmxFooterComponent,
        // SmxGridQuestionComponent,
        SmxIconComponent,
        SmxInputComponent,
        // SmxLogoComponent,
        // SmxProgressComponent,
        SmxRadioGroupComponent,
        SmxRadioComponent,
        SmxRecommendQuestionComponent,
        SmxSelectComponent,
        SmxSelectQuestionComponent,
        // SmxSocialRecommendationComponent,
        SmxSliderComponent,
        SmxTileComponent,
        SafeHtmlPipe,
        // GridNAPipe,
        TextQuestionComponent,
        SmxLoaderComponent
    ],
    providers: [
        SmxUidService,
        // SmxAutoscrollService
    ]
})

export class SmxModule {}