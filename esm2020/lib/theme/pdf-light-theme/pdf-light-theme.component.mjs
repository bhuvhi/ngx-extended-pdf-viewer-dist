import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';
import { addTrustedHTML as addSanitizedHTML } from '../sanitized-css-injector';
import { css } from './colors-css';
import * as i0 from "@angular/core";
export class PdfLightThemeComponent {
    constructor(renderer, document) {
        this.renderer = renderer;
        this.document = document;
    }
    ngOnInit() {
        this.injectStyle();
    }
    injectStyle() {
        const styles = this.document.createElement('STYLE');
        styles.id = 'pdf-theme-css';
        addSanitizedHTML(styles, css);
        this.renderer.appendChild(this.document.head, styles);
    }
    ngOnDestroy() {
        const styles = this.document.getElementById('pdf-theme-css');
        styles?.parentElement?.removeChild(styles);
    }
}
/** @nocollapse */ PdfLightThemeComponent.ɵfac = function PdfLightThemeComponent_Factory(t) { return new (t || PdfLightThemeComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(DOCUMENT)); };
/** @nocollapse */ PdfLightThemeComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfLightThemeComponent, selectors: [["pdf-light-theme"]], decls: 0, vars: 0, template: function PdfLightThemeComponent_Template(rf, ctx) { }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfLightThemeComponent, [{
        type: Component,
        args: [{ selector: 'pdf-light-theme', template: "" }]
    }], function () { return [{ type: i0.Renderer2 }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWxpZ2h0LXRoZW1lLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdGhlbWUvcGRmLWxpZ2h0LXRoZW1lL3BkZi1saWdodC10aGVtZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFxQixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUFFLGNBQWMsSUFBSSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQy9FLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxjQUFjLENBQUM7O0FBUW5DLE1BQU0sT0FBTyxzQkFBc0I7SUFDakMsWUFBb0IsUUFBbUIsRUFBNEIsUUFBYTtRQUE1RCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQTRCLGFBQVEsR0FBUixRQUFRLENBQUs7SUFBRyxDQUFDO0lBRTdFLFFBQVE7UUFDYixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVPLFdBQVc7UUFDakIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFxQixDQUFDO1FBQ3hFLE1BQU0sQ0FBQyxFQUFFLEdBQUcsZUFBZSxDQUFDO1FBQzVCLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRU0sV0FBVztRQUNoQixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQWdCLENBQUM7UUFDNUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7K0dBakJVLHNCQUFzQiwyREFDZ0IsUUFBUTt3R0FEOUMsc0JBQXNCO3VGQUF0QixzQkFBc0I7Y0FObEMsU0FBUzsyQkFDRSxpQkFBaUI7O3NCQU1lLE1BQU07dUJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIE9uRGVzdHJveSwgT25Jbml0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgYWRkVHJ1c3RlZEhUTUwgYXMgYWRkU2FuaXRpemVkSFRNTCB9IGZyb20gJy4uL3Nhbml0aXplZC1jc3MtaW5qZWN0b3InO1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tICcuL2NvbG9ycy1jc3MnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwZGYtbGlnaHQtdGhlbWUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wZGYtbGlnaHQtdGhlbWUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIC8vIHN0eWxlVXJsczogWycuL2NvbG9ycy5zY3NzJywgJy4uL2NvbW1vbi9wcmludC5zY3NzJ10sXHJcbiAgLy8gZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBkZkxpZ2h0VGhlbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnkpIHt9XHJcblxyXG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5qZWN0U3R5bGUoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5qZWN0U3R5bGUoKSB7XHJcbiAgICBjb25zdCBzdHlsZXMgPSB0aGlzLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1NUWUxFJykgYXMgSFRNTFN0eWxlRWxlbWVudDtcclxuICAgIHN0eWxlcy5pZCA9ICdwZGYtdGhlbWUtY3NzJztcclxuICAgIGFkZFNhbml0aXplZEhUTUwoc3R5bGVzLCBjc3MpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmRvY3VtZW50LmhlYWQsIHN0eWxlcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICBjb25zdCBzdHlsZXMgPSB0aGlzLmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwZGYtdGhlbWUtY3NzJykgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBzdHlsZXM/LnBhcmVudEVsZW1lbnQ/LnJlbW92ZUNoaWxkKHN0eWxlcyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==