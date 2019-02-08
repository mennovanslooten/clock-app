import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalClockDigitComponent } from './digital-clock-digit.component';

describe('DigitalClockDigitComponent', () => {
    let component: DigitalClockDigitComponent;
    let fixture: ComponentFixture<DigitalClockDigitComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DigitalClockDigitComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DigitalClockDigitComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
