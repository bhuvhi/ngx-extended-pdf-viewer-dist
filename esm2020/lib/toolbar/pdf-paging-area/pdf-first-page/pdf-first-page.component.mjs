import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { PDFNotificationService } from './../../../pdf-notification-service';
import * as i0 from "@angular/core";
import * as i1 from "./../../../pdf-notification-service";
import * as i2 from "../../pdf-shy-button/pdf-shy-button.component";
import * as i3 from "../../../responsive-visibility";
export class PdfFirstPageComponent {
    constructor(notificationService, changeDetectorRef) {
        this.notificationService = notificationService;
        this.changeDetectorRef = changeDetectorRef;
        this.show = true;
        this.disableFirstPage = true;
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
        this.disableFirstPage = event.pageNumber <= 1;
        this.changeDetectorRef.markForCheck();
    }
}
/** @nocollapse */ PdfFirstPageComponent.ɵfac = function PdfFirstPageComponent_Factory(t) { return new (t || PdfFirstPageComponent)(i0.ɵɵdirectiveInject(i1.PDFNotificationService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
/** @nocollapse */ PdfFirstPageComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfFirstPageComponent, selectors: [["pdf-first-page"]], inputs: { show: "show" }, decls: 2, vars: 7, consts: [["title", "First page", "primaryToolbarId", "primaryFirstPage", "l10nId", "first_page", "l10nLabel", "first_page_label", "eventBusName", "firstpage", "image", "<svg style='width: 24px; height: 24px' viewBox='0 0 24 24'><path fill='currentColor' d='M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z' /></svg>", 3, "cssClass", "disabled", "order", "closeOnClick", "click"]], template: function PdfFirstPageComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "pdf-shy-button", 0);
        i0.ɵɵlistener("click", function PdfFirstPageComponent_Template_pdf_shy_button_click_0_listener() { return ctx.firstPage(); });
        i0.ɵɵpipe(1, "responsiveCSSClass");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("cssClass", i0.ɵɵpipeBind2(1, 4, ctx.show, "hiddenLargeView"))("disabled", ctx.disableFirstPage)("order", 500)("closeOnClick", false);
    } }, directives: [i2.PdfShyButtonComponent], pipes: [i3.ResponsiveCSSClassPipe], styles: ["button[_ngcontent-%COMP%]{padding:0;margin-top:0;margin-bottom:0}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfFirstPageComponent, [{
        type: Component,
        args: [{ selector: 'pdf-first-page', template: "<pdf-shy-button\r\n  [cssClass]=\"show | responsiveCSSClass : 'hiddenLargeView'\"\r\n  title=\"First page\"\r\n  primaryToolbarId=\"primaryFirstPage\"\r\n  l10nId=\"first_page\"\r\n  (click)=\"firstPage()\"\r\n  [disabled]=\"disableFirstPage\"\r\n  l10nLabel=\"first_page_label\"\r\n  [order]=\"500\"\r\n  eventBusName=\"firstpage\"\r\n  [closeOnClick]=\"false\"\r\n  image=\"<svg style='width: 24px; height: 24px' viewBox='0 0 24 24'><path fill='currentColor' d='M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z' /></svg>\"\r\n>\r\n</pdf-shy-button>\r\n", styles: ["button{padding:0;margin-top:0;margin-bottom:0}\n"] }]
    }], function () { return [{ type: i1.PDFNotificationService }, { type: i0.ChangeDetectorRef }]; }, { show: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWZpcnN0LXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi90b29sYmFyL3BkZi1wYWdpbmctYXJlYS9wZGYtZmlyc3QtcGFnZS9wZGYtZmlyc3QtcGFnZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL3Rvb2xiYXIvcGRmLXBhZ2luZy1hcmVhL3BkZi1maXJzdC1wYWdlL3BkZi1maXJzdC1wYWdlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSXBFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDOzs7OztBQU83RSxNQUFNLE9BQU8scUJBQXFCO0lBTWhDLFlBQW9CLG1CQUEyQyxFQUFVLGlCQUFvQztRQUF6Rix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXdCO1FBQVUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUp0RyxTQUFJLEdBQXlCLElBQUksQ0FBQztRQUVsQyxxQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFHN0IsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ3ZFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQixZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sU0FBUztRQUNkLE1BQU0sb0JBQW9CLEdBQTJCLE1BQWMsQ0FBQyxvQkFBb0IsQ0FBQztRQUN6RixvQkFBb0IsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFTSxXQUFXO1FBQ2hCLE1BQU0sb0JBQW9CLEdBQTJCLE1BQWMsQ0FBQyxvQkFBb0IsQ0FBQztRQUN6RixvQkFBb0IsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzFGLENBQUM7SUFFTSxhQUFhLENBQUMsS0FBeUI7UUFDNUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QyxDQUFDOzs2R0ExQlUscUJBQXFCO3VHQUFyQixxQkFBcUI7UUNYbEMseUNBWUM7UUFQQywwR0FBUyxlQUFXLElBQUM7O1FBUXZCLGlCQUFpQjs7UUFaZiw0RUFBMEQsa0NBQUEsY0FBQSx1QkFBQTs7dUZEVS9DLHFCQUFxQjtjQUxqQyxTQUFTOzJCQUNFLGdCQUFnQjt5R0FNbkIsSUFBSTtrQkFEVixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVXBkYXRlVUlTdGF0ZUV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZXZlbnRzL3VwZGF0ZS11aS1zdGF0ZS1ldmVudCc7XHJcbmltcG9ydCB7IElQREZWaWV3ZXJBcHBsaWNhdGlvbiB9IGZyb20gJy4uLy4uLy4uL29wdGlvbnMvcGRmLXZpZXdlci1hcHBsaWNhdGlvbic7XHJcbmltcG9ydCB7IFJlc3BvbnNpdmVWaXNpYmlsaXR5IH0gZnJvbSAnLi4vLi4vLi4vcmVzcG9uc2l2ZS12aXNpYmlsaXR5JztcclxuaW1wb3J0IHsgUERGTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJy4vLi4vLi4vLi4vcGRmLW5vdGlmaWNhdGlvbi1zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncGRmLWZpcnN0LXBhZ2UnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wZGYtZmlyc3QtcGFnZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGRmLWZpcnN0LXBhZ2UuY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGRmRmlyc3RQYWdlQ29tcG9uZW50IHtcclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93OiBSZXNwb25zaXZlVmlzaWJpbGl0eSA9IHRydWU7XHJcblxyXG4gIHB1YmxpYyBkaXNhYmxlRmlyc3RQYWdlID0gdHJ1ZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBub3RpZmljYXRpb25TZXJ2aWNlOiBQREZOb3RpZmljYXRpb25TZXJ2aWNlLCBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gdGhpcy5ub3RpZmljYXRpb25TZXJ2aWNlLm9uUERGSlNJbml0LnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMub25QZGZKc0luaXQoKTtcclxuICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBmaXJzdFBhZ2UoKTogdm9pZCB7XHJcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xyXG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMuZGlzcGF0Y2goJ2ZpcnN0cGFnZScpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uUGRmSnNJbml0KCk6IHZvaWQge1xyXG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCd1cGRhdGV1aXN0YXRlJywgKGV2ZW50KSA9PiB0aGlzLnVwZGF0ZVVJU3RhdGUoZXZlbnQpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVVSVN0YXRlKGV2ZW50OiBVcGRhdGVVSVN0YXRlRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMuZGlzYWJsZUZpcnN0UGFnZSA9IGV2ZW50LnBhZ2VOdW1iZXIgPD0gMTtcclxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG59XHJcbiIsIjxwZGYtc2h5LWJ1dHRvblxyXG4gIFtjc3NDbGFzc109XCJzaG93IHwgcmVzcG9uc2l2ZUNTU0NsYXNzIDogJ2hpZGRlbkxhcmdlVmlldydcIlxyXG4gIHRpdGxlPVwiRmlyc3QgcGFnZVwiXHJcbiAgcHJpbWFyeVRvb2xiYXJJZD1cInByaW1hcnlGaXJzdFBhZ2VcIlxyXG4gIGwxMG5JZD1cImZpcnN0X3BhZ2VcIlxyXG4gIChjbGljayk9XCJmaXJzdFBhZ2UoKVwiXHJcbiAgW2Rpc2FibGVkXT1cImRpc2FibGVGaXJzdFBhZ2VcIlxyXG4gIGwxMG5MYWJlbD1cImZpcnN0X3BhZ2VfbGFiZWxcIlxyXG4gIFtvcmRlcl09XCI1MDBcIlxyXG4gIGV2ZW50QnVzTmFtZT1cImZpcnN0cGFnZVwiXHJcbiAgW2Nsb3NlT25DbGlja109XCJmYWxzZVwiXHJcbiAgaW1hZ2U9XCI8c3ZnIHN0eWxlPSd3aWR0aDogMjRweDsgaGVpZ2h0OiAyNHB4JyB2aWV3Qm94PScwIDAgMjQgMjQnPjxwYXRoIGZpbGw9J2N1cnJlbnRDb2xvcicgZD0nTTE4LjQxLDE2LjU5TDEzLjgyLDEyTDE4LjQxLDcuNDFMMTcsNkwxMSwxMkwxNywxOEwxOC40MSwxNi41OU02LDZIOFYxOEg2VjZaJyAvPjwvc3ZnPlwiXHJcbj5cclxuPC9wZGYtc2h5LWJ1dHRvbj5cclxuIl19