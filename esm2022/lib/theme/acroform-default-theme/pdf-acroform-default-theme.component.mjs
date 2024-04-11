import { DOCUMENT } from '@angular/common';
import { Component, CSP_NONCE, Inject, Optional, Renderer2 } from '@angular/core';
import { PdfCspPolicyService } from '../../pdf-csp-policy.service';
import { css } from './pdf-acroform-default-colors-css';
import * as i0 from "@angular/core";
import * as i1 from "../../pdf-csp-policy.service";
export class PdfAcroformDefaultThemeComponent {
    renderer;
    document;
    pdfCspPolicyService;
    nonce;
    constructor(renderer, document, pdfCspPolicyService, nonce) {
        this.renderer = renderer;
        this.document = document;
        this.pdfCspPolicyService = pdfCspPolicyService;
        this.nonce = nonce;
    }
    ngOnInit() {
        this.injectStyle();
    }
    injectStyle() {
        const styles = this.document.createElement('STYLE');
        styles.id = 'pdf-acroform-css';
        if (this.nonce) {
            styles.nonce = this.nonce;
        }
        this.pdfCspPolicyService.addTrustedCSS(styles, css);
        this.renderer.appendChild(this.document.head, styles);
    }
    ngOnDestroy() {
        const styles = this.document.getElementById('pdf-acroform-css');
        styles?.parentElement?.removeChild(styles);
    }
    /** @nocollapse */ static ɵfac = function PdfAcroformDefaultThemeComponent_Factory(t) { return new (t || PdfAcroformDefaultThemeComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(DOCUMENT), i0.ɵɵdirectiveInject(i1.PdfCspPolicyService), i0.ɵɵdirectiveInject(CSP_NONCE, 8)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfAcroformDefaultThemeComponent, selectors: [["pdf-acroform-default-theme"]], decls: 0, vars: 0, template: function PdfAcroformDefaultThemeComponent_Template(rf, ctx) { }, encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfAcroformDefaultThemeComponent, [{
        type: Component,
        args: [{ selector: 'pdf-acroform-default-theme', template: '' }]
    }], () => [{ type: i0.Renderer2 }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: i1.PdfCspPolicyService }, { type: undefined, decorators: [{
                type: Inject,
                args: [CSP_NONCE]
            }, {
                type: Optional
            }] }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PdfAcroformDefaultThemeComponent, { className: "PdfAcroformDefaultThemeComponent", filePath: "lib\\theme\\acroform-default-theme\\pdf-acroform-default-theme.component.ts", lineNumber: 17 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWFjcm9mb3JtLWRlZmF1bHQtdGhlbWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi90aGVtZS9hY3JvZm9ybS1kZWZhdWx0LXRoZW1lL3BkZi1hY3JvZm9ybS1kZWZhdWx0LXRoZW1lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFxQixRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7O0FBYXhELE1BQU0sT0FBTyxnQ0FBZ0M7SUFFakM7SUFDa0I7SUFDbEI7SUFDK0I7SUFKekMsWUFDVSxRQUFtQixFQUNELFFBQWEsRUFDL0IsbUJBQXdDLEVBQ1QsS0FBcUI7UUFIcEQsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNELGFBQVEsR0FBUixRQUFRLENBQUs7UUFDL0Isd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUNULFVBQUssR0FBTCxLQUFLLENBQWdCO0lBQzNELENBQUM7SUFFRyxRQUFRO1FBQ2IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFTyxXQUFXO1FBQ2pCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBcUIsQ0FBQztRQUN4RSxNQUFNLENBQUMsRUFBRSxHQUFHLGtCQUFrQixDQUFDO1FBRS9CLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUMzQjtRQUVELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFTSxXQUFXO1FBQ2hCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFnQixDQUFDO1FBQy9FLE1BQU0sRUFBRSxhQUFhLEVBQUUsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdDLENBQUM7NkdBM0JVLGdDQUFnQywyREFHakMsUUFBUSxzRUFFUixTQUFTOzRGQUxSLGdDQUFnQzs7aUZBQWhDLGdDQUFnQztjQVg1QyxTQUFTOzJCQUNFLDRCQUE0QixZQUM1QixFQUFFOztzQkFZVCxNQUFNO3VCQUFDLFFBQVE7O3NCQUVmLE1BQU07dUJBQUMsU0FBUzs7c0JBQUcsUUFBUTs7a0ZBTG5CLGdDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBDU1BfTk9OQ0UsIEluamVjdCwgT25EZXN0cm95LCBPbkluaXQsIE9wdGlvbmFsLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGRmQ3NwUG9saWN5U2VydmljZSB9IGZyb20gJy4uLy4uL3BkZi1jc3AtcG9saWN5LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tICcuL3BkZi1hY3JvZm9ybS1kZWZhdWx0LWNvbG9ycy1jc3MnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwZGYtYWNyb2Zvcm0tZGVmYXVsdC10aGVtZScsXHJcbiAgdGVtcGxhdGU6ICcnLFxyXG4gIHN0eWxlVXJsczogW1xyXG4gICAgLy8gICAgJy4vcGRmLWFjcm9mb3JtLWRlZmF1bHQtY29sb3JzLnNjc3MnLFxyXG4gICAgLy8gICAgJy4uL2NvbW1vbi9hbm5vdGF0aW9uLWxheWVyLWJ1aWxkZXIuc2NzcycsXHJcbiAgICAvLyAgICAnLi4vY29tbW9uL3hmYV9sYXllcl9idWlsZGVyLnNjc3MnLFxyXG4gICAgLy8gICAgJy4uL2NvbW1vbi9hbm5vdGF0aW9uX2VkaXRvcl9sYXllcl9idWlsZGVyLmNzcycsXHJcbiAgXSxcclxuICAvLyAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBkZkFjcm9mb3JtRGVmYXVsdFRoZW1lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxyXG4gICAgcHJpdmF0ZSBwZGZDc3BQb2xpY3lTZXJ2aWNlOiBQZGZDc3BQb2xpY3lTZXJ2aWNlLFxyXG4gICAgQEluamVjdChDU1BfTk9OQ0UpIEBPcHRpb25hbCgpIHByaXZhdGUgbm9uY2U/OiBzdHJpbmcgfCBudWxsXHJcbiAgKSB7fVxyXG5cclxuICBwdWJsaWMgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluamVjdFN0eWxlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluamVjdFN0eWxlKCkge1xyXG4gICAgY29uc3Qgc3R5bGVzID0gdGhpcy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdTVFlMRScpIGFzIEhUTUxTdHlsZUVsZW1lbnQ7XHJcbiAgICBzdHlsZXMuaWQgPSAncGRmLWFjcm9mb3JtLWNzcyc7XHJcblxyXG4gICAgaWYgKHRoaXMubm9uY2UpIHtcclxuICAgICAgc3R5bGVzLm5vbmNlID0gdGhpcy5ub25jZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnBkZkNzcFBvbGljeVNlcnZpY2UuYWRkVHJ1c3RlZENTUyhzdHlsZXMsIGNzcyk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuZG9jdW1lbnQuaGVhZCwgc3R5bGVzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcclxuICAgIGNvbnN0IHN0eWxlcyA9IHRoaXMuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BkZi1hY3JvZm9ybS1jc3MnKSBhcyBIVE1MRWxlbWVudDtcclxuICAgIHN0eWxlcz8ucGFyZW50RWxlbWVudD8ucmVtb3ZlQ2hpbGQoc3R5bGVzKTtcclxuICB9XHJcbn1cclxuIl19