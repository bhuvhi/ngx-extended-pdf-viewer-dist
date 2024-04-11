import { ChangeDetectorRef, Component } from '@angular/core';
import { PDFNotificationService } from './../../../pdf-notification-service';
import * as i0 from "@angular/core";
import * as i1 from "./../../../pdf-notification-service";
import * as i2 from "../../pdf-shy-button/pdf-shy-button.component";
export class PdfLastPageComponent {
    constructor(notificationService, changeDetectorRef) {
        this.notificationService = notificationService;
        this.changeDetectorRef = changeDetectorRef;
        this.disableLastPage = true;
        const subscription = this.notificationService.onPDFJSInit.subscribe(() => {
            this.onPdfJsInit();
            subscription.unsubscribe();
        });
    }
    firstPage() {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.eventBus.dispatch('firstpage');
    }
    onPdfJsInit() {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.eventBus.on('updateuistate', (event) => this.updateUIState(event));
    }
    updateUIState(event) {
        this.disableLastPage = event.pageNumber === event.pagesCount;
        this.changeDetectorRef.markForCheck();
    }
    lastPage() {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.eventBus.dispatch('lastpage');
    }
}
/** @nocollapse */ PdfLastPageComponent.ɵfac = function PdfLastPageComponent_Factory(t) { return new (t || PdfLastPageComponent)(i0.ɵɵdirectiveInject(i1.PDFNotificationService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
/** @nocollapse */ PdfLastPageComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfLastPageComponent, selectors: [["pdf-last-page"]], decls: 1, vars: 3, consts: [["cssClass", "hiddenLargeView", "title", "Last page", "primaryToolbarId", "primaryLastPage", "l10nId", "last_page", "l10nLabel", "last_page_label", "eventBusName", "lastpage", "image", "<svg style='width: 24px; height: 24px' viewBox='0 0 24 24'><path fill='currentColor' d='M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z' /></svg>", 3, "disabled", "order", "closeOnClick", "click"]], template: function PdfLastPageComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "pdf-shy-button", 0);
        i0.ɵɵlistener("click", function PdfLastPageComponent_Template_pdf_shy_button_click_0_listener() { return ctx.lastPage(); });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("disabled", ctx.disableLastPage)("order", 800)("closeOnClick", false);
    } }, directives: [i2.PdfShyButtonComponent], styles: ["button[_ngcontent-%COMP%]{padding:0;margin-top:0;margin-bottom:0}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfLastPageComponent, [{
        type: Component,
        args: [{ selector: 'pdf-last-page', template: "<pdf-shy-button\r\n  cssClass=\"hiddenLargeView\"\r\n  title=\"Last page\"\r\n  primaryToolbarId=\"primaryLastPage\"\r\n  l10nId=\"last_page\"\r\n  l10nLabel=\"last_page_label\"\r\n  (click)=\"lastPage()\"\r\n  [disabled]=\"disableLastPage\"\r\n  [order]=\"800\"\r\n  eventBusName=\"lastpage\"\r\n  [closeOnClick]=\"false\"\r\n  image=\"<svg style='width: 24px; height: 24px' viewBox='0 0 24 24'><path fill='currentColor' d='M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z' /></svg>\"\r\n>\r\n</pdf-shy-button>\r\n", styles: ["button{padding:0;margin-top:0;margin-bottom:0}\n"] }]
    }], function () { return [{ type: i1.PDFNotificationService }, { type: i0.ChangeDetectorRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWxhc3QtcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL3Rvb2xiYXIvcGRmLXBhZ2luZy1hcmVhL3BkZi1sYXN0LXBhZ2UvcGRmLWxhc3QtcGFnZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL3Rvb2xiYXIvcGRmLXBhZ2luZy1hcmVhL3BkZi1sYXN0LXBhZ2UvcGRmLWxhc3QtcGFnZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzdELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDOzs7O0FBTzdFLE1BQU0sT0FBTyxvQkFBb0I7SUFHL0IsWUFBb0IsbUJBQTJDLEVBQVUsaUJBQW9DO1FBQXpGLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBd0I7UUFBVSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBRnRHLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBRzVCLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUN2RSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLFNBQVM7UUFDZCxNQUFNLG9CQUFvQixHQUEyQixNQUFjLENBQUMsb0JBQW9CLENBQUM7UUFDekYsb0JBQW9CLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRU0sV0FBVztRQUNoQixNQUFNLG9CQUFvQixHQUEyQixNQUFjLENBQUMsb0JBQW9CLENBQUM7UUFDekYsb0JBQW9CLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUMxRixDQUFDO0lBRU0sYUFBYSxDQUFDLEtBQXlCO1FBQzVDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLFVBQVUsS0FBSyxLQUFLLENBQUMsVUFBVSxDQUFDO1FBQzdELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRU0sUUFBUTtRQUNiLE1BQU0sb0JBQW9CLEdBQTJCLE1BQWMsQ0FBQyxvQkFBb0IsQ0FBQztRQUN6RixvQkFBb0IsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3JELENBQUM7OzJHQTVCVSxvQkFBb0I7c0dBQXBCLG9CQUFvQjtRQ1ZqQyx5Q0FZQztRQU5DLHlHQUFTLGNBQVUsSUFBQztRQU90QixpQkFBaUI7O1FBTmYsOENBQTRCLGNBQUEsdUJBQUE7O3VGREdqQixvQkFBb0I7Y0FMaEMsU0FBUzsyQkFDRSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBVcGRhdGVVSVN0YXRlRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9ldmVudHMvdXBkYXRlLXVpLXN0YXRlLWV2ZW50JztcclxuaW1wb3J0IHsgSVBERlZpZXdlckFwcGxpY2F0aW9uIH0gZnJvbSAnLi4vLi4vLi4vb3B0aW9ucy9wZGYtdmlld2VyLWFwcGxpY2F0aW9uJztcclxuaW1wb3J0IHsgUERGTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJy4vLi4vLi4vLi4vcGRmLW5vdGlmaWNhdGlvbi1zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncGRmLWxhc3QtcGFnZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BkZi1sYXN0LXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3BkZi1sYXN0LXBhZ2UuY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGRmTGFzdFBhZ2VDb21wb25lbnQge1xyXG4gIHB1YmxpYyBkaXNhYmxlTGFzdFBhZ2UgPSB0cnVlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5vdGlmaWNhdGlvblNlcnZpY2U6IFBERk5vdGlmaWNhdGlvblNlcnZpY2UsIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgICBjb25zdCBzdWJzY3JpcHRpb24gPSB0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2Uub25QREZKU0luaXQuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5vblBkZkpzSW5pdCgpO1xyXG4gICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGZpcnN0UGFnZSgpOiB2b2lkIHtcclxuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XHJcbiAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5kaXNwYXRjaCgnZmlyc3RwYWdlJyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25QZGZKc0luaXQoKTogdm9pZCB7XHJcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xyXG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ3VwZGF0ZXVpc3RhdGUnLCAoZXZlbnQpID0+IHRoaXMudXBkYXRlVUlTdGF0ZShldmVudCkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZVVJU3RhdGUoZXZlbnQ6IFVwZGF0ZVVJU3RhdGVFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5kaXNhYmxlTGFzdFBhZ2UgPSBldmVudC5wYWdlTnVtYmVyID09PSBldmVudC5wYWdlc0NvdW50O1xyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBsYXN0UGFnZSgpOiB2b2lkIHtcclxuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XHJcbiAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5kaXNwYXRjaCgnbGFzdHBhZ2UnKTtcclxuICB9XHJcbn1cclxuIiwiPHBkZi1zaHktYnV0dG9uXHJcbiAgY3NzQ2xhc3M9XCJoaWRkZW5MYXJnZVZpZXdcIlxyXG4gIHRpdGxlPVwiTGFzdCBwYWdlXCJcclxuICBwcmltYXJ5VG9vbGJhcklkPVwicHJpbWFyeUxhc3RQYWdlXCJcclxuICBsMTBuSWQ9XCJsYXN0X3BhZ2VcIlxyXG4gIGwxMG5MYWJlbD1cImxhc3RfcGFnZV9sYWJlbFwiXHJcbiAgKGNsaWNrKT1cImxhc3RQYWdlKClcIlxyXG4gIFtkaXNhYmxlZF09XCJkaXNhYmxlTGFzdFBhZ2VcIlxyXG4gIFtvcmRlcl09XCI4MDBcIlxyXG4gIGV2ZW50QnVzTmFtZT1cImxhc3RwYWdlXCJcclxuICBbY2xvc2VPbkNsaWNrXT1cImZhbHNlXCJcclxuICBpbWFnZT1cIjxzdmcgc3R5bGU9J3dpZHRoOiAyNHB4OyBoZWlnaHQ6IDI0cHgnIHZpZXdCb3g9JzAgMCAyNCAyNCc+PHBhdGggZmlsbD0nY3VycmVudENvbG9yJyBkPSdNNS41OSw3LjQxTDEwLjE4LDEyTDUuNTksMTYuNTlMNywxOEwxMywxMkw3LDZMNS41OSw3LjQxTTE2LDZIMThWMThIMTZWNlonIC8+PC9zdmc+XCJcclxuPlxyXG48L3BkZi1zaHktYnV0dG9uPlxyXG4iXX0=