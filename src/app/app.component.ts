import { Component, ElementRef } from '@angular/core';
import { TimeService } from './time.service';
import { RgbColor, HslColor, rgbToHsl } from './utils/colors';
import { toggleFullscreen } from './utils/fullscreen';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [TimeService],
})
export class AppComponent {
    rootElement: HTMLElement;
    constructor(public element: ElementRef) {
        this.rootElement = element.nativeElement;
    }

    fullScreen() {
        toggleFullscreen(this.rootElement);
    }

    colorInput($event: Event) {
        const color = ($event.target as HTMLInputElement).value;
        const r = parseInt(color.substr(1, 2), 16);
        const g = parseInt(color.substr(3, 2), 16);
        const b = parseInt(color.substr(5, 2), 16);
        console.log({ r, g, b });
        this.setColor({ r, g, b });
    }

    setColor(rgbColor: RgbColor) {
        const { h, s, l }: HslColor = rgbToHsl(rgbColor);
        this.rootElement.style.setProperty('--color-h', h.toString());
        this.rootElement.style.setProperty('--color-s', s);
        this.rootElement.style.setProperty('--color-l', l);
    }
}
