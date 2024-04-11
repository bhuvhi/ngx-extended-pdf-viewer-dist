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
        args: [{ selector: 'pdf-vertical-scroll-mode', template: "<pdf-shy-button\r\n  [cssClass]=\"show | responsiveCSSClass : 'always-in-secondary-menu'\"\r\n  title=\"Use Vertical Scrolling\"\r\n  primaryToolbarId=\"scrollVertical\"\r\n  l10nId=\"scroll_vertical\"\r\n  [toggled]=\"scrollMode == 0 && pageViewMode !== 'book'\"\r\n  [action]=\"onClick\"\r\n  l10nLabel=\"scroll_vertical_label\"\r\n  [order]=\"3100\"\r\n  [closeOnClick]=\"false\"\r\n  image=\"<svg style='width: 24px; height: 24px; margin-top: 3px' viewBox='0 0 24 24'><path fill='currentColor' d='M9.5 4c1 0 1.5.5 1.5 1.5v5c0 1-.5 1.5-1.5 1.5h-3c-1 0-1.5-.5-1.5-1.5v-5C5 4.5 5.5 4 6.5 4zM11 0v.5c0 1-.5 1.5-1.5 1.5h-3C5.5 2 5 1.5 5 .5V0h6zM11 16v-.5c0-1-.5-1.5-1.5-1.5h-3c-1 0-1.5.5-1.5 1.5v.5h6z' /></svg>\"\r\n>\r\n</pdf-shy-button>\r\n", styles: ["button{padding:0;margin-top:0;margin-bottom:0}\n"] }]
    }], function () { return [{ type: i1.PDFNotificationService }, { type: i0.NgZone }]; }, { show: [{
            type: Input
        }], scrollMode: [{
            type: Input
        }], pageViewMode: [{
            type: Input
        }], pageViewModeChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXZlcnRpY2FsLXNjcm9sbC1tb2RlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtdmVydGljYWwtc2Nyb2xsLWJ1dHRvbi9wZGYtdmVydGljYWwtc2Nyb2xsLW1vZGUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi90b29sYmFyL3BkZi12ZXJ0aWNhbC1zY3JvbGwtYnV0dG9uL3BkZi12ZXJ0aWNhbC1zY3JvbGwtbW9kZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzNELE9BQU8sRUFBb0IsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFNUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7O0FBUXhFLE1BQU0sT0FBTyw4QkFBOEI7SUFlekMsWUFBb0IsbUJBQTJDLEVBQVUsTUFBYztRQUFuRSx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQWJoRixTQUFJLEdBQXlCLElBQUksQ0FBQztRQVNsQyx1QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBb0IsQ0FBQztRQUsvRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ2hFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztRQUNILE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztRQUN4QyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsRUFBRTtZQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7Z0JBQ25CLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxVQUFVLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxpQkFBaUIsRUFBRTtvQkFDL0UsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztpQkFDMUI7Z0JBQ0QsTUFBTSxvQkFBb0IsR0FBMkIsTUFBYyxDQUFDLG9CQUFvQixDQUFDO2dCQUN6RixvQkFBb0IsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGtCQUFrQixFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQzVGLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVNLFdBQVc7UUFDaEIsTUFBTSxvQkFBb0IsR0FBMkIsTUFBYyxDQUFDLG9CQUFvQixDQUFDO1FBQ3pGLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUM3RCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztZQUMvQixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7K0hBdENVLDhCQUE4QjtnSEFBOUIsOEJBQThCO1FDYjNDLG9DQVlpQjs7O1FBWGYscUZBQW1FLCtEQUFBLHVCQUFBLGVBQUEsdUJBQUE7O3VGRFl4RCw4QkFBOEI7Y0FMMUMsU0FBUzsyQkFDRSwwQkFBMEI7OEZBTTdCLElBQUk7a0JBRFYsS0FBSztZQUlDLFVBQVU7a0JBRGhCLEtBQUs7WUFJQyxZQUFZO2tCQURsQixLQUFLO1lBSUMsa0JBQWtCO2tCQUR4QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBOZ1pvbmUsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBTY3JvbGxNb2RlIH0gZnJvbSAnLi4vLi4vb3B0aW9ucy9wZGYtc2Nyb2xsLW1vZGUnO1xyXG5pbXBvcnQgeyBQYWdlVmlld01vZGVUeXBlLCBTY3JvbGxNb2RlVHlwZSB9IGZyb20gJy4uLy4uL29wdGlvbnMvcGRmLXZpZXdlcic7XHJcbmltcG9ydCB7IElQREZWaWV3ZXJBcHBsaWNhdGlvbiB9IGZyb20gJy4uLy4uL29wdGlvbnMvcGRmLXZpZXdlci1hcHBsaWNhdGlvbic7XHJcbmltcG9ydCB7IFBERk5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9wZGYtbm90aWZpY2F0aW9uLXNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSZXNwb25zaXZlVmlzaWJpbGl0eSB9IGZyb20gJy4uLy4uL3Jlc3BvbnNpdmUtdmlzaWJpbGl0eSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BkZi12ZXJ0aWNhbC1zY3JvbGwtbW9kZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BkZi12ZXJ0aWNhbC1zY3JvbGwtbW9kZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGRmLXZlcnRpY2FsLXNjcm9sbC1tb2RlLmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBkZlZlcnRpY2FsU2Nyb2xsTW9kZUNvbXBvbmVudCB7XHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvdzogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzY3JvbGxNb2RlOiBTY3JvbGxNb2RlVHlwZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgcGFnZVZpZXdNb2RlOiBQYWdlVmlld01vZGVUeXBlO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgcGFnZVZpZXdNb2RlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxQYWdlVmlld01vZGVUeXBlPigpO1xyXG5cclxuICBwdWJsaWMgb25DbGljazogKCkgPT4gdm9pZDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBub3RpZmljYXRpb25TZXJ2aWNlOiBQREZOb3RpZmljYXRpb25TZXJ2aWNlLCBwcml2YXRlIG5nWm9uZTogTmdab25lKSB7XHJcbiAgICB0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2Uub25QREZKU0luaXQucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLm9uUGRmSnNJbml0KCk7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGVtaXR0ZXIgPSB0aGlzLnBhZ2VWaWV3TW9kZUNoYW5nZTtcclxuICAgIHRoaXMub25DbGljayA9ICgpID0+IHtcclxuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5wYWdlVmlld01vZGUgIT09ICdtdWx0aXBsZScgJiYgdGhpcy5wYWdlVmlld01vZGUgIT09ICdpbmZpbml0ZS1zY3JvbGwnKSB7XHJcbiAgICAgICAgICBlbWl0dGVyLmVtaXQoJ211bHRpcGxlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XHJcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMuZGlzcGF0Y2goJ3N3aXRjaHNjcm9sbG1vZGUnLCB7IG1vZGU6IFNjcm9sbE1vZGUuVkVSVElDQUwgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvblBkZkpzSW5pdCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XHJcbiAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbignc3dpdGNoc2Nyb2xsbW9kZScsIChldmVudCkgPT4ge1xyXG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsTW9kZSA9IGV2ZW50Lm1vZGU7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsIjxwZGYtc2h5LWJ1dHRvblxyXG4gIFtjc3NDbGFzc109XCJzaG93IHwgcmVzcG9uc2l2ZUNTU0NsYXNzIDogJ2Fsd2F5cy1pbi1zZWNvbmRhcnktbWVudSdcIlxyXG4gIHRpdGxlPVwiVXNlIFZlcnRpY2FsIFNjcm9sbGluZ1wiXHJcbiAgcHJpbWFyeVRvb2xiYXJJZD1cInNjcm9sbFZlcnRpY2FsXCJcclxuICBsMTBuSWQ9XCJzY3JvbGxfdmVydGljYWxcIlxyXG4gIFt0b2dnbGVkXT1cInNjcm9sbE1vZGUgPT0gMCAmJiBwYWdlVmlld01vZGUgIT09ICdib29rJ1wiXHJcbiAgW2FjdGlvbl09XCJvbkNsaWNrXCJcclxuICBsMTBuTGFiZWw9XCJzY3JvbGxfdmVydGljYWxfbGFiZWxcIlxyXG4gIFtvcmRlcl09XCIzMTAwXCJcclxuICBbY2xvc2VPbkNsaWNrXT1cImZhbHNlXCJcclxuICBpbWFnZT1cIjxzdmcgc3R5bGU9J3dpZHRoOiAyNHB4OyBoZWlnaHQ6IDI0cHg7IG1hcmdpbi10b3A6IDNweCcgdmlld0JveD0nMCAwIDI0IDI0Jz48cGF0aCBmaWxsPSdjdXJyZW50Q29sb3InIGQ9J005LjUgNGMxIDAgMS41LjUgMS41IDEuNXY1YzAgMS0uNSAxLjUtMS41IDEuNWgtM2MtMSAwLTEuNS0uNS0xLjUtMS41di01QzUgNC41IDUuNSA0IDYuNSA0ek0xMSAwdi41YzAgMS0uNSAxLjUtMS41IDEuNWgtM0M1LjUgMiA1IDEuNSA1IC41VjBoNnpNMTEgMTZ2LS41YzAtMS0uNS0xLjUtMS41LTEuNWgtM2MtMSAwLTEuNS41LTEuNSAxLjV2LjVoNnonIC8+PC9zdmc+XCJcclxuPlxyXG48L3BkZi1zaHktYnV0dG9uPlxyXG4iXX0=