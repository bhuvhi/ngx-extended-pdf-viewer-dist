import { Component, EventEmitter, Input, NgZone, Output } from '@angular/core';
import { take } from 'rxjs/operators';
import { ScrollMode } from '../../options/pdf-scroll-mode';
import { ScrollModeType } from '../../options/pdf-viewer';
import { PDFNotificationService } from '../../pdf-notification-service';
import * as i0 from "@angular/core";
import * as i1 from "../../pdf-notification-service";
import * as i2 from "../pdf-shy-button/pdf-shy-button.component";
import * as i3 from "../../responsive-visibility";
export class PdfWrappedScrollModeComponent {
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
                PDFViewerApplication.eventBus.dispatch('switchscrollmode', { mode: ScrollMode.WRAPPED });
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
/** @nocollapse */ PdfWrappedScrollModeComponent.ɵfac = function PdfWrappedScrollModeComponent_Factory(t) { return new (t || PdfWrappedScrollModeComponent)(i0.ɵɵdirectiveInject(i1.PDFNotificationService), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ PdfWrappedScrollModeComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfWrappedScrollModeComponent, selectors: [["pdf-wrapped-scroll-mode"]], inputs: { show: "show", scrollMode: "scrollMode", pageViewMode: "pageViewMode" }, outputs: { pageViewModeChange: "pageViewModeChange" }, decls: 2, vars: 8, consts: [["title", "Wrapped Scrolling", "primaryToolbarId", "scrollWrapped", "l10nId", "scroll_wrapped", "l10nLabel", "scroll_wrapped_label", "image", "<svg style='width: 24px; height: 24px; margin-top: 3px' viewBox='0 0 24 24'><path fill='currentColor' d='M5.5 4c1 0 1.5.5 1.5 1.5v5c0 1-.5 1.5-1.5 1.5h-3c-1 0-1.5-.5-1.5-1.5v-5C1 4.5 1.5 4 2.5 4zM7 0v.5C7 1.5 6.5 2 5.5 2h-3C1.5 2 1 1.5 1 .5V0h6zM7 16v-.5c0-1-.5-1.5-1.5-1.5h-3c-1 0-1.5.5-1.5 1.5v.5h6zM13.5 4c1 0 1.5.5 1.5 1.5v5c0 1-.5 1.5-1.5 1.5h-3c-1 0-1.5-.5-1.5-1.5v-5c0-1 .5-1.5 1.5-1.5zM15 0v.5c0 1-.5 1.5-1.5 1.5h-3C9.5 2 9 1.5 9 .5V0h6zM15 16v-.507c0-1-.5-1.5-1.5-1.5h-3C9.5 14 9 14.5 9 15.5v.5h6z' /></svg>", 3, "cssClass", "toggled", "action", "order", "closeOnClick"]], template: function PdfWrappedScrollModeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "pdf-shy-button", 0);
        i0.ɵɵpipe(1, "responsiveCSSClass");
    } if (rf & 2) {
        i0.ɵɵproperty("cssClass", i0.ɵɵpipeBind2(1, 5, ctx.show, "always-in-secondary-menu"))("toggled", ctx.scrollMode == 2)("action", ctx.onClick)("order", 3300)("closeOnClick", false);
    } }, directives: [i2.PdfShyButtonComponent], pipes: [i3.ResponsiveCSSClassPipe], styles: ["button[_ngcontent-%COMP%]{padding:0;margin-top:0;margin-bottom:0}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfWrappedScrollModeComponent, [{
        type: Component,
        args: [{ selector: 'pdf-wrapped-scroll-mode', template: "<pdf-shy-button\n  [cssClass]=\"show | responsiveCSSClass : 'always-in-secondary-menu'\"\n  title=\"Wrapped Scrolling\"\n  primaryToolbarId=\"scrollWrapped\"\n  [toggled]=\"scrollMode == 2\"\n  l10nId=\"scroll_wrapped\"\n  [action]=\"onClick\"\n  l10nLabel=\"scroll_wrapped_label\"\n  [order]=\"3300\"\n  [closeOnClick]=\"false\"\n  image=\"<svg style='width: 24px; height: 24px; margin-top: 3px' viewBox='0 0 24 24'><path fill='currentColor' d='M5.5 4c1 0 1.5.5 1.5 1.5v5c0 1-.5 1.5-1.5 1.5h-3c-1 0-1.5-.5-1.5-1.5v-5C1 4.5 1.5 4 2.5 4zM7 0v.5C7 1.5 6.5 2 5.5 2h-3C1.5 2 1 1.5 1 .5V0h6zM7 16v-.5c0-1-.5-1.5-1.5-1.5h-3c-1 0-1.5.5-1.5 1.5v.5h6zM13.5 4c1 0 1.5.5 1.5 1.5v5c0 1-.5 1.5-1.5 1.5h-3c-1 0-1.5-.5-1.5-1.5v-5c0-1 .5-1.5 1.5-1.5zM15 0v.5c0 1-.5 1.5-1.5 1.5h-3C9.5 2 9 1.5 9 .5V0h6zM15 16v-.507c0-1-.5-1.5-1.5-1.5h-3C9.5 14 9 14.5 9 15.5v.5h6z' /></svg>\"\n>\n</pdf-shy-button>\n", styles: ["button{padding:0;margin-top:0;margin-bottom:0}\n"] }]
    }], function () { return [{ type: i1.PDFNotificationService }, { type: i0.NgZone }]; }, { show: [{
            type: Input
        }], scrollMode: [{
            type: Input
        }], pageViewMode: [{
            type: Input
        }], pageViewModeChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXdyYXBwZWQtc2Nyb2xsLW1vZGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi90b29sYmFyL3BkZi13cmFwcGVkLXNjcm9sbC1tb2RlL3BkZi13cmFwcGVkLXNjcm9sbC1tb2RlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtd3JhcHBlZC1zY3JvbGwtbW9kZS9wZGYtd3JhcHBlZC1zY3JvbGwtbW9kZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzNELE9BQU8sRUFBb0IsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFNUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7O0FBUXhFLE1BQU0sT0FBTyw2QkFBNkI7SUFleEMsWUFBb0IsbUJBQTJDLEVBQVUsTUFBYztRQUFuRSx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQWJoRixTQUFJLEdBQXlCLElBQUksQ0FBQztRQVNsQyx1QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBb0IsQ0FBQztRQUsvRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ2hFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztRQUNILE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztRQUN4QyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsRUFBRTtZQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7Z0JBQ25CLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxVQUFVLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxpQkFBaUIsRUFBRTtvQkFDL0UsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztpQkFDMUI7Z0JBQ0QsTUFBTSxvQkFBb0IsR0FBMkIsTUFBYyxDQUFDLG9CQUFvQixDQUFDO2dCQUN6RixvQkFBb0IsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGtCQUFrQixFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1lBQzNGLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVNLFdBQVc7UUFDaEIsTUFBTSxvQkFBb0IsR0FBMkIsTUFBYyxDQUFDLG9CQUFvQixDQUFDO1FBQ3pGLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUM3RCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztZQUMvQixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7NkhBdENVLDZCQUE2QjsrR0FBN0IsNkJBQTZCO1FDYjFDLG9DQVlpQjs7O1FBWGYscUZBQW1FLGdDQUFBLHVCQUFBLGVBQUEsdUJBQUE7O3VGRFl4RCw2QkFBNkI7Y0FMekMsU0FBUzsyQkFDRSx5QkFBeUI7OEZBTTVCLElBQUk7a0JBRFYsS0FBSztZQUlDLFVBQVU7a0JBRGhCLEtBQUs7WUFJQyxZQUFZO2tCQURsQixLQUFLO1lBSUMsa0JBQWtCO2tCQUR4QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBOZ1pvbmUsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFNjcm9sbE1vZGUgfSBmcm9tICcuLi8uLi9vcHRpb25zL3BkZi1zY3JvbGwtbW9kZSc7XG5pbXBvcnQgeyBQYWdlVmlld01vZGVUeXBlLCBTY3JvbGxNb2RlVHlwZSB9IGZyb20gJy4uLy4uL29wdGlvbnMvcGRmLXZpZXdlcic7XG5pbXBvcnQgeyBJUERGVmlld2VyQXBwbGljYXRpb24gfSBmcm9tICcuLi8uLi9vcHRpb25zL3BkZi12aWV3ZXItYXBwbGljYXRpb24nO1xuaW1wb3J0IHsgUERGTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3BkZi1ub3RpZmljYXRpb24tc2VydmljZSc7XG5pbXBvcnQgeyBSZXNwb25zaXZlVmlzaWJpbGl0eSB9IGZyb20gJy4uLy4uL3Jlc3BvbnNpdmUtdmlzaWJpbGl0eSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BkZi13cmFwcGVkLXNjcm9sbC1tb2RlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BkZi13cmFwcGVkLXNjcm9sbC1tb2RlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGRmLXdyYXBwZWQtc2Nyb2xsLW1vZGUuY29tcG9uZW50LmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBQZGZXcmFwcGVkU2Nyb2xsTW9kZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93OiBSZXNwb25zaXZlVmlzaWJpbGl0eSA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNjcm9sbE1vZGU6IFNjcm9sbE1vZGVUeXBlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBwYWdlVmlld01vZGU6IFBhZ2VWaWV3TW9kZVR5cGU7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBwYWdlVmlld01vZGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFBhZ2VWaWV3TW9kZVR5cGU+KCk7XG5cbiAgcHVibGljIG9uQ2xpY2s6ICgpID0+IHZvaWQ7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBub3RpZmljYXRpb25TZXJ2aWNlOiBQREZOb3RpZmljYXRpb25TZXJ2aWNlLCBwcml2YXRlIG5nWm9uZTogTmdab25lKSB7XG4gICAgdGhpcy5ub3RpZmljYXRpb25TZXJ2aWNlLm9uUERGSlNJbml0LnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMub25QZGZKc0luaXQoKTtcbiAgICB9KTtcbiAgICBjb25zdCBlbWl0dGVyID0gdGhpcy5wYWdlVmlld01vZGVDaGFuZ2U7XG4gICAgdGhpcy5vbkNsaWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMucGFnZVZpZXdNb2RlICE9PSAnbXVsdGlwbGUnICYmIHRoaXMucGFnZVZpZXdNb2RlICE9PSAnaW5maW5pdGUtc2Nyb2xsJykge1xuICAgICAgICAgIGVtaXR0ZXIuZW1pdCgnbXVsdGlwbGUnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5kaXNwYXRjaCgnc3dpdGNoc2Nyb2xsbW9kZScsIHsgbW9kZTogU2Nyb2xsTW9kZS5XUkFQUEVEIH0pO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBvblBkZkpzSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdzd2l0Y2hzY3JvbGxtb2RlJywgKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLnNjcm9sbE1vZGUgPSBldmVudC5tb2RlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiIsIjxwZGYtc2h5LWJ1dHRvblxuICBbY3NzQ2xhc3NdPVwic2hvdyB8IHJlc3BvbnNpdmVDU1NDbGFzcyA6ICdhbHdheXMtaW4tc2Vjb25kYXJ5LW1lbnUnXCJcbiAgdGl0bGU9XCJXcmFwcGVkIFNjcm9sbGluZ1wiXG4gIHByaW1hcnlUb29sYmFySWQ9XCJzY3JvbGxXcmFwcGVkXCJcbiAgW3RvZ2dsZWRdPVwic2Nyb2xsTW9kZSA9PSAyXCJcbiAgbDEwbklkPVwic2Nyb2xsX3dyYXBwZWRcIlxuICBbYWN0aW9uXT1cIm9uQ2xpY2tcIlxuICBsMTBuTGFiZWw9XCJzY3JvbGxfd3JhcHBlZF9sYWJlbFwiXG4gIFtvcmRlcl09XCIzMzAwXCJcbiAgW2Nsb3NlT25DbGlja109XCJmYWxzZVwiXG4gIGltYWdlPVwiPHN2ZyBzdHlsZT0nd2lkdGg6IDI0cHg7IGhlaWdodDogMjRweDsgbWFyZ2luLXRvcDogM3B4JyB2aWV3Qm94PScwIDAgMjQgMjQnPjxwYXRoIGZpbGw9J2N1cnJlbnRDb2xvcicgZD0nTTUuNSA0YzEgMCAxLjUuNSAxLjUgMS41djVjMCAxLS41IDEuNS0xLjUgMS41aC0zYy0xIDAtMS41LS41LTEuNS0xLjV2LTVDMSA0LjUgMS41IDQgMi41IDR6TTcgMHYuNUM3IDEuNSA2LjUgMiA1LjUgMmgtM0MxLjUgMiAxIDEuNSAxIC41VjBoNnpNNyAxNnYtLjVjMC0xLS41LTEuNS0xLjUtMS41aC0zYy0xIDAtMS41LjUtMS41IDEuNXYuNWg2ek0xMy41IDRjMSAwIDEuNS41IDEuNSAxLjV2NWMwIDEtLjUgMS41LTEuNSAxLjVoLTNjLTEgMC0xLjUtLjUtMS41LTEuNXYtNWMwLTEgLjUtMS41IDEuNS0xLjV6TTE1IDB2LjVjMCAxLS41IDEuNS0xLjUgMS41aC0zQzkuNSAyIDkgMS41IDkgLjVWMGg2ek0xNSAxNnYtLjUwN2MwLTEtLjUtMS41LTEuNS0xLjVoLTNDOS41IDE0IDkgMTQuNSA5IDE1LjV2LjVoNnonIC8+PC9zdmc+XCJcbj5cbjwvcGRmLXNoeS1idXR0b24+XG4iXX0=