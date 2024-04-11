import { ChangeDetectorRef, Component, NgZone } from '@angular/core';
import { PDFNotificationService } from '../../../pdf-notification-service';
import * as i0 from "@angular/core";
import * as i1 from "../../../pdf-notification-service";
import * as i2 from "../../pdf-shy-button/pdf-shy-button.component";
import * as i3 from "../../../responsive-visibility";
export class PdfPreviousPageComponent {
    notificationService;
    ngZone;
    changeDetectorRef;
    disablePreviousPage = true;
    constructor(notificationService, ngZone, changeDetectorRef) {
        this.notificationService = notificationService;
        this.ngZone = ngZone;
        this.changeDetectorRef = changeDetectorRef;
        const subscription = this.notificationService.onPDFJSInit.subscribe(() => {
            this.onPdfJsInit();
            subscription.unsubscribe();
        });
    }
    onPdfJsInit() {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.eventBus.on('updateuistate', (event) => this.updateUIState(event));
    }
    updateUIState(event) {
        this.disablePreviousPage = event.pageNumber <= 1;
        this.changeDetectorRef.markForCheck();
    }
    /** @nocollapse */ static ɵfac = function PdfPreviousPageComponent_Factory(t) { return new (t || PdfPreviousPageComponent)(i0.ɵɵdirectiveInject(i1.PDFNotificationService), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfPreviousPageComponent, selectors: [["pdf-previous-page"]], decls: 2, vars: 6, consts: [["title", "Previous Page", "primaryToolbarId", "primaryPrevious", "secondaryMenuId", "secondaryPreviousPage", "l10nId", "pdfjs-previous-button", "l10nLabel", "pdfjs-previous-button-label", "eventBusName", "previouspage", "image", "<svg width='24px' height='24px' viewBox='0 0 24 24'><path fill='currentColor' d='M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z' /></svg>", 3, "cssClass", "disabled", "order", "closeOnClick"]], template: function PdfPreviousPageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "pdf-shy-button", 0);
            i0.ɵɵpipe(1, "responsiveCSSClass");
        } if (rf & 2) {
            i0.ɵɵproperty("cssClass", i0.ɵɵpipeBind1(1, 4, "xs"))("disabled", ctx.disablePreviousPage)("order", 600)("closeOnClick", false);
        } }, dependencies: [i2.PdfShyButtonComponent, i3.ResponsiveCSSClassPipe], styles: ["button[_ngcontent-%COMP%]{padding:0;margin-top:0;margin-bottom:0}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfPreviousPageComponent, [{
        type: Component,
        args: [{ selector: 'pdf-previous-page', template: "<pdf-shy-button\r\n  [cssClass]=\"'xs' | responsiveCSSClass\"\r\n  title=\"Previous Page\"\r\n  primaryToolbarId=\"primaryPrevious\"\r\n  secondaryMenuId=\"secondaryPreviousPage\"\r\n  l10nId=\"pdfjs-previous-button\"\r\n  l10nLabel=\"pdfjs-previous-button-label\"\r\n  [disabled]=\"disablePreviousPage\"\r\n  [order]=\"600\"\r\n  eventBusName=\"previouspage\"\r\n  [closeOnClick]=\"false\"\r\n  image=\"<svg width='24px' height='24px' viewBox='0 0 24 24'><path fill='currentColor' d='M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z' /></svg>\"\r\n>\r\n</pdf-shy-button>\r\n", styles: ["button{padding:0;margin-top:0;margin-bottom:0}\n"] }]
    }], () => [{ type: i1.PDFNotificationService }, { type: i0.NgZone }, { type: i0.ChangeDetectorRef }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PdfPreviousPageComponent, { className: "PdfPreviousPageComponent", filePath: "lib\\toolbar\\pdf-paging-area\\pdf-previous-page\\pdf-previous-page.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXByZXZpb3VzLXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi90b29sYmFyL3BkZi1wYWdpbmctYXJlYS9wZGYtcHJldmlvdXMtcGFnZS9wZGYtcHJldmlvdXMtcGFnZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL3Rvb2xiYXIvcGRmLXBhZ2luZy1hcmVhL3BkZi1wcmV2aW91cy1wYWdlL3BkZi1wcmV2aW91cy1wYWdlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3JFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7OztBQU8zRSxNQUFNLE9BQU8sd0JBQXdCO0lBR2Y7SUFBcUQ7SUFBd0I7SUFGMUYsbUJBQW1CLEdBQUcsSUFBSSxDQUFDO0lBRWxDLFlBQW9CLG1CQUEyQyxFQUFVLE1BQWMsRUFBVSxpQkFBb0M7UUFBakgsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUF3QjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ25JLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUN2RSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLFdBQVc7UUFDaEIsTUFBTSxvQkFBb0IsR0FBMkIsTUFBYyxDQUFDLG9CQUFvQixDQUFDO1FBQ3pGLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsZUFBZSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDMUYsQ0FBQztJQUVNLGFBQWEsQ0FBQyxLQUF5QjtRQUM1QyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hDLENBQUM7cUdBbEJVLHdCQUF3Qjs0RkFBeEIsd0JBQXdCO1lDVnJDLG9DQWFpQjs7O1lBSGYsQUFGQSxBQURBLEFBTkEscURBQXNDLHFDQU1OLGNBQ25CLHVCQUVTOzs7aUZEQVgsd0JBQXdCO2NBTHBDLFNBQVM7MkJBQ0UsbUJBQW1COztrRkFJbEIsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFVwZGF0ZVVJU3RhdGVFdmVudCB9IGZyb20gJy4uLy4uLy4uL2V2ZW50cy91cGRhdGUtdWktc3RhdGUtZXZlbnQnO1xyXG5pbXBvcnQgeyBJUERGVmlld2VyQXBwbGljYXRpb24gfSBmcm9tICcuLi8uLi8uLi9vcHRpb25zL3BkZi12aWV3ZXItYXBwbGljYXRpb24nO1xyXG5pbXBvcnQgeyBQREZOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vcGRmLW5vdGlmaWNhdGlvbi1zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncGRmLXByZXZpb3VzLXBhZ2UnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wZGYtcHJldmlvdXMtcGFnZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGRmLXByZXZpb3VzLXBhZ2UuY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGRmUHJldmlvdXNQYWdlQ29tcG9uZW50IHtcclxuICBwdWJsaWMgZGlzYWJsZVByZXZpb3VzUGFnZSA9IHRydWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbm90aWZpY2F0aW9uU2VydmljZTogUERGTm90aWZpY2F0aW9uU2VydmljZSwgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSwgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5vblBERkpTSW5pdC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLm9uUGRmSnNJbml0KCk7XHJcbiAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25QZGZKc0luaXQoKTogdm9pZCB7XHJcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xyXG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ3VwZGF0ZXVpc3RhdGUnLCAoZXZlbnQpID0+IHRoaXMudXBkYXRlVUlTdGF0ZShldmVudCkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZVVJU3RhdGUoZXZlbnQ6IFVwZGF0ZVVJU3RhdGVFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5kaXNhYmxlUHJldmlvdXNQYWdlID0gZXZlbnQucGFnZU51bWJlciA8PSAxO1xyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcbn1cclxuIiwiPHBkZi1zaHktYnV0dG9uXHJcbiAgW2Nzc0NsYXNzXT1cIid4cycgfCByZXNwb25zaXZlQ1NTQ2xhc3NcIlxyXG4gIHRpdGxlPVwiUHJldmlvdXMgUGFnZVwiXHJcbiAgcHJpbWFyeVRvb2xiYXJJZD1cInByaW1hcnlQcmV2aW91c1wiXHJcbiAgc2Vjb25kYXJ5TWVudUlkPVwic2Vjb25kYXJ5UHJldmlvdXNQYWdlXCJcclxuICBsMTBuSWQ9XCJwZGZqcy1wcmV2aW91cy1idXR0b25cIlxyXG4gIGwxMG5MYWJlbD1cInBkZmpzLXByZXZpb3VzLWJ1dHRvbi1sYWJlbFwiXHJcbiAgW2Rpc2FibGVkXT1cImRpc2FibGVQcmV2aW91c1BhZ2VcIlxyXG4gIFtvcmRlcl09XCI2MDBcIlxyXG4gIGV2ZW50QnVzTmFtZT1cInByZXZpb3VzcGFnZVwiXHJcbiAgW2Nsb3NlT25DbGlja109XCJmYWxzZVwiXHJcbiAgaW1hZ2U9XCI8c3ZnIHdpZHRoPScyNHB4JyBoZWlnaHQ9JzI0cHgnIHZpZXdCb3g9JzAgMCAyNCAyNCc+PHBhdGggZmlsbD0nY3VycmVudENvbG9yJyBkPSdNMTUuNDEsMTYuNThMMTAuODMsMTJMMTUuNDEsNy40MUwxNCw2TDgsMTJMMTQsMThMMTUuNDEsMTYuNThaJyAvPjwvc3ZnPlwiXHJcbj5cclxuPC9wZGYtc2h5LWJ1dHRvbj5cclxuIl19