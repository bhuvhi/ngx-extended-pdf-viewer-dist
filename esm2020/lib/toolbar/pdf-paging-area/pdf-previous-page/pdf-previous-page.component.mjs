import { ChangeDetectorRef, Component, NgZone } from '@angular/core';
import { PDFNotificationService } from '../../../pdf-notification-service';
import * as i0 from "@angular/core";
import * as i1 from "../../../pdf-notification-service";
import * as i2 from "../../pdf-shy-button/pdf-shy-button.component";
import * as i3 from "../../../responsive-visibility";
export class PdfPreviousPageComponent {
    constructor(notificationService, ngZone, changeDetectorRef) {
        this.notificationService = notificationService;
        this.ngZone = ngZone;
        this.changeDetectorRef = changeDetectorRef;
        this.disablePreviousPage = true;
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
}
/** @nocollapse */ PdfPreviousPageComponent.ɵfac = function PdfPreviousPageComponent_Factory(t) { return new (t || PdfPreviousPageComponent)(i0.ɵɵdirectiveInject(i1.PDFNotificationService), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
/** @nocollapse */ PdfPreviousPageComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfPreviousPageComponent, selectors: [["pdf-previous-page"]], decls: 2, vars: 6, consts: [["title", "Previous Page", "primaryToolbarId", "primaryPrevious", "secondaryMenuId", "secondaryPreviousPage", "l10nId", "previous", "l10nLabel", "previous_label", "eventBusName", "previouspage", "image", "<svg style='width: 24px; height: 24px' viewBox='0 0 24 24'><path fill='currentColor' d='M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z' /></svg>", 3, "cssClass", "disabled", "order", "closeOnClick"]], template: function PdfPreviousPageComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "pdf-shy-button", 0);
        i0.ɵɵpipe(1, "responsiveCSSClass");
    } if (rf & 2) {
        i0.ɵɵproperty("cssClass", i0.ɵɵpipeBind1(1, 4, "xs"))("disabled", ctx.disablePreviousPage)("order", 600)("closeOnClick", false);
    } }, directives: [i2.PdfShyButtonComponent], pipes: [i3.ResponsiveCSSClassPipe], styles: ["button[_ngcontent-%COMP%]{padding:0;margin-top:0;margin-bottom:0}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfPreviousPageComponent, [{
        type: Component,
        args: [{ selector: 'pdf-previous-page', template: "<pdf-shy-button\r\n  [cssClass]=\"'xs' | responsiveCSSClass\"\r\n  title=\"Previous Page\"\r\n  primaryToolbarId=\"primaryPrevious\"\r\n  secondaryMenuId=\"secondaryPreviousPage\"\r\n  l10nId=\"previous\"\r\n  l10nLabel=\"previous_label\"\r\n  [disabled]=\"disablePreviousPage\"\r\n  [order]=\"600\"\r\n  eventBusName=\"previouspage\"\r\n  [closeOnClick]=\"false\"\r\n  image=\"<svg style='width: 24px; height: 24px' viewBox='0 0 24 24'><path fill='currentColor' d='M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z' /></svg>\"\r\n>\r\n</pdf-shy-button>\r\n", styles: ["button{padding:0;margin-top:0;margin-bottom:0}\n"] }]
    }], function () { return [{ type: i1.PDFNotificationService }, { type: i0.NgZone }, { type: i0.ChangeDetectorRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXByZXZpb3VzLXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi90b29sYmFyL3BkZi1wYWdpbmctYXJlYS9wZGYtcHJldmlvdXMtcGFnZS9wZGYtcHJldmlvdXMtcGFnZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL3Rvb2xiYXIvcGRmLXBhZ2luZy1hcmVhL3BkZi1wcmV2aW91cy1wYWdlL3BkZi1wcmV2aW91cy1wYWdlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3JFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7OztBQU8zRSxNQUFNLE9BQU8sd0JBQXdCO0lBR25DLFlBQW9CLG1CQUEyQyxFQUFVLE1BQWMsRUFBVSxpQkFBb0M7UUFBakgsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUF3QjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBRjlILHdCQUFtQixHQUFHLElBQUksQ0FBQztRQUdoQyxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDdkUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxXQUFXO1FBQ2hCLE1BQU0sb0JBQW9CLEdBQTJCLE1BQWMsQ0FBQyxvQkFBb0IsQ0FBQztRQUN6RixvQkFBb0IsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzFGLENBQUM7SUFFTSxhQUFhLENBQUMsS0FBeUI7UUFDNUMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QyxDQUFDOzttSEFsQlUsd0JBQXdCOzBHQUF4Qix3QkFBd0I7UUNWckMsb0NBYWlCOzs7UUFaZixxREFBc0MscUNBQUEsY0FBQSx1QkFBQTs7dUZEUzNCLHdCQUF3QjtjQUxwQyxTQUFTOzJCQUNFLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBVcGRhdGVVSVN0YXRlRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9ldmVudHMvdXBkYXRlLXVpLXN0YXRlLWV2ZW50JztcclxuaW1wb3J0IHsgSVBERlZpZXdlckFwcGxpY2F0aW9uIH0gZnJvbSAnLi4vLi4vLi4vb3B0aW9ucy9wZGYtdmlld2VyLWFwcGxpY2F0aW9uJztcclxuaW1wb3J0IHsgUERGTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3BkZi1ub3RpZmljYXRpb24tc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BkZi1wcmV2aW91cy1wYWdlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGRmLXByZXZpb3VzLXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3BkZi1wcmV2aW91cy1wYWdlLmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBkZlByZXZpb3VzUGFnZUNvbXBvbmVudCB7XHJcbiAgcHVibGljIGRpc2FibGVQcmV2aW91c1BhZ2UgPSB0cnVlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5vdGlmaWNhdGlvblNlcnZpY2U6IFBERk5vdGlmaWNhdGlvblNlcnZpY2UsIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgICBjb25zdCBzdWJzY3JpcHRpb24gPSB0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2Uub25QREZKU0luaXQuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5vblBkZkpzSW5pdCgpO1xyXG4gICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uUGRmSnNJbml0KCk6IHZvaWQge1xyXG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCd1cGRhdGV1aXN0YXRlJywgKGV2ZW50KSA9PiB0aGlzLnVwZGF0ZVVJU3RhdGUoZXZlbnQpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVVSVN0YXRlKGV2ZW50OiBVcGRhdGVVSVN0YXRlRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMuZGlzYWJsZVByZXZpb3VzUGFnZSA9IGV2ZW50LnBhZ2VOdW1iZXIgPD0gMTtcclxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG59XHJcbiIsIjxwZGYtc2h5LWJ1dHRvblxyXG4gIFtjc3NDbGFzc109XCIneHMnIHwgcmVzcG9uc2l2ZUNTU0NsYXNzXCJcclxuICB0aXRsZT1cIlByZXZpb3VzIFBhZ2VcIlxyXG4gIHByaW1hcnlUb29sYmFySWQ9XCJwcmltYXJ5UHJldmlvdXNcIlxyXG4gIHNlY29uZGFyeU1lbnVJZD1cInNlY29uZGFyeVByZXZpb3VzUGFnZVwiXHJcbiAgbDEwbklkPVwicHJldmlvdXNcIlxyXG4gIGwxMG5MYWJlbD1cInByZXZpb3VzX2xhYmVsXCJcclxuICBbZGlzYWJsZWRdPVwiZGlzYWJsZVByZXZpb3VzUGFnZVwiXHJcbiAgW29yZGVyXT1cIjYwMFwiXHJcbiAgZXZlbnRCdXNOYW1lPVwicHJldmlvdXNwYWdlXCJcclxuICBbY2xvc2VPbkNsaWNrXT1cImZhbHNlXCJcclxuICBpbWFnZT1cIjxzdmcgc3R5bGU9J3dpZHRoOiAyNHB4OyBoZWlnaHQ6IDI0cHgnIHZpZXdCb3g9JzAgMCAyNCAyNCc+PHBhdGggZmlsbD0nY3VycmVudENvbG9yJyBkPSdNMTUuNDEsMTYuNThMMTAuODMsMTJMMTUuNDEsNy40MUwxNCw2TDgsMTJMMTQsMThMMTUuNDEsMTYuNThaJyAvPjwvc3ZnPlwiXHJcbj5cclxuPC9wZGYtc2h5LWJ1dHRvbj5cclxuIl19