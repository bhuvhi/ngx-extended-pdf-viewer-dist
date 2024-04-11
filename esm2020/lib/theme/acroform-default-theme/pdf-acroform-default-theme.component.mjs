import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';
import { addTrustedHTML } from '../sanitized-css-injector';
import { css } from './pdf-acroform-default-colors-css';
import * as i0 from "@angular/core";
export class PdfAcroformDefaultThemeComponent {
    constructor(renderer, document) {
        this.renderer = renderer;
        this.document = document;
    }
    ngOnInit() {
        this.injectStyle();
    }
    injectStyle() {
        const styles = this.document.createElement('STYLE');
        styles.id = 'pdf-acroform-css';
        addTrustedHTML(styles, css);
        this.renderer.appendChild(this.document.head, styles);
    }
    ngOnDestroy() {
        const styles = this.document.getElementById('pdf-acroform-css');
        styles?.parentElement?.removeChild(styles);
    }
}
/** @nocollapse */ PdfAcroformDefaultThemeComponent.ɵfac = function PdfAcroformDefaultThemeComponent_Factory(t) { return new (t || PdfAcroformDefaultThemeComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(DOCUMENT)); };
/** @nocollapse */ PdfAcroformDefaultThemeComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfAcroformDefaultThemeComponent, selectors: [["pdf-acroform-default-theme"]], decls: 0, vars: 0, template: function PdfAcroformDefaultThemeComponent_Template(rf, ctx) { }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfAcroformDefaultThemeComponent, [{
        type: Component,
        args: [{ selector: 'pdf-acroform-default-theme', template: '', styles: [] }]
    }], function () { return [{ type: i0.Renderer2 }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWFjcm9mb3JtLWRlZmF1bHQtdGhlbWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi90aGVtZS9hY3JvZm9ybS1kZWZhdWx0LXRoZW1lL3BkZi1hY3JvZm9ybS1kZWZhdWx0LXRoZW1lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQXFCLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOztBQWF4RCxNQUFNLE9BQU8sZ0NBQWdDO0lBQzNDLFlBQW9CLFFBQW1CLEVBQTRCLFFBQWE7UUFBNUQsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUE0QixhQUFRLEdBQVIsUUFBUSxDQUFLO0lBQUcsQ0FBQztJQUU3RSxRQUFRO1FBQ2IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFTyxXQUFXO1FBQ2pCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBcUIsQ0FBQztRQUN4RSxNQUFNLENBQUMsRUFBRSxHQUFHLGtCQUFrQixDQUFDO1FBQy9CLGNBQWMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVNLFdBQVc7UUFDaEIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQWdCLENBQUM7UUFDL0UsTUFBTSxFQUFFLGFBQWEsRUFBRSxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7bUlBakJVLGdDQUFnQywyREFDTSxRQUFRO2tIQUQ5QyxnQ0FBZ0M7dUZBQWhDLGdDQUFnQztjQVg1QyxTQUFTOzJCQUNFLDRCQUE0QixZQUM1QixFQUFFOztzQkFVOEIsTUFBTTt1QkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgT25EZXN0cm95LCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBhZGRUcnVzdGVkSFRNTCB9IGZyb20gJy4uL3Nhbml0aXplZC1jc3MtaW5qZWN0b3InO1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tICcuL3BkZi1hY3JvZm9ybS1kZWZhdWx0LWNvbG9ycy1jc3MnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwZGYtYWNyb2Zvcm0tZGVmYXVsdC10aGVtZScsXHJcbiAgdGVtcGxhdGU6ICcnLFxyXG4gIHN0eWxlVXJsczogW1xyXG4gICAgLy8gICAgJy4vcGRmLWFjcm9mb3JtLWRlZmF1bHQtY29sb3JzLnNjc3MnLFxyXG4gICAgLy8gICAgJy4uL2NvbW1vbi9hbm5vdGF0aW9uLWxheWVyLWJ1aWxkZXIuc2NzcycsXHJcbiAgICAvLyAgICAnLi4vY29tbW9uL3hmYV9sYXllcl9idWlsZGVyLnNjc3MnLFxyXG4gICAgLy8gICAgJy4uL2NvbW1vbi9hbm5vdGF0aW9uX2VkaXRvcl9sYXllcl9idWlsZGVyLmNzcycsXHJcbiAgXSxcclxuICAvLyAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBkZkFjcm9mb3JtRGVmYXVsdFRoZW1lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55KSB7fVxyXG5cclxuICBwdWJsaWMgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluamVjdFN0eWxlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluamVjdFN0eWxlKCkge1xyXG4gICAgY29uc3Qgc3R5bGVzID0gdGhpcy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdTVFlMRScpIGFzIEhUTUxTdHlsZUVsZW1lbnQ7XHJcbiAgICBzdHlsZXMuaWQgPSAncGRmLWFjcm9mb3JtLWNzcyc7XHJcbiAgICBhZGRUcnVzdGVkSFRNTChzdHlsZXMsIGNzcyk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuZG9jdW1lbnQuaGVhZCwgc3R5bGVzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcclxuICAgIGNvbnN0IHN0eWxlcyA9IHRoaXMuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BkZi1hY3JvZm9ybS1jc3MnKSBhcyBIVE1MRWxlbWVudDtcclxuICAgIHN0eWxlcz8ucGFyZW50RWxlbWVudD8ucmVtb3ZlQ2hpbGQoc3R5bGVzKTtcclxuICB9XHJcbn1cclxuIl19