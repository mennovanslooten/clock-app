const fullscreenEnabled: boolean = !!(
    document.fullscreenEnabled ||
    document.webkitFullscreenEnabled ||
    document.mozFullScreenEnabled ||
    document.msFullscreenEnabled
);

function isFullscreen(): boolean {
    const result = !!(
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement
    );

    return result;
}

function exitFullscreen(): void {
    const methods = [
        'exitFullscreen',
        'webkitExitFullscreen',
        'mozCancelFullScreen',
        'msExitFullscreen',
    ];
    const method: string = methods.find(name => !!document[name]);
    if (method) {
        document[method]();
    }
}

function requestFullscreen(element: HTMLElement): void {
    const methods = [
        'requestFullscreen',
        'webkitRequestFullscreen',
        'mozRequestFullScreen',
        'msRequestFullscreen',
    ];
    const method: string = methods.find(name => !!element[name]);
    if (method) {
        element[method]();
    }
}

export function toggleFullscreen(element: HTMLElement): void {
    if (!fullscreenEnabled) {
        return;
    }

    if (isFullscreen()) {
        exitFullscreen();
    } else {
        requestFullscreen(element);
    }
}
