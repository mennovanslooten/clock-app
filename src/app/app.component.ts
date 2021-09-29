import { Component, ElementRef, OnInit } from '@angular/core';
import { TimeService } from './time.service';
import { HslColor, HexColor, hexToHsl } from './utils/colors';
import { toggleFullscreen } from './utils/fullscreen';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [TimeService],
})
export class AppComponent implements OnInit {
    rootElement: HTMLElement;
    hexColor: HexColor = '#FFCC99';

    constructor(public element: ElementRef) {
        this.rootElement = element.nativeElement;
    }

    ngOnInit() {
        this.restoreColor();
    }

    toggleFullScreen() {
        toggleFullscreen(this.rootElement);
    }

    colorInput($event: Event) {
        const hexColor = ($event.target as HTMLInputElement).value;
        this.setColor(hexColor);
        this.storeColor(hexColor);
    }

    setColor(hexColor: HexColor) {
        this.hexColor = hexColor;
        const { h, s, l }: HslColor = hexToHsl(hexColor);
        this.rootElement.style.setProperty('--color-h', h.toString());
        this.rootElement.style.setProperty('--color-s', s);
        this.rootElement.style.setProperty('--color-l', l);
    }

    storeColor(hexColor: HexColor) {
        window.localStorage.setItem('angular-clock-color', hexColor);
    }

    restoreColor() {
        const storedHexColor =
            window.localStorage.getItem('angular-clock-color') || this.hexColor;

        this.setColor(storedHexColor);
    }
}
