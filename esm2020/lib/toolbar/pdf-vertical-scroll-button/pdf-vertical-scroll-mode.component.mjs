import { Component, EventEmitter, Input, NgZone, Output } from '@angular/core';
import { take } from 'rxjs/operators';
import { ScrollMode } from '../../options/pdf-scroll-mode';
import { ScrollModeType } from '../../options/pdf-viewer';
import { PDFNotificationService } from '../../pdf-notification-service';
import * as i0 from "@angular/core";
import * as i1 from "../../pdf-notification-service";
import * as i2 from "../pdf-shy-button/pdf-shy-button.component";
import * as i3 from "../../responsive-visibility";
export class PdfVerticalScrollModeComponent {
    constructor(notificationService, ngZone) {
        this.notificationService = notificationService;
        this.ngZone = ngZone;
        this.show = true;
        this.pageViewModeChange = new EventEmitter();
        this.notificationService.onPDFJSInit.pipe(take(1)).subscribe(() => {
            this.onPdfJsInit();
        });
        const emitter = this.pageViewModeChange;
        this.onClick = () => {
            this.ngZone.run(() => {
                if (this.pageViewMode !== 'multiple' && this.pageViewMode !== 'infinite-scroll') {
                    emitter.emit('multiple');
                }
                const PDFViewerApplication = window.PDFViewerApplication;
                PDFViewerApplication.eventBus.dispatch('switchscrollmode', { mode: ScrollMode.VERTICAL });
            });
        };
    }
    onPdfJsInit() {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.eventBus.on('switchscrollmode', (event) => {
            this.ngZone.run(() => {
                this.scrollMode = event.mode;
            });
        });
    }
}
/** @nocollapse */ PdfVerticalScrollModeComponent.ɵfac = function PdfVerticalScrollModeComponent_Factory(t) { return new (t || PdfVerticalScrollModeComponent)(i0.ɵɵdirectiveInject(i1.PDFNotificationService), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ PdfVerticalScrollModeComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfVerticalScrollModeComponent, selectors: [["pdf-vertical-scroll-mode"]], inputs: { show: "show", scrollMode: "scrollMode", pageViewMode: "pageViewMode" }, outputs: { pageViewModeChange: "pageViewModeChange" }, decls: 2, vars: 8, consts: [["title", "Use Vertical Scrolling", "primaryToolbarId", "scrollVertical", "l10nId", "scroll_vertical", "l10nLabel", "scroll_vertical_label", "image", "<svg style='width: 24px; height: 24px; margin-top: 3px' viewBox='0 0 24 24'><path fill='currentColor' d='M9.5 4c1 0 1.5.5 1.5 1.5v5c0 1-.5 1.5-1.5 1.5h-3c-1 0-1.5-.5-1.5-1.5v-5C5 4.5 5.5 4 6.5 4zM11 0v.5c0 1-.5 1.5-1.5 1.5h-3C5.5 2 5 1.5 5 .5V0h6zM11 16v-.5c0-1-.5-1.5-1.5-1.5h-3c-1 0-1.5.5-1.5 1.5v.5h6z' /></svg>", 3, "cssClass", "toggled", "action", "order", "closeOnClick"]], template: function PdfVerticalScrollModeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "pdf-shy-button", 0);
        i0.ɵɵpipe(1, "responsiveCSSClass");
    } if (rf & 2) {
        i0.ɵɵproperty("cssClass", i0.ɵɵpipeBind2(1, 5, ctx.show, "always-in-secondary-menu"))("toggled", ctx.scrollMode == 0 && ctx.pageViewMode !== "book")("action", ctx.onClick)("order", 3100)("closeOnClick", false);
    } }, directives: [i2.PdfShyButtonComponent], pipes: [i3.ResponsiveCSSClassPipe], styles: ["button[_ngcontent-%COMP%]{padding:0;margin-top:0;margin-bottom:0}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfVerticalScrollModeComponent, [{
        type: Component,
        args: [{ selector: 'pdf-vertical-scroll-mode', template: "<pdf-shy-button\n  [cssClass]=\"show | responsiveCSSClass : 'always-in-secondary-menu'\"\n  title=\"Use Vertical Scrolling\"\n  primaryToolbarId=\"scrollVertical\"\n  l10nId=\"scroll_vertical\"\n  [toggled]=\"scrollMode == 0 && pageViewMode !== 'book'\"\n  [action]=\"onClick\"\n  l10nLabel=\"scroll_vertical_label\"\n  [order]=\"3100\"\n  [closeOnClick]=\"false\"\n  image=\"<svg style='width: 24px; height: 24px; margin-top: 3px' viewBox='0 0 24 24'><path fill='currentColor' d='M9.5 4c1 0 1.5.5 1.5 1.5v5c0 1-.5 1.5-1.5 1.5h-3c-1 0-1.5-.5-1.5-1.5v-5C5 4.5 5.5 4 6.5 4zM11 0v.5c0 1-.5 1.5-1.5 1.5h-3C5.5 2 5 1.5 5 .5V0h6zM11 16v-.5c0-1-.5-1.5-1.5-1.5h-3c-1 0-1.5.5-1.5 1.5v.5h6z' /></svg>\"\n>\n</pdf-shy-button>\n", styles: ["button{padding:0;margin-top:0;margin-bottom:0}\n"] }]
    }], function () { return [{ type: i1.PDFNotificationService }, { type: i0.NgZone }]; }, { show: [{
            type: Input
        }], scrollMode: [{
            type: Input
        }], pageViewMode: [{
            type: Input
        }], pageViewModeChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXZlcnRpY2FsLXNjcm9sbC1tb2RlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtdmVydGljYWwtc2Nyb2xsLWJ1dHRvbi9wZGYtdmVydGljYWwtc2Nyb2xsLW1vZGUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi90b29sYmFyL3BkZi12ZXJ0aWNhbC1zY3JvbGwtYnV0dG9uL3BkZi12ZXJ0aWNhbC1zY3JvbGwtbW9kZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzNELE9BQU8sRUFBb0IsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFNUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7O0FBUXhFLE1BQU0sT0FBTyw4QkFBOEI7SUFlekMsWUFBb0IsbUJBQTJDLEVBQVUsTUFBYztRQUFuRSx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQWJoRixTQUFJLEdBQXlCLElBQUksQ0FBQztRQVNsQyx1QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBb0IsQ0FBQztRQUsvRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ2hFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztRQUNILE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztRQUN4QyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsRUFBRTtZQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7Z0JBQ25CLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxVQUFVLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxpQkFBaUIsRUFBRTtvQkFDL0UsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztpQkFDMUI7Z0JBQ0QsTUFBTSxvQkFBb0IsR0FBMkIsTUFBYyxDQUFDLG9CQUFvQixDQUFDO2dCQUN6RixvQkFBb0IsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGtCQUFrQixFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQzVGLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVNLFdBQVc7UUFDaEIsTUFBTSxvQkFBb0IsR0FBMkIsTUFBYyxDQUFDLG9CQUFvQixDQUFDO1FBQ3pGLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUM3RCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztZQUMvQixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7K0hBdENVLDhCQUE4QjtnSEFBOUIsOEJBQThCO1FDYjNDLG9DQVlpQjs7O1FBWGYscUZBQW1FLCtEQUFBLHVCQUFBLGVBQUEsdUJBQUE7O3VGRFl4RCw4QkFBOEI7Y0FMMUMsU0FBUzsyQkFDRSwwQkFBMEI7OEZBTTdCLElBQUk7a0JBRFYsS0FBSztZQUlDLFVBQVU7a0JBRGhCLEtBQUs7WUFJQyxZQUFZO2tCQURsQixLQUFLO1lBSUMsa0JBQWtCO2tCQUR4QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBOZ1pvbmUsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFNjcm9sbE1vZGUgfSBmcm9tICcuLi8uLi9vcHRpb25zL3BkZi1zY3JvbGwtbW9kZSc7XG5pbXBvcnQgeyBQYWdlVmlld01vZGVUeXBlLCBTY3JvbGxNb2RlVHlwZSB9IGZyb20gJy4uLy4uL29wdGlvbnMvcGRmLXZpZXdlcic7XG5pbXBvcnQgeyBJUERGVmlld2VyQXBwbGljYXRpb24gfSBmcm9tICcuLi8uLi9vcHRpb25zL3BkZi12aWV3ZXItYXBwbGljYXRpb24nO1xuaW1wb3J0IHsgUERGTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3BkZi1ub3RpZmljYXRpb24tc2VydmljZSc7XG5pbXBvcnQgeyBSZXNwb25zaXZlVmlzaWJpbGl0eSB9IGZyb20gJy4uLy4uL3Jlc3BvbnNpdmUtdmlzaWJpbGl0eSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BkZi12ZXJ0aWNhbC1zY3JvbGwtbW9kZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9wZGYtdmVydGljYWwtc2Nyb2xsLW1vZGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wZGYtdmVydGljYWwtc2Nyb2xsLW1vZGUuY29tcG9uZW50LmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBQZGZWZXJ0aWNhbFNjcm9sbE1vZGVDb21wb25lbnQge1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvdzogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzY3JvbGxNb2RlOiBTY3JvbGxNb2RlVHlwZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgcGFnZVZpZXdNb2RlOiBQYWdlVmlld01vZGVUeXBlO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgcGFnZVZpZXdNb2RlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxQYWdlVmlld01vZGVUeXBlPigpO1xuXG4gIHB1YmxpYyBvbkNsaWNrOiAoKSA9PiB2b2lkO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbm90aWZpY2F0aW9uU2VydmljZTogUERGTm90aWZpY2F0aW9uU2VydmljZSwgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSkge1xuICAgIHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5vblBERkpTSW5pdC5waXBlKHRha2UoMSkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLm9uUGRmSnNJbml0KCk7XG4gICAgfSk7XG4gICAgY29uc3QgZW1pdHRlciA9IHRoaXMucGFnZVZpZXdNb2RlQ2hhbmdlO1xuICAgIHRoaXMub25DbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnBhZ2VWaWV3TW9kZSAhPT0gJ211bHRpcGxlJyAmJiB0aGlzLnBhZ2VWaWV3TW9kZSAhPT0gJ2luZmluaXRlLXNjcm9sbCcpIHtcbiAgICAgICAgICBlbWl0dGVyLmVtaXQoJ211bHRpcGxlJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMuZGlzcGF0Y2goJ3N3aXRjaHNjcm9sbG1vZGUnLCB7IG1vZGU6IFNjcm9sbE1vZGUuVkVSVElDQUwgfSk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIG9uUGRmSnNJbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ3N3aXRjaHNjcm9sbG1vZGUnLCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMuc2Nyb2xsTW9kZSA9IGV2ZW50Lm1vZGU7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIiwiPHBkZi1zaHktYnV0dG9uXG4gIFtjc3NDbGFzc109XCJzaG93IHwgcmVzcG9uc2l2ZUNTU0NsYXNzIDogJ2Fsd2F5cy1pbi1zZWNvbmRhcnktbWVudSdcIlxuICB0aXRsZT1cIlVzZSBWZXJ0aWNhbCBTY3JvbGxpbmdcIlxuICBwcmltYXJ5VG9vbGJhcklkPVwic2Nyb2xsVmVydGljYWxcIlxuICBsMTBuSWQ9XCJzY3JvbGxfdmVydGljYWxcIlxuICBbdG9nZ2xlZF09XCJzY3JvbGxNb2RlID09IDAgJiYgcGFnZVZpZXdNb2RlICE9PSAnYm9vaydcIlxuICBbYWN0aW9uXT1cIm9uQ2xpY2tcIlxuICBsMTBuTGFiZWw9XCJzY3JvbGxfdmVydGljYWxfbGFiZWxcIlxuICBbb3JkZXJdPVwiMzEwMFwiXG4gIFtjbG9zZU9uQ2xpY2tdPVwiZmFsc2VcIlxuICBpbWFnZT1cIjxzdmcgc3R5bGU9J3dpZHRoOiAyNHB4OyBoZWlnaHQ6IDI0cHg7IG1hcmdpbi10b3A6IDNweCcgdmlld0JveD0nMCAwIDI0IDI0Jz48cGF0aCBmaWxsPSdjdXJyZW50Q29sb3InIGQ9J005LjUgNGMxIDAgMS41LjUgMS41IDEuNXY1YzAgMS0uNSAxLjUtMS41IDEuNWgtM2MtMSAwLTEuNS0uNS0xLjUtMS41di01QzUgNC41IDUuNSA0IDYuNSA0ek0xMSAwdi41YzAgMS0uNSAxLjUtMS41IDEuNWgtM0M1LjUgMiA1IDEuNSA1IC41VjBoNnpNMTEgMTZ2LS41YzAtMS0uNS0xLjUtMS41LTEuNWgtM2MtMSAwLTEuNS41LTEuNSAxLjV2LjVoNnonIC8+PC9zdmc+XCJcbj5cbjwvcGRmLXNoeS1idXR0b24+XG4iXX0=