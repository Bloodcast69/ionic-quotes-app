import { forwardRef, Injectable, NgModule } from '@angular/core';

@NgModule({
    providers: [forwardRef(() => SettingsService)]
})

@Injectable()
export class SettingsService {

    private altBackground: boolean = false;

    setBackground(isAlt: boolean) {
        this.altBackground = isAlt;
    }

    isAltBackground() {
        return this.altBackground;
    }
}