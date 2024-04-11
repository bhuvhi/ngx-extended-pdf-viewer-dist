import { Component, Input, NgZone } from '@angular/core';
import { take } from 'rxjs/operators';
import { ScrollModeType } from '../../options/pdf-viewer';
import { PDFNotificationService } from '../../pdf-notification-service';
import * as i0 from "@angular/core";
import * as i1 from "../../pdf-notification-service";
import * as i2 from "../pdf-shy-button/pdf-shy-button.component";
import * as i3 from "../../responsive-visibility";
export class PdfNoSpreadComponent {
    constructor(notificationService, ngZone) {
        this.notificationService = notificationService;
        this.ngZone = ngZone;
        this.show = true;
        this.spread = 'off';
        this.notificationService.onPDFJSInit.pipe(take(1)).subscribe(() => {
            this.onPdfJsInit();
        });
    }
    onPdfJsInit() {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.eventBus.on('spreadmodechanged', (event) => {
            this.ngZone.run(() => {
                const modes = ['off', 'odd', 'even'];
                this.spread = modes[event.mode];
            });
        });
    }
    onClick() {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.pdfViewer.spreadMode = 0;
    }
}
/** @nocollapse */ PdfNoSpreadComponent.ɵfac = function PdfNoSpreadComponent_Factory(t) { return new (t || PdfNoSpreadComponent)(i0.ɵɵdirectiveInject(i1.PDFNotificationService), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ PdfNoSpreadComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfNoSpreadComponent, selectors: [["pdf-no-spread"]], inputs: { show: "show", scrollMode: "scrollMode" }, decls: 2, vars: 9, consts: [["title", "Do not join page spreads", "primaryToolbarId", "spreadNone", "l10nId", "spread_none", "l10nLabel", "spread_none_label", "image", "<svg style='width: 24px; height: 24px; margin-top: 3px' viewBox='0 0 24 24'><path fill='currentColor' d='M6 3c-1 0-1.5.5-1.5 1.5v7c0 1 .5 1.5 1.5 1.5h4c1 0 1.5-.5 1.5-1.5v-7c0-1-.5-1.5-1.5-1.5z' /></svg>", 3, "cssClass", "toggled", "action", "order", "closeOnClick", "disabled"]], template: function PdfNoSpreadComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "pdf-shy-button", 0);
        i0.ɵɵpipe(1, "responsiveCSSClass");
    } if (rf & 2) {
        i0.ɵɵproperty("cssClass", i0.ɵɵpipeBind2(1, 6, ctx.show, "always-in-secondary-menu"))("toggled", ctx.spread === "off")("action", ctx.onClick)("order", 2000)("closeOnClick", false)("disabled", ctx.scrollMode === 1);
    } }, directives: [i2.PdfShyButtonComponent], pipes: [i3.ResponsiveCSSClassPipe], styles: ["button[_ngcontent-%COMP%]{padding:0;margin-top:0;margin-bottom:0}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfNoSpreadComponent, [{
        type: Component,
        args: [{ selector: 'pdf-no-spread', template: "<pdf-shy-button\n  [cssClass]=\"show | responsiveCSSClass : 'always-in-secondary-menu'\"\n  title=\"Do not join page spreads\"\n  primaryToolbarId=\"spreadNone\"\n  l10nId=\"spread_none\"\n  [toggled]=\"spread === 'off'\"\n  [action]=\"onClick\"\n  l10nLabel=\"spread_none_label\"\n  [order]=\"2000\"\n  [closeOnClick]=\"false\"\n  [disabled]=\"scrollMode === 1\"\n  image=\"<svg style='width: 24px; height: 24px; margin-top: 3px' viewBox='0 0 24 24'><path fill='currentColor' d='M6 3c-1 0-1.5.5-1.5 1.5v7c0 1 .5 1.5 1.5 1.5h4c1 0 1.5-.5 1.5-1.5v-7c0-1-.5-1.5-1.5-1.5z' /></svg>\"\n>\n</pdf-shy-button>\n", styles: ["button{padding:0;margin-top:0;margin-bottom:0}\n"] }]
    }], function () { return [{ type: i1.PDFNotificationService }, { type: i0.NgZone }]; }, { show: [{
            type: Input
        }], scrollMode: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLW5vLXNwcmVhZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL3Rvb2xiYXIvcGRmLW5vLXNwcmVhZC9wZGYtbm8tc3ByZWFkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtbm8tc3ByZWFkL3BkZi1uby1zcHJlYWQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFHMUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7O0FBUXhFLE1BQU0sT0FBTyxvQkFBb0I7SUFTL0IsWUFBb0IsbUJBQTJDLEVBQVUsTUFBYztRQUFuRSx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQVBoRixTQUFJLEdBQXlCLElBQUksQ0FBQztRQUVsQyxXQUFNLEdBQWUsS0FBSyxDQUFDO1FBTWhDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDaEUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLFdBQVc7UUFDaEIsTUFBTSxvQkFBb0IsR0FBMkIsTUFBYyxDQUFDLG9CQUFvQixDQUFDO1FBQ3pGLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUM5RCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7Z0JBQ25CLE1BQU0sS0FBSyxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQXNCLENBQUM7Z0JBQzFELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLE9BQU87UUFDWixNQUFNLG9CQUFvQixHQUEyQixNQUFjLENBQUMsb0JBQW9CLENBQUM7UUFDekYsb0JBQW9CLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7MkdBNUJVLG9CQUFvQjtzR0FBcEIsb0JBQW9CO1FDYmpDLG9DQWFpQjs7O1FBWmYscUZBQW1FLGlDQUFBLHVCQUFBLGVBQUEsdUJBQUEsa0NBQUE7O3VGRFl4RCxvQkFBb0I7Y0FMaEMsU0FBUzsyQkFDRSxlQUFlOzhGQU1sQixJQUFJO2tCQURWLEtBQUs7WUFNQyxVQUFVO2tCQURoQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU2Nyb2xsTW9kZVR5cGUgfSBmcm9tICcuLi8uLi9vcHRpb25zL3BkZi12aWV3ZXInO1xuaW1wb3J0IHsgSVBERlZpZXdlckFwcGxpY2F0aW9uIH0gZnJvbSAnLi4vLi4vb3B0aW9ucy9wZGYtdmlld2VyLWFwcGxpY2F0aW9uJztcbmltcG9ydCB7IFNwcmVhZFR5cGUgfSBmcm9tICcuLi8uLi9vcHRpb25zL3NwcmVhZC10eXBlJztcbmltcG9ydCB7IFBERk5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9wZGYtbm90aWZpY2F0aW9uLXNlcnZpY2UnO1xuaW1wb3J0IHsgUmVzcG9uc2l2ZVZpc2liaWxpdHkgfSBmcm9tICcuLi8uLi9yZXNwb25zaXZlLXZpc2liaWxpdHknO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwZGYtbm8tc3ByZWFkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BkZi1uby1zcHJlYWQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wZGYtbm8tc3ByZWFkLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgUGRmTm9TcHJlYWRDb21wb25lbnQge1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvdzogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSB0cnVlO1xuXG4gIHB1YmxpYyBzcHJlYWQ6IFNwcmVhZFR5cGUgPSAnb2ZmJztcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2Nyb2xsTW9kZTogU2Nyb2xsTW9kZVR5cGU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBub3RpZmljYXRpb25TZXJ2aWNlOiBQREZOb3RpZmljYXRpb25TZXJ2aWNlLCBwcml2YXRlIG5nWm9uZTogTmdab25lKSB7XG4gICAgdGhpcy5ub3RpZmljYXRpb25TZXJ2aWNlLm9uUERGSlNJbml0LnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMub25QZGZKc0luaXQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBvblBkZkpzSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdzcHJlYWRtb2RlY2hhbmdlZCcsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgY29uc3QgbW9kZXMgPSBbJ29mZicsICdvZGQnLCAnZXZlbiddIGFzIEFycmF5PFNwcmVhZFR5cGU+O1xuICAgICAgICB0aGlzLnNwcmVhZCA9IG1vZGVzW2V2ZW50Lm1vZGVdO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgb25DbGljaygpOiB2b2lkIHtcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5zcHJlYWRNb2RlID0gMDtcbiAgfVxufVxuIiwiPHBkZi1zaHktYnV0dG9uXG4gIFtjc3NDbGFzc109XCJzaG93IHwgcmVzcG9uc2l2ZUNTU0NsYXNzIDogJ2Fsd2F5cy1pbi1zZWNvbmRhcnktbWVudSdcIlxuICB0aXRsZT1cIkRvIG5vdCBqb2luIHBhZ2Ugc3ByZWFkc1wiXG4gIHByaW1hcnlUb29sYmFySWQ9XCJzcHJlYWROb25lXCJcbiAgbDEwbklkPVwic3ByZWFkX25vbmVcIlxuICBbdG9nZ2xlZF09XCJzcHJlYWQgPT09ICdvZmYnXCJcbiAgW2FjdGlvbl09XCJvbkNsaWNrXCJcbiAgbDEwbkxhYmVsPVwic3ByZWFkX25vbmVfbGFiZWxcIlxuICBbb3JkZXJdPVwiMjAwMFwiXG4gIFtjbG9zZU9uQ2xpY2tdPVwiZmFsc2VcIlxuICBbZGlzYWJsZWRdPVwic2Nyb2xsTW9kZSA9PT0gMVwiXG4gIGltYWdlPVwiPHN2ZyBzdHlsZT0nd2lkdGg6IDI0cHg7IGhlaWdodDogMjRweDsgbWFyZ2luLXRvcDogM3B4JyB2aWV3Qm94PScwIDAgMjQgMjQnPjxwYXRoIGZpbGw9J2N1cnJlbnRDb2xvcicgZD0nTTYgM2MtMSAwLTEuNS41LTEuNSAxLjV2N2MwIDEgLjUgMS41IDEuNSAxLjVoNGMxIDAgMS41LS41IDEuNS0xLjV2LTdjMC0xLS41LTEuNS0xLjUtMS41eicgLz48L3N2Zz5cIlxuPlxuPC9wZGYtc2h5LWJ1dHRvbj5cbiJdfQ==