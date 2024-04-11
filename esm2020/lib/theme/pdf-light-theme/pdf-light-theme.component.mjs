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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWxpZ2h0LXRoZW1lLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdGhlbWUvcGRmLWxpZ2h0LXRoZW1lL3BkZi1saWdodC10aGVtZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFxQixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUFFLGNBQWMsSUFBSSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQy9FLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxjQUFjLENBQUM7O0FBUW5DLE1BQU0sT0FBTyxzQkFBc0I7SUFDakMsWUFBb0IsUUFBbUIsRUFBNEIsUUFBYTtRQUE1RCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQTRCLGFBQVEsR0FBUixRQUFRLENBQUs7SUFBRyxDQUFDO0lBRTdFLFFBQVE7UUFDYixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVPLFdBQVc7UUFDakIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFxQixDQUFDO1FBQ3hFLE1BQU0sQ0FBQyxFQUFFLEdBQUcsZUFBZSxDQUFDO1FBQzVCLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRU0sV0FBVztRQUNoQixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQWdCLENBQUM7UUFDNUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7K0dBakJVLHNCQUFzQiwyREFDZ0IsUUFBUTt3R0FEOUMsc0JBQXNCO3VGQUF0QixzQkFBc0I7Y0FObEMsU0FBUzsyQkFDRSxpQkFBaUI7O3NCQU1lLE1BQU07dUJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBhZGRUcnVzdGVkSFRNTCBhcyBhZGRTYW5pdGl6ZWRIVE1MIH0gZnJvbSAnLi4vc2FuaXRpemVkLWNzcy1pbmplY3Rvcic7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICcuL2NvbG9ycy1jc3MnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwZGYtbGlnaHQtdGhlbWUnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGRmLWxpZ2h0LXRoZW1lLmNvbXBvbmVudC5odG1sJyxcbiAgLy8gc3R5bGVVcmxzOiBbJy4vY29sb3JzLnNjc3MnLCAnLi4vY29tbW9uL3ByaW50LnNjc3MnXSxcbiAgLy8gZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgUGRmTGlnaHRUaGVtZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnkpIHt9XG5cbiAgcHVibGljIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5qZWN0U3R5bGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5qZWN0U3R5bGUoKSB7XG4gICAgY29uc3Qgc3R5bGVzID0gdGhpcy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdTVFlMRScpIGFzIEhUTUxTdHlsZUVsZW1lbnQ7XG4gICAgc3R5bGVzLmlkID0gJ3BkZi10aGVtZS1jc3MnO1xuICAgIGFkZFNhbml0aXplZEhUTUwoc3R5bGVzLCBjc3MpO1xuICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5kb2N1bWVudC5oZWFkLCBzdHlsZXMpO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgIGNvbnN0IHN0eWxlcyA9IHRoaXMuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BkZi10aGVtZS1jc3MnKSBhcyBIVE1MRWxlbWVudDtcbiAgICBzdHlsZXM/LnBhcmVudEVsZW1lbnQ/LnJlbW92ZUNoaWxkKHN0eWxlcyk7XG4gIH1cbn1cbiJdfQ==