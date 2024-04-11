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
        args: [{ selector: 'pdf-last-page', template: "<pdf-shy-button\n  cssClass=\"hiddenLargeView\"\n  title=\"Last page\"\n  primaryToolbarId=\"primaryLastPage\"\n  l10nId=\"last_page\"\n  l10nLabel=\"last_page_label\"\n  (click)=\"lastPage()\"\n  [disabled]=\"disableLastPage\"\n  [order]=\"800\"\n  eventBusName=\"lastpage\"\n  [closeOnClick]=\"false\"\n  image=\"<svg style='width: 24px; height: 24px' viewBox='0 0 24 24'><path fill='currentColor' d='M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z' /></svg>\"\n>\n</pdf-shy-button>\n", styles: ["button{padding:0;margin-top:0;margin-bottom:0}\n"] }]
    }], function () { return [{ type: i1.PDFNotificationService }, { type: i0.ChangeDetectorRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWxhc3QtcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL3Rvb2xiYXIvcGRmLXBhZ2luZy1hcmVhL3BkZi1sYXN0LXBhZ2UvcGRmLWxhc3QtcGFnZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL3Rvb2xiYXIvcGRmLXBhZ2luZy1hcmVhL3BkZi1sYXN0LXBhZ2UvcGRmLWxhc3QtcGFnZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzdELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDOzs7O0FBTzdFLE1BQU0sT0FBTyxvQkFBb0I7SUFHL0IsWUFBb0IsbUJBQTJDLEVBQVUsaUJBQW9DO1FBQXpGLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBd0I7UUFBVSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBRnRHLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBRzVCLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUN2RSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLFNBQVM7UUFDZCxNQUFNLG9CQUFvQixHQUEyQixNQUFjLENBQUMsb0JBQW9CLENBQUM7UUFDekYsb0JBQW9CLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRU0sV0FBVztRQUNoQixNQUFNLG9CQUFvQixHQUEyQixNQUFjLENBQUMsb0JBQW9CLENBQUM7UUFDekYsb0JBQW9CLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUMxRixDQUFDO0lBRU0sYUFBYSxDQUFDLEtBQXlCO1FBQzVDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLFVBQVUsS0FBSyxLQUFLLENBQUMsVUFBVSxDQUFDO1FBQzdELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRU0sUUFBUTtRQUNiLE1BQU0sb0JBQW9CLEdBQTJCLE1BQWMsQ0FBQyxvQkFBb0IsQ0FBQztRQUN6RixvQkFBb0IsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3JELENBQUM7OzJHQTVCVSxvQkFBb0I7c0dBQXBCLG9CQUFvQjtRQ1ZqQyx5Q0FZQztRQU5DLHlHQUFTLGNBQVUsSUFBQztRQU90QixpQkFBaUI7O1FBTmYsOENBQTRCLGNBQUEsdUJBQUE7O3VGREdqQixvQkFBb0I7Y0FMaEMsU0FBUzsyQkFDRSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVXBkYXRlVUlTdGF0ZUV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZXZlbnRzL3VwZGF0ZS11aS1zdGF0ZS1ldmVudCc7XG5pbXBvcnQgeyBJUERGVmlld2VyQXBwbGljYXRpb24gfSBmcm9tICcuLi8uLi8uLi9vcHRpb25zL3BkZi12aWV3ZXItYXBwbGljYXRpb24nO1xuaW1wb3J0IHsgUERGTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJy4vLi4vLi4vLi4vcGRmLW5vdGlmaWNhdGlvbi1zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGRmLWxhc3QtcGFnZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9wZGYtbGFzdC1wYWdlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGRmLWxhc3QtcGFnZS5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFBkZkxhc3RQYWdlQ29tcG9uZW50IHtcbiAgcHVibGljIGRpc2FibGVMYXN0UGFnZSA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBub3RpZmljYXRpb25TZXJ2aWNlOiBQREZOb3RpZmljYXRpb25TZXJ2aWNlLCBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5vblBERkpTSW5pdC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5vblBkZkpzSW5pdCgpO1xuICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZmlyc3RQYWdlKCk6IHZvaWQge1xuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMuZGlzcGF0Y2goJ2ZpcnN0cGFnZScpO1xuICB9XG5cbiAgcHVibGljIG9uUGRmSnNJbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ3VwZGF0ZXVpc3RhdGUnLCAoZXZlbnQpID0+IHRoaXMudXBkYXRlVUlTdGF0ZShldmVudCkpO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZVVJU3RhdGUoZXZlbnQ6IFVwZGF0ZVVJU3RhdGVFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZUxhc3RQYWdlID0gZXZlbnQucGFnZU51bWJlciA9PT0gZXZlbnQucGFnZXNDb3VudDtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHVibGljIGxhc3RQYWdlKCk6IHZvaWQge1xuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMuZGlzcGF0Y2goJ2xhc3RwYWdlJyk7XG4gIH1cbn1cbiIsIjxwZGYtc2h5LWJ1dHRvblxuICBjc3NDbGFzcz1cImhpZGRlbkxhcmdlVmlld1wiXG4gIHRpdGxlPVwiTGFzdCBwYWdlXCJcbiAgcHJpbWFyeVRvb2xiYXJJZD1cInByaW1hcnlMYXN0UGFnZVwiXG4gIGwxMG5JZD1cImxhc3RfcGFnZVwiXG4gIGwxMG5MYWJlbD1cImxhc3RfcGFnZV9sYWJlbFwiXG4gIChjbGljayk9XCJsYXN0UGFnZSgpXCJcbiAgW2Rpc2FibGVkXT1cImRpc2FibGVMYXN0UGFnZVwiXG4gIFtvcmRlcl09XCI4MDBcIlxuICBldmVudEJ1c05hbWU9XCJsYXN0cGFnZVwiXG4gIFtjbG9zZU9uQ2xpY2tdPVwiZmFsc2VcIlxuICBpbWFnZT1cIjxzdmcgc3R5bGU9J3dpZHRoOiAyNHB4OyBoZWlnaHQ6IDI0cHgnIHZpZXdCb3g9JzAgMCAyNCAyNCc+PHBhdGggZmlsbD0nY3VycmVudENvbG9yJyBkPSdNNS41OSw3LjQxTDEwLjE4LDEyTDUuNTksMTYuNTlMNywxOEwxMywxMkw3LDZMNS41OSw3LjQxTTE2LDZIMThWMThIMTZWNlonIC8+PC9zdmc+XCJcbj5cbjwvcGRmLXNoeS1idXR0b24+XG4iXX0=