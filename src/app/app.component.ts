import { Component, ElementRef } from '@angular/core';
import { TimeService } from './time.service';
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
}
