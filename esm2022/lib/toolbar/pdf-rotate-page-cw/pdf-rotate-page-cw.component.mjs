import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { PDFNotificationService } from '../../pdf-notification-service';
import * as i0 from "@angular/core";
import * as i1 from "../../pdf-notification-service";
import * as i2 from "@angular/common";
import * as i3 from "../pdf-shy-button/pdf-shy-button.component";
import * as i4 from "../../responsive-visibility";
function PdfRotatePageCwComponent_pdf_shy_button_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "pdf-shy-button", 1);
    i0.ɵɵpipe(1, "responsiveCSSClass");
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("action", ctx_r0.rotateCW)("cssClass", i0.ɵɵpipeBind2(1, 5, ctx_r0.showRotateCwButton, "hiddenXLView"))("disabled", ctx_r0.disableRotate)("order", 900)("closeOnClick", false);
} }
export class PdfRotatePageCwComponent {
    notificationService;
    changeDetectorRef;
    showRotateCwButton = true;
    disableRotate = true;
    clockwise = true;
    counterClockwise = true;
    constructor(notificationService, changeDetectorRef) {
        this.notificationService = notificationService;
        this.changeDetectorRef = changeDetectorRef;
        const subscription = this.notificationService.onPDFJSInit.subscribe(() => {
            this.onPdfJsInit();
            subscription.unsubscribe();
        });
    }
    rotateCW() {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.eventBus.dispatch('rotatecw');
    }
    onPdfJsInit() {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.eventBus.on('updateuistate', (event) => this.updateUIState(event));
    }
    updateUIState(event) {
        this.disableRotate = event.pagesCount === 0;
        this.changeDetectorRef.markForCheck();
    }
    /** @nocollapse */ static ɵfac = function PdfRotatePageCwComponent_Factory(t) { return new (t || PdfRotatePageCwComponent)(i0.ɵɵdirectiveInject(i1.PDFNotificationService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfRotatePageCwComponent, selectors: [["pdf-rotate-page-cw"]], inputs: { showRotateCwButton: "showRotateCwButton", clockwise: "clockwise", counterClockwise: "counterClockwise" }, decls: 1, vars: 1, consts: [["primaryToolbarId", "primaryPageRotateCw", "class", "rotateCw", "title", "Rotate Clockwise", "l10nId", "pdfjs-page-rotate-cw-button", "l10nLabel", "pdfjs-page-rotate-cw-button-label", "image", "<svg style='width: 23px; height: 23px' viewBox='0 0 24 24'><path fill='currentColor' d='M12 3C7.03 3 3 7.03 3 12S7.03 21 12 21C14 21 15.92 20.34 17.5 19.14L16.06 17.7C14.87 18.54 13.45 19 12 19C8.13 19 5 15.87 5 12S8.13 5 12 5 19 8.13 19 12H16L20 16L24 12H21C21 7.03 16.97 3 12 3'/></svg>", 3, "action", "cssClass", "disabled", "order", "closeOnClick", 4, "ngIf"], ["primaryToolbarId", "primaryPageRotateCw", "title", "Rotate Clockwise", "l10nId", "pdfjs-page-rotate-cw-button", "l10nLabel", "pdfjs-page-rotate-cw-button-label", "image", "<svg style='width: 23px; height: 23px' viewBox='0 0 24 24'><path fill='currentColor' d='M12 3C7.03 3 3 7.03 3 12S7.03 21 12 21C14 21 15.92 20.34 17.5 19.14L16.06 17.7C14.87 18.54 13.45 19 12 19C8.13 19 5 15.87 5 12S8.13 5 12 5 19 8.13 19 12H16L20 16L24 12H21C21 7.03 16.97 3 12 3'/></svg>", 1, "rotateCw", 3, "action", "cssClass", "disabled", "order", "closeOnClick"]], template: function PdfRotatePageCwComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, PdfRotatePageCwComponent_pdf_shy_button_0_Template, 2, 8, "pdf-shy-button", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.clockwise);
        } }, dependencies: [i2.NgIf, i3.PdfShyButtonComponent, i4.ResponsiveCSSClassPipe], styles: ["[_nghost-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]:focus{outline:none}svg[_ngcontent-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]{padding:0;margin-top:0;margin-bottom:0}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfRotatePageCwComponent, [{
        type: Component,
        args: [{ selector: 'pdf-rotate-page-cw', template: "<pdf-shy-button\r\n  *ngIf=\"clockwise\"\r\n  [action]=\"rotateCW\"\r\n  primaryToolbarId=\"primaryPageRotateCw\"\r\n  class=\"rotateCw\"\r\n  [cssClass]=\"showRotateCwButton | responsiveCSSClass : 'hiddenXLView'\"\r\n  title=\"Rotate Clockwise\"\r\n  l10nId=\"pdfjs-page-rotate-cw-button\"\r\n  l10nLabel=\"pdfjs-page-rotate-cw-button-label\"\r\n  [disabled]=\"disableRotate\"\r\n  [order]=\"900\"\r\n  [closeOnClick]=\"false\"\r\n  image=\"<svg style='width: 23px; height: 23px' viewBox='0 0 24 24'><path fill='currentColor' d='M12 3C7.03 3 3 7.03 3 12S7.03 21 12 21C14 21 15.92 20.34 17.5 19.14L16.06 17.7C14.87 18.54 13.45 19 12 19C8.13 19 5 15.87 5 12S8.13 5 12 5 19 8.13 19 12H16L20 16L24 12H21C21 7.03 16.97 3 12 3'/></svg>\"\r\n>\r\n</pdf-shy-button>\r\n", styles: [":host:focus{outline:none}button:focus{outline:none}svg:focus{outline:none}button{padding:0;margin-top:0;margin-bottom:0}\n"] }]
    }], () => [{ type: i1.PDFNotificationService }, { type: i0.ChangeDetectorRef }], { showRotateCwButton: [{
            type: Input
        }], clockwise: [{
            type: Input
        }], counterClockwise: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PdfRotatePageCwComponent, { className: "PdfRotatePageCwComponent", filePath: "lib\\toolbar\\pdf-rotate-page-cw\\pdf-rotate-page-cw.component.ts", lineNumber: 12 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXJvdGF0ZS1wYWdlLWN3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtcm90YXRlLXBhZ2UtY3cvcGRmLXJvdGF0ZS1wYWdlLWN3LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtcm90YXRlLXBhZ2UtY3cvcGRmLXJvdGF0ZS1wYWdlLWN3LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3BFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7Ozs7O0lDSHhFLG9DQWNpQjs7OztJQUhmLEFBREEsQUFEQSxBQUpBLEFBSEEsd0NBQW1CLDZFQUdrRCxrQ0FJM0MsY0FDYix1QkFDUzs7QURBeEIsTUFBTSxPQUFPLHdCQUF3QjtJQVlmO0lBQXFEO0lBVmxFLGtCQUFrQixHQUF5QixJQUFJLENBQUM7SUFFaEQsYUFBYSxHQUFHLElBQUksQ0FBQztJQUdyQixTQUFTLEdBQUcsSUFBSSxDQUFDO0lBR2pCLGdCQUFnQixHQUFHLElBQUksQ0FBQztJQUUvQixZQUFvQixtQkFBMkMsRUFBVSxpQkFBb0M7UUFBekYsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUF3QjtRQUFVLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDM0csTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ3ZFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQixZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sUUFBUTtRQUNiLE1BQU0sb0JBQW9CLEdBQTJCLE1BQWMsQ0FBQyxvQkFBb0IsQ0FBQztRQUN6RixvQkFBb0IsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFTSxXQUFXO1FBQ2hCLE1BQU0sb0JBQW9CLEdBQTJCLE1BQWMsQ0FBQyxvQkFBb0IsQ0FBQztRQUN6RixvQkFBb0IsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzFGLENBQUM7SUFFTSxhQUFhLENBQUMsS0FBeUI7UUFDNUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsVUFBVSxLQUFLLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEMsQ0FBQztxR0FoQ1Usd0JBQXdCOzRGQUF4Qix3QkFBd0I7WUNYckMsK0ZBYUM7O1lBWkUsb0NBQWU7OztpRkRVTCx3QkFBd0I7Y0FMcEMsU0FBUzsyQkFDRSxvQkFBb0I7dUZBTXZCLGtCQUFrQjtrQkFEeEIsS0FBSztZQU1DLFNBQVM7a0JBRGYsS0FBSztZQUlDLGdCQUFnQjtrQkFEdEIsS0FBSzs7a0ZBVEssd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVXBkYXRlVUlTdGF0ZUV2ZW50IH0gZnJvbSAnLi4vLi4vZXZlbnRzL3VwZGF0ZS11aS1zdGF0ZS1ldmVudCc7XHJcbmltcG9ydCB7IElQREZWaWV3ZXJBcHBsaWNhdGlvbiB9IGZyb20gJy4uLy4uL29wdGlvbnMvcGRmLXZpZXdlci1hcHBsaWNhdGlvbic7XHJcbmltcG9ydCB7IFBERk5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9wZGYtbm90aWZpY2F0aW9uLXNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSZXNwb25zaXZlVmlzaWJpbGl0eSB9IGZyb20gJy4uLy4uL3Jlc3BvbnNpdmUtdmlzaWJpbGl0eSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BkZi1yb3RhdGUtcGFnZS1jdycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BkZi1yb3RhdGUtcGFnZS1jdy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGRmLXJvdGF0ZS1wYWdlLWN3LmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBkZlJvdGF0ZVBhZ2VDd0NvbXBvbmVudCB7XHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd1JvdGF0ZUN3QnV0dG9uOiBSZXNwb25zaXZlVmlzaWJpbGl0eSA9IHRydWU7XHJcblxyXG4gIHB1YmxpYyBkaXNhYmxlUm90YXRlID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgY2xvY2t3aXNlID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgY291bnRlckNsb2Nrd2lzZSA9IHRydWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbm90aWZpY2F0aW9uU2VydmljZTogUERGTm90aWZpY2F0aW9uU2VydmljZSwgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5vblBERkpTSW5pdC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLm9uUGRmSnNJbml0KCk7XHJcbiAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcm90YXRlQ1coKTogdm9pZCB7XHJcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xyXG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMuZGlzcGF0Y2goJ3JvdGF0ZWN3Jyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25QZGZKc0luaXQoKTogdm9pZCB7XHJcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xyXG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ3VwZGF0ZXVpc3RhdGUnLCAoZXZlbnQpID0+IHRoaXMudXBkYXRlVUlTdGF0ZShldmVudCkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZVVJU3RhdGUoZXZlbnQ6IFVwZGF0ZVVJU3RhdGVFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5kaXNhYmxlUm90YXRlID0gZXZlbnQucGFnZXNDb3VudCA9PT0gMDtcclxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG59XHJcbiIsIjxwZGYtc2h5LWJ1dHRvblxyXG4gICpuZ0lmPVwiY2xvY2t3aXNlXCJcclxuICBbYWN0aW9uXT1cInJvdGF0ZUNXXCJcclxuICBwcmltYXJ5VG9vbGJhcklkPVwicHJpbWFyeVBhZ2VSb3RhdGVDd1wiXHJcbiAgY2xhc3M9XCJyb3RhdGVDd1wiXHJcbiAgW2Nzc0NsYXNzXT1cInNob3dSb3RhdGVDd0J1dHRvbiB8IHJlc3BvbnNpdmVDU1NDbGFzcyA6ICdoaWRkZW5YTFZpZXcnXCJcclxuICB0aXRsZT1cIlJvdGF0ZSBDbG9ja3dpc2VcIlxyXG4gIGwxMG5JZD1cInBkZmpzLXBhZ2Utcm90YXRlLWN3LWJ1dHRvblwiXHJcbiAgbDEwbkxhYmVsPVwicGRmanMtcGFnZS1yb3RhdGUtY3ctYnV0dG9uLWxhYmVsXCJcclxuICBbZGlzYWJsZWRdPVwiZGlzYWJsZVJvdGF0ZVwiXHJcbiAgW29yZGVyXT1cIjkwMFwiXHJcbiAgW2Nsb3NlT25DbGlja109XCJmYWxzZVwiXHJcbiAgaW1hZ2U9XCI8c3ZnIHN0eWxlPSd3aWR0aDogMjNweDsgaGVpZ2h0OiAyM3B4JyB2aWV3Qm94PScwIDAgMjQgMjQnPjxwYXRoIGZpbGw9J2N1cnJlbnRDb2xvcicgZD0nTTEyIDNDNy4wMyAzIDMgNy4wMyAzIDEyUzcuMDMgMjEgMTIgMjFDMTQgMjEgMTUuOTIgMjAuMzQgMTcuNSAxOS4xNEwxNi4wNiAxNy43QzE0Ljg3IDE4LjU0IDEzLjQ1IDE5IDEyIDE5QzguMTMgMTkgNSAxNS44NyA1IDEyUzguMTMgNSAxMiA1IDE5IDguMTMgMTkgMTJIMTZMMjAgMTZMMjQgMTJIMjFDMjEgNy4wMyAxNi45NyAzIDEyIDMnLz48L3N2Zz5cIlxyXG4+XHJcbjwvcGRmLXNoeS1idXR0b24+XHJcbiJdfQ==