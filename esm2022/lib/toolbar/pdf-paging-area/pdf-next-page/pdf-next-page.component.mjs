import { ChangeDetectorRef, Component } from '@angular/core';
import { PDFNotificationService } from '../../../pdf-notification-service';
import * as i0 from "@angular/core";
import * as i1 from "../../../pdf-notification-service";
import * as i2 from "../../pdf-shy-button/pdf-shy-button.component";
import * as i3 from "../../../responsive-visibility";
export class PdfNextPageComponent {
    notificationService;
    changeDetectorRef;
    disableNextPage = true;
    constructor(notificationService, changeDetectorRef) {
        this.notificationService = notificationService;
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
        this.disableNextPage = event.pageNumber === event.pagesCount;
        this.changeDetectorRef.markForCheck();
    }
    /** @nocollapse */ static ɵfac = function PdfNextPageComponent_Factory(t) { return new (t || PdfNextPageComponent)(i0.ɵɵdirectiveInject(i1.PDFNotificationService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfNextPageComponent, selectors: [["pdf-next-page"]], decls: 2, vars: 6, consts: [["title", "Next Page", "primaryToolbarId", "primaryNext", "secondaryMenuId", "primaryNextPage", "l10nId", "pdfjs-next-button", "l10nLabel", "pdfjs-next-button-label", "image", "<svg width='24px' height='24px' viewBox='0 0 24 24'><path fill='currentColor' d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' /></svg>", "eventBusName", "nextpage", 3, "cssClass", "disabled", "order", "closeOnClick"]], template: function PdfNextPageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "pdf-shy-button", 0);
            i0.ɵɵpipe(1, "responsiveCSSClass");
        } if (rf & 2) {
            i0.ɵɵproperty("cssClass", i0.ɵɵpipeBind1(1, 4, "xs"))("disabled", ctx.disableNextPage)("order", 700)("closeOnClick", false);
        } }, dependencies: [i2.PdfShyButtonComponent, i3.ResponsiveCSSClassPipe], styles: ["button[_ngcontent-%COMP%]{padding:0;margin-top:0;margin-bottom:0}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfNextPageComponent, [{
        type: Component,
        args: [{ selector: 'pdf-next-page', template: "<pdf-shy-button\r\n  title=\"Next Page\"\r\n  [cssClass]=\"'xs' | responsiveCSSClass\"\r\n  primaryToolbarId=\"primaryNext\"\r\n  secondaryMenuId=\"primaryNextPage\"\r\n  l10nId=\"pdfjs-next-button\"\r\n  l10nLabel=\"pdfjs-next-button-label\"\r\n  [disabled]=\"disableNextPage\"\r\n  image=\"<svg width='24px' height='24px' viewBox='0 0 24 24'><path fill='currentColor' d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' /></svg>\"\r\n  [order]=\"700\"\r\n  [closeOnClick]=\"false\"\r\n  eventBusName=\"nextpage\"\r\n>\r\n</pdf-shy-button>\r\n", styles: ["button{padding:0;margin-top:0;margin-bottom:0}\n"] }]
    }], () => [{ type: i1.PDFNotificationService }, { type: i0.ChangeDetectorRef }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PdfNextPageComponent, { className: "PdfNextPageComponent", filePath: "lib\\toolbar\\pdf-paging-area\\pdf-next-page\\pdf-next-page.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLW5leHQtcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL3Rvb2xiYXIvcGRmLXBhZ2luZy1hcmVhL3BkZi1uZXh0LXBhZ2UvcGRmLW5leHQtcGFnZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL3Rvb2xiYXIvcGRmLXBhZ2luZy1hcmVhL3BkZi1uZXh0LXBhZ2UvcGRmLW5leHQtcGFnZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzdELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7OztBQU8zRSxNQUFNLE9BQU8sb0JBQW9CO0lBR1g7SUFBcUQ7SUFGbEUsZUFBZSxHQUFHLElBQUksQ0FBQztJQUU5QixZQUFvQixtQkFBMkMsRUFBVSxpQkFBb0M7UUFBekYsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUF3QjtRQUFVLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDM0csTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ3ZFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQixZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sV0FBVztRQUNoQixNQUFNLG9CQUFvQixHQUEyQixNQUFjLENBQUMsb0JBQW9CLENBQUM7UUFDekYsb0JBQW9CLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUMxRixDQUFDO0lBRU0sYUFBYSxDQUFDLEtBQXlCO1FBQzVDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLFVBQVUsS0FBSyxLQUFLLENBQUMsVUFBVSxDQUFDO1FBQzdELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QyxDQUFDO2lHQWxCVSxvQkFBb0I7NEZBQXBCLG9CQUFvQjtZQ1ZqQyxvQ0FhaUI7OztZQUhmLEFBREEsQUFGQSxBQUxBLHFEQUFzQyxpQ0FLVixjQUVmLHVCQUNTOzs7aUZEQVgsb0JBQW9CO2NBTGhDLFNBQVM7MkJBQ0UsZUFBZTs7a0ZBSWQsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBVcGRhdGVVSVN0YXRlRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9ldmVudHMvdXBkYXRlLXVpLXN0YXRlLWV2ZW50JztcclxuaW1wb3J0IHsgSVBERlZpZXdlckFwcGxpY2F0aW9uIH0gZnJvbSAnLi4vLi4vLi4vb3B0aW9ucy9wZGYtdmlld2VyLWFwcGxpY2F0aW9uJztcclxuaW1wb3J0IHsgUERGTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3BkZi1ub3RpZmljYXRpb24tc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BkZi1uZXh0LXBhZ2UnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wZGYtbmV4dC1wYWdlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wZGYtbmV4dC1wYWdlLmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBkZk5leHRQYWdlQ29tcG9uZW50IHtcclxuICBwdWJsaWMgZGlzYWJsZU5leHRQYWdlID0gdHJ1ZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBub3RpZmljYXRpb25TZXJ2aWNlOiBQREZOb3RpZmljYXRpb25TZXJ2aWNlLCBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gdGhpcy5ub3RpZmljYXRpb25TZXJ2aWNlLm9uUERGSlNJbml0LnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMub25QZGZKc0luaXQoKTtcclxuICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvblBkZkpzSW5pdCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XHJcbiAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbigndXBkYXRldWlzdGF0ZScsIChldmVudCkgPT4gdGhpcy51cGRhdGVVSVN0YXRlKGV2ZW50KSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlVUlTdGF0ZShldmVudDogVXBkYXRlVUlTdGF0ZUV2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLmRpc2FibGVOZXh0UGFnZSA9IGV2ZW50LnBhZ2VOdW1iZXIgPT09IGV2ZW50LnBhZ2VzQ291bnQ7XHJcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxufVxyXG4iLCI8cGRmLXNoeS1idXR0b25cclxuICB0aXRsZT1cIk5leHQgUGFnZVwiXHJcbiAgW2Nzc0NsYXNzXT1cIid4cycgfCByZXNwb25zaXZlQ1NTQ2xhc3NcIlxyXG4gIHByaW1hcnlUb29sYmFySWQ9XCJwcmltYXJ5TmV4dFwiXHJcbiAgc2Vjb25kYXJ5TWVudUlkPVwicHJpbWFyeU5leHRQYWdlXCJcclxuICBsMTBuSWQ9XCJwZGZqcy1uZXh0LWJ1dHRvblwiXHJcbiAgbDEwbkxhYmVsPVwicGRmanMtbmV4dC1idXR0b24tbGFiZWxcIlxyXG4gIFtkaXNhYmxlZF09XCJkaXNhYmxlTmV4dFBhZ2VcIlxyXG4gIGltYWdlPVwiPHN2ZyB3aWR0aD0nMjRweCcgaGVpZ2h0PScyNHB4JyB2aWV3Qm94PScwIDAgMjQgMjQnPjxwYXRoIGZpbGw9J2N1cnJlbnRDb2xvcicgZD0nTTguNTksMTYuNThMMTMuMTcsMTJMOC41OSw3LjQxTDEwLDZMMTYsMTJMMTAsMThMOC41OSwxNi41OFonIC8+PC9zdmc+XCJcclxuICBbb3JkZXJdPVwiNzAwXCJcclxuICBbY2xvc2VPbkNsaWNrXT1cImZhbHNlXCJcclxuICBldmVudEJ1c05hbWU9XCJuZXh0cGFnZVwiXHJcbj5cclxuPC9wZGYtc2h5LWJ1dHRvbj5cclxuIl19