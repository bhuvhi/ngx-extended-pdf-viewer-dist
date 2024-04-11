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
        args: [{ selector: 'pdf-first-page', template: "<pdf-shy-button\n  [cssClass]=\"show | responsiveCSSClass : 'hiddenLargeView'\"\n  title=\"First page\"\n  primaryToolbarId=\"primaryFirstPage\"\n  l10nId=\"first_page\"\n  (click)=\"firstPage()\"\n  [disabled]=\"disableFirstPage\"\n  l10nLabel=\"first_page_label\"\n  [order]=\"500\"\n  eventBusName=\"firstpage\"\n  [closeOnClick]=\"false\"\n  image=\"<svg style='width: 24px; height: 24px' viewBox='0 0 24 24'><path fill='currentColor' d='M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z' /></svg>\"\n>\n</pdf-shy-button>\n", styles: ["button{padding:0;margin-top:0;margin-bottom:0}\n"] }]
    }], function () { return [{ type: i1.PDFNotificationService }, { type: i0.ChangeDetectorRef }]; }, { show: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWZpcnN0LXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi90b29sYmFyL3BkZi1wYWdpbmctYXJlYS9wZGYtZmlyc3QtcGFnZS9wZGYtZmlyc3QtcGFnZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL3Rvb2xiYXIvcGRmLXBhZ2luZy1hcmVhL3BkZi1maXJzdC1wYWdlL3BkZi1maXJzdC1wYWdlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSXBFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDOzs7OztBQU83RSxNQUFNLE9BQU8scUJBQXFCO0lBTWhDLFlBQW9CLG1CQUEyQyxFQUFVLGlCQUFvQztRQUF6Rix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXdCO1FBQVUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUp0RyxTQUFJLEdBQXlCLElBQUksQ0FBQztRQUVsQyxxQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFHN0IsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ3ZFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQixZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sU0FBUztRQUNkLE1BQU0sb0JBQW9CLEdBQTJCLE1BQWMsQ0FBQyxvQkFBb0IsQ0FBQztRQUN6RixvQkFBb0IsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFTSxXQUFXO1FBQ2hCLE1BQU0sb0JBQW9CLEdBQTJCLE1BQWMsQ0FBQyxvQkFBb0IsQ0FBQztRQUN6RixvQkFBb0IsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzFGLENBQUM7SUFFTSxhQUFhLENBQUMsS0FBeUI7UUFDNUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QyxDQUFDOzs2R0ExQlUscUJBQXFCO3VHQUFyQixxQkFBcUI7UUNYbEMseUNBWUM7UUFQQywwR0FBUyxlQUFXLElBQUM7O1FBUXZCLGlCQUFpQjs7UUFaZiw0RUFBMEQsa0NBQUEsY0FBQSx1QkFBQTs7dUZEVS9DLHFCQUFxQjtjQUxqQyxTQUFTOzJCQUNFLGdCQUFnQjt5R0FNbkIsSUFBSTtrQkFEVixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVwZGF0ZVVJU3RhdGVFdmVudCB9IGZyb20gJy4uLy4uLy4uL2V2ZW50cy91cGRhdGUtdWktc3RhdGUtZXZlbnQnO1xuaW1wb3J0IHsgSVBERlZpZXdlckFwcGxpY2F0aW9uIH0gZnJvbSAnLi4vLi4vLi4vb3B0aW9ucy9wZGYtdmlld2VyLWFwcGxpY2F0aW9uJztcbmltcG9ydCB7IFJlc3BvbnNpdmVWaXNpYmlsaXR5IH0gZnJvbSAnLi4vLi4vLi4vcmVzcG9uc2l2ZS12aXNpYmlsaXR5JztcbmltcG9ydCB7IFBERk5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLy4uLy4uLy4uL3BkZi1ub3RpZmljYXRpb24tc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BkZi1maXJzdC1wYWdlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BkZi1maXJzdC1wYWdlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGRmLWZpcnN0LXBhZ2UuY29tcG9uZW50LmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBQZGZGaXJzdFBhZ2VDb21wb25lbnQge1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvdzogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSB0cnVlO1xuXG4gIHB1YmxpYyBkaXNhYmxlRmlyc3RQYWdlID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5vdGlmaWNhdGlvblNlcnZpY2U6IFBERk5vdGlmaWNhdGlvblNlcnZpY2UsIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gdGhpcy5ub3RpZmljYXRpb25TZXJ2aWNlLm9uUERGSlNJbml0LnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLm9uUGRmSnNJbml0KCk7XG4gICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBmaXJzdFBhZ2UoKTogdm9pZCB7XG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcbiAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5kaXNwYXRjaCgnZmlyc3RwYWdlJyk7XG4gIH1cblxuICBwdWJsaWMgb25QZGZKc0luaXQoKTogdm9pZCB7XG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcbiAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbigndXBkYXRldWlzdGF0ZScsIChldmVudCkgPT4gdGhpcy51cGRhdGVVSVN0YXRlKGV2ZW50KSk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlVUlTdGF0ZShldmVudDogVXBkYXRlVUlTdGF0ZUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlRmlyc3RQYWdlID0gZXZlbnQucGFnZU51bWJlciA8PSAxO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cbn1cbiIsIjxwZGYtc2h5LWJ1dHRvblxuICBbY3NzQ2xhc3NdPVwic2hvdyB8IHJlc3BvbnNpdmVDU1NDbGFzcyA6ICdoaWRkZW5MYXJnZVZpZXcnXCJcbiAgdGl0bGU9XCJGaXJzdCBwYWdlXCJcbiAgcHJpbWFyeVRvb2xiYXJJZD1cInByaW1hcnlGaXJzdFBhZ2VcIlxuICBsMTBuSWQ9XCJmaXJzdF9wYWdlXCJcbiAgKGNsaWNrKT1cImZpcnN0UGFnZSgpXCJcbiAgW2Rpc2FibGVkXT1cImRpc2FibGVGaXJzdFBhZ2VcIlxuICBsMTBuTGFiZWw9XCJmaXJzdF9wYWdlX2xhYmVsXCJcbiAgW29yZGVyXT1cIjUwMFwiXG4gIGV2ZW50QnVzTmFtZT1cImZpcnN0cGFnZVwiXG4gIFtjbG9zZU9uQ2xpY2tdPVwiZmFsc2VcIlxuICBpbWFnZT1cIjxzdmcgc3R5bGU9J3dpZHRoOiAyNHB4OyBoZWlnaHQ6IDI0cHgnIHZpZXdCb3g9JzAgMCAyNCAyNCc+PHBhdGggZmlsbD0nY3VycmVudENvbG9yJyBkPSdNMTguNDEsMTYuNTlMMTMuODIsMTJMMTguNDEsNy40MUwxNyw2TDExLDEyTDE3LDE4TDE4LjQxLDE2LjU5TTYsNkg4VjE4SDZWNlonIC8+PC9zdmc+XCJcbj5cbjwvcGRmLXNoeS1idXR0b24+XG4iXX0=