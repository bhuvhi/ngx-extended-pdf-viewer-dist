import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { PDFNotificationService } from '../../pdf-notification-service';
import * as i0 from "@angular/core";
import * as i1 from "../../pdf-notification-service";
import * as i2 from "@angular/common";
import * as i3 from "../pdf-shy-button/pdf-shy-button.component";
import * as i4 from "../../responsive-visibility";
function PdfRotatePageCcwComponent_pdf_shy_button_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "pdf-shy-button", 1);
    i0.ɵɵpipe(1, "responsiveCSSClass");
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("action", ctx_r0.rotateCCW)("cssClass", i0.ɵɵpipeBind2(1, 5, ctx_r0.showRotateCcwButton, "hiddenXLView"))("disabled", ctx_r0.disableRotate)("order", 1000)("closeOnClick", false);
} }
export class PdfRotatePageCcwComponent {
    notificationService;
    changeDetectorRef;
    showRotateCcwButton = true;
    disableRotate = true;
    counterClockwise = true;
    constructor(notificationService, changeDetectorRef) {
        this.notificationService = notificationService;
        this.changeDetectorRef = changeDetectorRef;
        const subscription = this.notificationService.onPDFJSInit.subscribe(() => {
            this.onPdfJsInit();
            subscription.unsubscribe();
        });
    }
    rotateCCW() {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.eventBus.dispatch('rotateccw');
    }
    onPdfJsInit() {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.eventBus.on('updateuistate', (event) => this.updateUIState(event));
    }
    updateUIState(event) {
        this.disableRotate = event.pagesCount === 0;
        this.changeDetectorRef.markForCheck();
    }
    /** @nocollapse */ static ɵfac = function PdfRotatePageCcwComponent_Factory(t) { return new (t || PdfRotatePageCcwComponent)(i0.ɵɵdirectiveInject(i1.PDFNotificationService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfRotatePageCcwComponent, selectors: [["pdf-rotate-page-ccw"]], inputs: { showRotateCcwButton: "showRotateCcwButton", counterClockwise: "counterClockwise" }, decls: 1, vars: 1, consts: [["primaryToolbarId", "primaryPageRotateCcw", "class", "rotateCcw", "title", "Rotate Counterclockwise", "l10nId", "pdfjs-page-rotate-ccw-button", "l10nLabel", "pdfjs-page-rotate-ccw-button-label", "image", "<svg style='width: 23px; height: 23px' viewBox='0 0 24 24'><path fill='currentColor' d='M12 3C7.03 3 3 7.03 3 12H0L4 16L8 12H5C5 8.13 8.13 5 12 5S19 8.13 19 12 15.87 19 12 19C10.55 19 9.13 18.54 7.94 17.7L6.5 19.14C8.08 20.34 10 21 12 21C16.97 21 21 16.97 21 12S16.97 3 12 3'/></svg>", 3, "action", "cssClass", "disabled", "order", "closeOnClick", 4, "ngIf"], ["primaryToolbarId", "primaryPageRotateCcw", "title", "Rotate Counterclockwise", "l10nId", "pdfjs-page-rotate-ccw-button", "l10nLabel", "pdfjs-page-rotate-ccw-button-label", "image", "<svg style='width: 23px; height: 23px' viewBox='0 0 24 24'><path fill='currentColor' d='M12 3C7.03 3 3 7.03 3 12H0L4 16L8 12H5C5 8.13 8.13 5 12 5S19 8.13 19 12 15.87 19 12 19C10.55 19 9.13 18.54 7.94 17.7L6.5 19.14C8.08 20.34 10 21 12 21C16.97 21 21 16.97 21 12S16.97 3 12 3'/></svg>", 1, "rotateCcw", 3, "action", "cssClass", "disabled", "order", "closeOnClick"]], template: function PdfRotatePageCcwComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, PdfRotatePageCcwComponent_pdf_shy_button_0_Template, 2, 8, "pdf-shy-button", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.counterClockwise);
        } }, dependencies: [i2.NgIf, i3.PdfShyButtonComponent, i4.ResponsiveCSSClassPipe], styles: ["[_nghost-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]:focus{outline:none}svg[_ngcontent-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]{padding:0;margin-top:0;margin-bottom:0}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfRotatePageCcwComponent, [{
        type: Component,
        args: [{ selector: 'pdf-rotate-page-ccw', template: "<pdf-shy-button\r\n  *ngIf=\"counterClockwise\"\r\n  [action]=\"rotateCCW\"\r\n  primaryToolbarId=\"primaryPageRotateCcw\"\r\n  class=\"rotateCcw\"\r\n  [cssClass]=\"showRotateCcwButton | responsiveCSSClass : 'hiddenXLView'\"\r\n  title=\"Rotate Counterclockwise\"\r\n  l10nId=\"pdfjs-page-rotate-ccw-button\"\r\n  l10nLabel=\"pdfjs-page-rotate-ccw-button-label\"\r\n  [disabled]=\"disableRotate\"\r\n  [order]=\"1000\"\r\n  [closeOnClick]=\"false\"\r\n  image=\"<svg style='width: 23px; height: 23px' viewBox='0 0 24 24'><path fill='currentColor' d='M12 3C7.03 3 3 7.03 3 12H0L4 16L8 12H5C5 8.13 8.13 5 12 5S19 8.13 19 12 15.87 19 12 19C10.55 19 9.13 18.54 7.94 17.7L6.5 19.14C8.08 20.34 10 21 12 21C16.97 21 21 16.97 21 12S16.97 3 12 3'/></svg>\"\r\n>\r\n</pdf-shy-button>\r\n", styles: [":host:focus{outline:none}button:focus{outline:none}svg:focus{outline:none}button{padding:0;margin-top:0;margin-bottom:0}\n"] }]
    }], () => [{ type: i1.PDFNotificationService }, { type: i0.ChangeDetectorRef }], { showRotateCcwButton: [{
            type: Input
        }], counterClockwise: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PdfRotatePageCcwComponent, { className: "PdfRotatePageCcwComponent", filePath: "lib\\toolbar\\pdf-rotate-page-ccw\\pdf-rotate-page-ccw.component.ts", lineNumber: 12 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXJvdGF0ZS1wYWdlLWNjdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL3Rvb2xiYXIvcGRmLXJvdGF0ZS1wYWdlLWNjdy9wZGYtcm90YXRlLXBhZ2UtY2N3LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtcm90YXRlLXBhZ2UtY2N3L3BkZi1yb3RhdGUtcGFnZS1jY3cuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHcEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7Ozs7SUNIeEUsb0NBY2lCOzs7O0lBSGYsQUFEQSxBQURBLEFBSkEsQUFIQSx5Q0FBb0IsOEVBR2tELGtDQUk1QyxlQUNaLHVCQUNROztBREF4QixNQUFNLE9BQU8seUJBQXlCO0lBU2hCO0lBQXFEO0lBUGxFLG1CQUFtQixHQUF5QixJQUFJLENBQUM7SUFFakQsYUFBYSxHQUFHLElBQUksQ0FBQztJQUdyQixnQkFBZ0IsR0FBRyxJQUFJLENBQUM7SUFFL0IsWUFBb0IsbUJBQTJDLEVBQVUsaUJBQW9DO1FBQXpGLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBd0I7UUFBVSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQzNHLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUN2RSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLFNBQVM7UUFDZCxNQUFNLG9CQUFvQixHQUEyQixNQUFjLENBQUMsb0JBQW9CLENBQUM7UUFDekYsb0JBQW9CLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRU0sV0FBVztRQUNoQixNQUFNLG9CQUFvQixHQUEyQixNQUFjLENBQUMsb0JBQW9CLENBQUM7UUFDekYsb0JBQW9CLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUMxRixDQUFDO0lBRU0sYUFBYSxDQUFDLEtBQXlCO1FBQzVDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLFVBQVUsS0FBSyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hDLENBQUM7c0dBN0JVLHlCQUF5Qjs0RkFBekIseUJBQXlCO1lDWHRDLGdHQWFDOztZQVpFLDJDQUFzQjs7O2lGRFVaLHlCQUF5QjtjQUxyQyxTQUFTOzJCQUNFLHFCQUFxQjt1RkFNeEIsbUJBQW1CO2tCQUR6QixLQUFLO1lBTUMsZ0JBQWdCO2tCQUR0QixLQUFLOztrRkFOSyx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBVcGRhdGVVSVN0YXRlRXZlbnQgfSBmcm9tICcuLi8uLi9ldmVudHMvdXBkYXRlLXVpLXN0YXRlLWV2ZW50JztcclxuaW1wb3J0IHsgSVBERlZpZXdlckFwcGxpY2F0aW9uIH0gZnJvbSAnLi4vLi4vb3B0aW9ucy9wZGYtdmlld2VyLWFwcGxpY2F0aW9uJztcclxuaW1wb3J0IHsgUERGTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3BkZi1ub3RpZmljYXRpb24tc2VydmljZSc7XHJcbmltcG9ydCB7IFJlc3BvbnNpdmVWaXNpYmlsaXR5IH0gZnJvbSAnLi4vLi4vcmVzcG9uc2l2ZS12aXNpYmlsaXR5JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncGRmLXJvdGF0ZS1wYWdlLWNjdycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BkZi1yb3RhdGUtcGFnZS1jY3cuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3BkZi1yb3RhdGUtcGFnZS1jY3cuY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGRmUm90YXRlUGFnZUNjd0NvbXBvbmVudCB7XHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd1JvdGF0ZUNjd0J1dHRvbjogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSB0cnVlO1xyXG5cclxuICBwdWJsaWMgZGlzYWJsZVJvdGF0ZSA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGNvdW50ZXJDbG9ja3dpc2UgPSB0cnVlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5vdGlmaWNhdGlvblNlcnZpY2U6IFBERk5vdGlmaWNhdGlvblNlcnZpY2UsIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgICBjb25zdCBzdWJzY3JpcHRpb24gPSB0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2Uub25QREZKU0luaXQuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5vblBkZkpzSW5pdCgpO1xyXG4gICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJvdGF0ZUNDVygpOiB2b2lkIHtcclxuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XHJcbiAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5kaXNwYXRjaCgncm90YXRlY2N3Jyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25QZGZKc0luaXQoKTogdm9pZCB7XHJcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xyXG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ3VwZGF0ZXVpc3RhdGUnLCAoZXZlbnQpID0+IHRoaXMudXBkYXRlVUlTdGF0ZShldmVudCkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZVVJU3RhdGUoZXZlbnQ6IFVwZGF0ZVVJU3RhdGVFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5kaXNhYmxlUm90YXRlID0gZXZlbnQucGFnZXNDb3VudCA9PT0gMDtcclxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG59XHJcbiIsIjxwZGYtc2h5LWJ1dHRvblxyXG4gICpuZ0lmPVwiY291bnRlckNsb2Nrd2lzZVwiXHJcbiAgW2FjdGlvbl09XCJyb3RhdGVDQ1dcIlxyXG4gIHByaW1hcnlUb29sYmFySWQ9XCJwcmltYXJ5UGFnZVJvdGF0ZUNjd1wiXHJcbiAgY2xhc3M9XCJyb3RhdGVDY3dcIlxyXG4gIFtjc3NDbGFzc109XCJzaG93Um90YXRlQ2N3QnV0dG9uIHwgcmVzcG9uc2l2ZUNTU0NsYXNzIDogJ2hpZGRlblhMVmlldydcIlxyXG4gIHRpdGxlPVwiUm90YXRlIENvdW50ZXJjbG9ja3dpc2VcIlxyXG4gIGwxMG5JZD1cInBkZmpzLXBhZ2Utcm90YXRlLWNjdy1idXR0b25cIlxyXG4gIGwxMG5MYWJlbD1cInBkZmpzLXBhZ2Utcm90YXRlLWNjdy1idXR0b24tbGFiZWxcIlxyXG4gIFtkaXNhYmxlZF09XCJkaXNhYmxlUm90YXRlXCJcclxuICBbb3JkZXJdPVwiMTAwMFwiXHJcbiAgW2Nsb3NlT25DbGlja109XCJmYWxzZVwiXHJcbiAgaW1hZ2U9XCI8c3ZnIHN0eWxlPSd3aWR0aDogMjNweDsgaGVpZ2h0OiAyM3B4JyB2aWV3Qm94PScwIDAgMjQgMjQnPjxwYXRoIGZpbGw9J2N1cnJlbnRDb2xvcicgZD0nTTEyIDNDNy4wMyAzIDMgNy4wMyAzIDEySDBMNCAxNkw4IDEySDVDNSA4LjEzIDguMTMgNSAxMiA1UzE5IDguMTMgMTkgMTIgMTUuODcgMTkgMTIgMTlDMTAuNTUgMTkgOS4xMyAxOC41NCA3Ljk0IDE3LjdMNi41IDE5LjE0QzguMDggMjAuMzQgMTAgMjEgMTIgMjFDMTYuOTcgMjEgMjEgMTYuOTcgMjEgMTJTMTYuOTcgMyAxMiAzJy8+PC9zdmc+XCJcclxuPlxyXG48L3BkZi1zaHktYnV0dG9uPlxyXG4iXX0=