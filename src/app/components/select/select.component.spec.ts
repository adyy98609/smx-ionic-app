import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { SmxSelectComponent } from './select.component';
import { CommonModule } from '@angular/common';
import { DebugElement } from '@angular/core';
//import { FilterPipe } from '../../pipes/filter.pipe';
import { By } from '@angular/platform-browser';


describe('SmxSelectComponent', () => {
    let component: SmxSelectComponent;
    //let filterPipe: FilterPipe;
    let fixture: ComponentFixture<SmxSelectComponent>;
    let formBuilder: FormBuilder = new FormBuilder();
    let widgetEl: DebugElement;

    let dummyData = [
        {
            label: 'Angular',
            value: 'ng',
            id: 'ng1'
        },
        {
            label: 'Javascript',
            value: 'js',
            id: 'es6'
        }
    ];


    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule
            ],
            declarations: [
                SmxSelectComponent,
                //FilterPipe
            ],
            providers: [
                {
                    provide: FormBuilder, useValue: formBuilder
                }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SmxSelectComponent);
        component = fixture.componentInstance;
        component.selectData = dummyData;
        //filterPipe = new FilterPipe();
        widgetEl = fixture.debugElement;
        fixture.detectChanges();
    });

    it('should create and init component with dependency', () => {
        expect(component).toBeTruthy();
        //expect(filterPipe).toBeTruthy();
    });

    it('should set initial value without init value', () => {
        spyOn(component, "setInitialValue").and.callThrough();
        component.ngOnInit();
        expect(component.setInitialValue).toHaveBeenCalled();
        expect(component.val()).toBe('ng');
    });

    it('should set initial with init value', () => {
        spyOn(component, 'setInitialValue').and.callThrough();
        component.selectValue = 'js';
        component.ngOnInit();
        expect(component.setInitialValue).toHaveBeenCalled();
        expect(component.val()).toBe('js');
    });

    it('should disabled the field on passing dissabled attribute', () => {
        spyOn(component, 'setDisabledState').and.callThrough();
        component.disabled = true;
        component.ngOnInit();
        expect(component.setDisabledState).toHaveBeenCalled();
        fixture.detectChanges();
        expect(widgetEl.nativeElement.disabled).toBe(true)
    });

    it('should toggle select dropdown list on clicks', () => {
        spyOn(component, "toggle").and.callThrough();
        expect(component.isOpen).toBe(false);
        let selectEl:DebugElement = widgetEl.query(By.css('.select-container'));
        selectEl.nativeElement.dispatchEvent(new Event('click'));
        fixture.detectChanges();
        expect(component.toggle).toHaveBeenCalled();
        expect(component.isOpen).toBe(true);
    });
});
