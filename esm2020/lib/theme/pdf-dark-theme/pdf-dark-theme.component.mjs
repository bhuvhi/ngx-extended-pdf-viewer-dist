import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';
import { addTrustedHTML } from '../sanitized-css-injector';
import { css } from './colors-css';
import * as i0 from "@angular/core";
export class PdfDarkThemeComponent {
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
        addTrustedHTML(styles, css);
        this.renderer.appendChild(this.document.head, styles);
    }
    ngOnDestroy() {
        const styles = this.document.getElementById('pdf-theme-css');
        styles?.parentElement?.removeChild(styles);
    }
}
/** @nocollapse */ PdfDarkThemeComponent.ɵfac = function PdfDarkThemeComponent_Factory(t) { return new (t || PdfDarkThemeComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(DOCUMENT)); };
/** @nocollapse */ PdfDarkThemeComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfDarkThemeComponent, selectors: [["pdf-dark-theme"]], decls: 0, vars: 0, template: function PdfDarkThemeComponent_Template(rf, ctx) { }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfDarkThemeComponent, [{
        type: Component,
        args: [{ selector: 'pdf-dark-theme', template: "" }]
    }], function () { return [{ type: i0.Renderer2 }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWRhcmstdGhlbWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi90aGVtZS9wZGYtZGFyay10aGVtZS9wZGYtZGFyay10aGVtZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFxQixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxjQUFjLENBQUM7O0FBUW5DLE1BQU0sT0FBTyxxQkFBcUI7SUFDaEMsWUFBb0IsUUFBbUIsRUFBNEIsUUFBYTtRQUE1RCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQTRCLGFBQVEsR0FBUixRQUFRLENBQUs7SUFBRyxDQUFDO0lBRTdFLFFBQVE7UUFDYixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVPLFdBQVc7UUFDakIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFxQixDQUFDO1FBQ3hFLE1BQU0sQ0FBQyxFQUFFLEdBQUcsZUFBZSxDQUFDO1FBQzVCLGNBQWMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVNLFdBQVc7UUFDaEIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFnQixDQUFDO1FBQzVFLE1BQU0sRUFBRSxhQUFhLEVBQUUsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdDLENBQUM7OzZHQWpCVSxxQkFBcUIsMkRBQ2lCLFFBQVE7dUdBRDlDLHFCQUFxQjt1RkFBckIscUJBQXFCO2NBTmpDLFNBQVM7MkJBQ0UsZ0JBQWdCOztzQkFNZ0IsTUFBTTt1QkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgT25EZXN0cm95LCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBhZGRUcnVzdGVkSFRNTCB9IGZyb20gJy4uL3Nhbml0aXplZC1jc3MtaW5qZWN0b3InO1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tICcuL2NvbG9ycy1jc3MnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwZGYtZGFyay10aGVtZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BkZi1kYXJrLXRoZW1lLmNvbXBvbmVudC5odG1sJyxcclxuICAvLyBzdHlsZVVybHM6IFsnLi9jb2xvcnMuc2NzcycsICcuLi9jb21tb24vcHJpbnQuc2NzcyddLFxyXG4gIC8vIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQZGZEYXJrVGhlbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnkpIHt9XHJcblxyXG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5qZWN0U3R5bGUoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5qZWN0U3R5bGUoKSB7XHJcbiAgICBjb25zdCBzdHlsZXMgPSB0aGlzLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1NUWUxFJykgYXMgSFRNTFN0eWxlRWxlbWVudDtcclxuICAgIHN0eWxlcy5pZCA9ICdwZGYtdGhlbWUtY3NzJztcclxuICAgIGFkZFRydXN0ZWRIVE1MKHN0eWxlcywgY3NzKTtcclxuICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5kb2N1bWVudC5oZWFkLCBzdHlsZXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nT25EZXN0cm95KCkge1xyXG4gICAgY29uc3Qgc3R5bGVzID0gdGhpcy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGRmLXRoZW1lLWNzcycpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgc3R5bGVzPy5wYXJlbnRFbGVtZW50Py5yZW1vdmVDaGlsZChzdHlsZXMpO1xyXG4gIH1cclxufVxyXG4iXX0=