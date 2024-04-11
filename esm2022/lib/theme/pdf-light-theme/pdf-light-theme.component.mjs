import { DOCUMENT } from '@angular/common';
import { Component, CSP_NONCE, Inject, Optional, Renderer2 } from '@angular/core';
import { PdfCspPolicyService } from '../../pdf-csp-policy.service';
import { css } from './colors-css';
import * as i0 from "@angular/core";
import * as i1 from "../../pdf-csp-policy.service";
export class PdfLightThemeComponent {
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
        styles.id = 'pdf-theme-css';
        if (this.nonce) {
            styles.nonce = this.nonce;
        }
        this.pdfCspPolicyService.addTrustedCSS(styles, css);
        this.renderer.appendChild(this.document.head, styles);
    }
    ngOnDestroy() {
        const styles = this.document.getElementById('pdf-theme-css');
        styles?.parentElement?.removeChild(styles);
    }
    /** @nocollapse */ static ɵfac = function PdfLightThemeComponent_Factory(t) { return new (t || PdfLightThemeComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(DOCUMENT), i0.ɵɵdirectiveInject(i1.PdfCspPolicyService), i0.ɵɵdirectiveInject(CSP_NONCE, 8)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfLightThemeComponent, selectors: [["pdf-light-theme"]], decls: 0, vars: 0, template: function PdfLightThemeComponent_Template(rf, ctx) { }, encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfLightThemeComponent, [{
        type: Component,
        args: [{ selector: 'pdf-light-theme', template: "" }]
    }], () => [{ type: i0.Renderer2 }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: i1.PdfCspPolicyService }, { type: undefined, decorators: [{
                type: Inject,
                args: [CSP_NONCE]
            }, {
                type: Optional
            }] }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PdfLightThemeComponent, { className: "PdfLightThemeComponent", filePath: "lib\\theme\\pdf-light-theme\\pdf-light-theme.component.ts", lineNumber: 12 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWxpZ2h0LXRoZW1lLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdGhlbWUvcGRmLWxpZ2h0LXRoZW1lL3BkZi1saWdodC10aGVtZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBcUIsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7QUFRbkMsTUFBTSxPQUFPLHNCQUFzQjtJQUV2QjtJQUNrQjtJQUNsQjtJQUMrQjtJQUp6QyxZQUNVLFFBQW1CLEVBQ0QsUUFBYSxFQUMvQixtQkFBd0MsRUFDVCxLQUFxQjtRQUhwRCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ0QsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUMvQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ1QsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7SUFDM0QsQ0FBQztJQUVHLFFBQVE7UUFDYixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVPLFdBQVc7UUFDakIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFxQixDQUFDO1FBQ3hFLE1BQU0sQ0FBQyxFQUFFLEdBQUcsZUFBZSxDQUFDO1FBRTVCLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUMzQjtRQUVELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFTSxXQUFXO1FBQ2hCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBZ0IsQ0FBQztRQUM1RSxNQUFNLEVBQUUsYUFBYSxFQUFFLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3QyxDQUFDO21HQTNCVSxzQkFBc0IsMkRBR3ZCLFFBQVEsc0VBRVIsU0FBUzs0RkFMUixzQkFBc0I7O2lGQUF0QixzQkFBc0I7Y0FObEMsU0FBUzsyQkFDRSxpQkFBaUI7O3NCQVF4QixNQUFNO3VCQUFDLFFBQVE7O3NCQUVmLE1BQU07dUJBQUMsU0FBUzs7c0JBQUcsUUFBUTs7a0ZBTG5CLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBDU1BfTk9OQ0UsIEluamVjdCwgT25EZXN0cm95LCBPbkluaXQsIE9wdGlvbmFsLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGRmQ3NwUG9saWN5U2VydmljZSB9IGZyb20gJy4uLy4uL3BkZi1jc3AtcG9saWN5LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tICcuL2NvbG9ycy1jc3MnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwZGYtbGlnaHQtdGhlbWUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wZGYtbGlnaHQtdGhlbWUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIC8vIHN0eWxlVXJsczogWycuL2NvbG9ycy5zY3NzJywgJy4uL2NvbW1vbi9wcmludC5zY3NzJ10sXHJcbiAgLy8gZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBkZkxpZ2h0VGhlbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXHJcbiAgICBwcml2YXRlIHBkZkNzcFBvbGljeVNlcnZpY2U6IFBkZkNzcFBvbGljeVNlcnZpY2UsXHJcbiAgICBASW5qZWN0KENTUF9OT05DRSkgQE9wdGlvbmFsKCkgcHJpdmF0ZSBub25jZT86IHN0cmluZyB8IG51bGxcclxuICApIHt9XHJcblxyXG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5qZWN0U3R5bGUoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5qZWN0U3R5bGUoKSB7XHJcbiAgICBjb25zdCBzdHlsZXMgPSB0aGlzLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1NUWUxFJykgYXMgSFRNTFN0eWxlRWxlbWVudDtcclxuICAgIHN0eWxlcy5pZCA9ICdwZGYtdGhlbWUtY3NzJztcclxuXHJcbiAgICBpZiAodGhpcy5ub25jZSkge1xyXG4gICAgICBzdHlsZXMubm9uY2UgPSB0aGlzLm5vbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucGRmQ3NwUG9saWN5U2VydmljZS5hZGRUcnVzdGVkQ1NTKHN0eWxlcywgY3NzKTtcclxuICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5kb2N1bWVudC5oZWFkLCBzdHlsZXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nT25EZXN0cm95KCkge1xyXG4gICAgY29uc3Qgc3R5bGVzID0gdGhpcy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGRmLXRoZW1lLWNzcycpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgc3R5bGVzPy5wYXJlbnRFbGVtZW50Py5yZW1vdmVDaGlsZChzdHlsZXMpO1xyXG4gIH1cclxufVxyXG4iXX0=