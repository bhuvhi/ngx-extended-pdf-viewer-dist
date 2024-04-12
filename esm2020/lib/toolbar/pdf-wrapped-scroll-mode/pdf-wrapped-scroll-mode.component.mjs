import { Component, EventEmitter, Input, Output } from '@angular/core';
import { take } from 'rxjs/operators';
import { ScrollMode } from '../../options/pdf-scroll-mode';
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
PdfWrappedScrollModeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfWrappedScrollModeComponent, deps: [{ token: i1.PDFNotificationService }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
PdfWrappedScrollModeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfWrappedScrollModeComponent, selector: "pdf-wrapped-scroll-mode", inputs: { show: "show", scrollMode: "scrollMode", pageViewMode: "pageViewMode" }, outputs: { pageViewModeChange: "pageViewModeChange" }, ngImport: i0, template: "<pdf-shy-button\r\n  [cssClass]=\"show | responsiveCSSClass : 'always-in-secondary-menu'\"\r\n  title=\"Wrapped Scrolling\"\r\n  primaryToolbarId=\"scrollWrapped\"\r\n  [toggled]=\"scrollMode == 2\"\r\n  l10nId=\"scroll_wrapped\"\r\n  [action]=\"onClick\"\r\n  l10nLabel=\"scroll_wrapped_label\"\r\n  [order]=\"3300\"\r\n  [closeOnClick]=\"false\"\r\n  image=\"<svg style='width: 24px; height: 24px; margin-top: 3px' viewBox='0 0 24 24'><path fill='currentColor' d='M5.5 4c1 0 1.5.5 1.5 1.5v5c0 1-.5 1.5-1.5 1.5h-3c-1 0-1.5-.5-1.5-1.5v-5C1 4.5 1.5 4 2.5 4zM7 0v.5C7 1.5 6.5 2 5.5 2h-3C1.5 2 1 1.5 1 .5V0h6zM7 16v-.5c0-1-.5-1.5-1.5-1.5h-3c-1 0-1.5.5-1.5 1.5v.5h6zM13.5 4c1 0 1.5.5 1.5 1.5v5c0 1-.5 1.5-1.5 1.5h-3c-1 0-1.5-.5-1.5-1.5v-5c0-1 .5-1.5 1.5-1.5zM15 0v.5c0 1-.5 1.5-1.5 1.5h-3C9.5 2 9 1.5 9 .5V0h6zM15 16v-.507c0-1-.5-1.5-1.5-1.5h-3C9.5 14 9 14.5 9 15.5v.5h6z' /></svg>\"\r\n>\r\n</pdf-shy-button>\r\n", styles: ["button{padding:0;margin-top:0;margin-bottom:0}\n"], components: [{ type: i2.PdfShyButtonComponent, selector: "pdf-shy-button", inputs: ["primaryToolbarId", "secondaryMenuId", "cssClass", "eventBusName", "l10nId", "l10nLabel", "title", "toggled", "disabled", "order", "action", "closeOnClick", "onlySecondaryMenu", "image"] }], pipes: { "responsiveCSSClass": i3.ResponsiveCSSClassPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfWrappedScrollModeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-wrapped-scroll-mode', template: "<pdf-shy-button\r\n  [cssClass]=\"show | responsiveCSSClass : 'always-in-secondary-menu'\"\r\n  title=\"Wrapped Scrolling\"\r\n  primaryToolbarId=\"scrollWrapped\"\r\n  [toggled]=\"scrollMode == 2\"\r\n  l10nId=\"scroll_wrapped\"\r\n  [action]=\"onClick\"\r\n  l10nLabel=\"scroll_wrapped_label\"\r\n  [order]=\"3300\"\r\n  [closeOnClick]=\"false\"\r\n  image=\"<svg style='width: 24px; height: 24px; margin-top: 3px' viewBox='0 0 24 24'><path fill='currentColor' d='M5.5 4c1 0 1.5.5 1.5 1.5v5c0 1-.5 1.5-1.5 1.5h-3c-1 0-1.5-.5-1.5-1.5v-5C1 4.5 1.5 4 2.5 4zM7 0v.5C7 1.5 6.5 2 5.5 2h-3C1.5 2 1 1.5 1 .5V0h6zM7 16v-.5c0-1-.5-1.5-1.5-1.5h-3c-1 0-1.5.5-1.5 1.5v.5h6zM13.5 4c1 0 1.5.5 1.5 1.5v5c0 1-.5 1.5-1.5 1.5h-3c-1 0-1.5-.5-1.5-1.5v-5c0-1 .5-1.5 1.5-1.5zM15 0v.5c0 1-.5 1.5-1.5 1.5h-3C9.5 2 9 1.5 9 .5V0h6zM15 16v-.507c0-1-.5-1.5-1.5-1.5h-3C9.5 14 9 14.5 9 15.5v.5h6z' /></svg>\"\r\n>\r\n</pdf-shy-button>\r\n", styles: ["button{padding:0;margin-top:0;margin-bottom:0}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.PDFNotificationService }, { type: i0.NgZone }]; }, propDecorators: { show: [{
                type: Input
            }], scrollMode: [{
                type: Input
            }], pageViewMode: [{
                type: Input
            }], pageViewModeChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXdyYXBwZWQtc2Nyb2xsLW1vZGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi90b29sYmFyL3BkZi13cmFwcGVkLXNjcm9sbC1tb2RlL3BkZi13cmFwcGVkLXNjcm9sbC1tb2RlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtd3JhcHBlZC1zY3JvbGwtbW9kZS9wZGYtd3JhcHBlZC1zY3JvbGwtbW9kZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sK0JBQStCLENBQUM7Ozs7O0FBVzNELE1BQU0sT0FBTyw2QkFBNkI7SUFleEMsWUFBb0IsbUJBQTJDLEVBQVUsTUFBYztRQUFuRSx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQWJoRixTQUFJLEdBQXlCLElBQUksQ0FBQztRQVNsQyx1QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBb0IsQ0FBQztRQUsvRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ2hFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztRQUNILE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztRQUN4QyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsRUFBRTtZQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7Z0JBQ25CLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxVQUFVLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxpQkFBaUIsRUFBRTtvQkFDL0UsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztpQkFDMUI7Z0JBQ0QsTUFBTSxvQkFBb0IsR0FBMkIsTUFBYyxDQUFDLG9CQUFvQixDQUFDO2dCQUN6RixvQkFBb0IsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGtCQUFrQixFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1lBQzNGLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVNLFdBQVc7UUFDaEIsTUFBTSxvQkFBb0IsR0FBMkIsTUFBYyxDQUFDLG9CQUFvQixDQUFDO1FBQ3pGLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUM3RCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztZQUMvQixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7MEhBdENVLDZCQUE2Qjs4R0FBN0IsNkJBQTZCLHdNQ2IxQywrNEJBYUE7MkZEQWEsNkJBQTZCO2tCQUx6QyxTQUFTOytCQUNFLHlCQUF5QjtrSUFNNUIsSUFBSTtzQkFEVixLQUFLO2dCQUlDLFVBQVU7c0JBRGhCLEtBQUs7Z0JBSUMsWUFBWTtzQkFEbEIsS0FBSztnQkFJQyxrQkFBa0I7c0JBRHhCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE5nWm9uZSwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFNjcm9sbE1vZGUgfSBmcm9tICcuLi8uLi9vcHRpb25zL3BkZi1zY3JvbGwtbW9kZSc7XHJcbmltcG9ydCB7IFBhZ2VWaWV3TW9kZVR5cGUsIFNjcm9sbE1vZGVUeXBlIH0gZnJvbSAnLi4vLi4vb3B0aW9ucy9wZGYtdmlld2VyJztcclxuaW1wb3J0IHsgSVBERlZpZXdlckFwcGxpY2F0aW9uIH0gZnJvbSAnLi4vLi4vb3B0aW9ucy9wZGYtdmlld2VyLWFwcGxpY2F0aW9uJztcclxuaW1wb3J0IHsgUERGTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3BkZi1ub3RpZmljYXRpb24tc2VydmljZSc7XHJcbmltcG9ydCB7IFJlc3BvbnNpdmVWaXNpYmlsaXR5IH0gZnJvbSAnLi4vLi4vcmVzcG9uc2l2ZS12aXNpYmlsaXR5JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncGRmLXdyYXBwZWQtc2Nyb2xsLW1vZGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wZGYtd3JhcHBlZC1zY3JvbGwtbW9kZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGRmLXdyYXBwZWQtc2Nyb2xsLW1vZGUuY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGRmV3JhcHBlZFNjcm9sbE1vZGVDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3c6IFJlc3BvbnNpdmVWaXNpYmlsaXR5ID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2Nyb2xsTW9kZTogU2Nyb2xsTW9kZVR5cGU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHBhZ2VWaWV3TW9kZTogUGFnZVZpZXdNb2RlVHlwZTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHBhZ2VWaWV3TW9kZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8UGFnZVZpZXdNb2RlVHlwZT4oKTtcclxuXHJcbiAgcHVibGljIG9uQ2xpY2s6ICgpID0+IHZvaWQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbm90aWZpY2F0aW9uU2VydmljZTogUERGTm90aWZpY2F0aW9uU2VydmljZSwgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSkge1xyXG4gICAgdGhpcy5ub3RpZmljYXRpb25TZXJ2aWNlLm9uUERGSlNJbml0LnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5vblBkZkpzSW5pdCgpO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBlbWl0dGVyID0gdGhpcy5wYWdlVmlld01vZGVDaGFuZ2U7XHJcbiAgICB0aGlzLm9uQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMucGFnZVZpZXdNb2RlICE9PSAnbXVsdGlwbGUnICYmIHRoaXMucGFnZVZpZXdNb2RlICE9PSAnaW5maW5pdGUtc2Nyb2xsJykge1xyXG4gICAgICAgICAgZW1pdHRlci5lbWl0KCdtdWx0aXBsZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xyXG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLmRpc3BhdGNoKCdzd2l0Y2hzY3JvbGxtb2RlJywgeyBtb2RlOiBTY3JvbGxNb2RlLldSQVBQRUQgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvblBkZkpzSW5pdCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XHJcbiAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbignc3dpdGNoc2Nyb2xsbW9kZScsIChldmVudCkgPT4ge1xyXG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsTW9kZSA9IGV2ZW50Lm1vZGU7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsIjxwZGYtc2h5LWJ1dHRvblxyXG4gIFtjc3NDbGFzc109XCJzaG93IHwgcmVzcG9uc2l2ZUNTU0NsYXNzIDogJ2Fsd2F5cy1pbi1zZWNvbmRhcnktbWVudSdcIlxyXG4gIHRpdGxlPVwiV3JhcHBlZCBTY3JvbGxpbmdcIlxyXG4gIHByaW1hcnlUb29sYmFySWQ9XCJzY3JvbGxXcmFwcGVkXCJcclxuICBbdG9nZ2xlZF09XCJzY3JvbGxNb2RlID09IDJcIlxyXG4gIGwxMG5JZD1cInNjcm9sbF93cmFwcGVkXCJcclxuICBbYWN0aW9uXT1cIm9uQ2xpY2tcIlxyXG4gIGwxMG5MYWJlbD1cInNjcm9sbF93cmFwcGVkX2xhYmVsXCJcclxuICBbb3JkZXJdPVwiMzMwMFwiXHJcbiAgW2Nsb3NlT25DbGlja109XCJmYWxzZVwiXHJcbiAgaW1hZ2U9XCI8c3ZnIHN0eWxlPSd3aWR0aDogMjRweDsgaGVpZ2h0OiAyNHB4OyBtYXJnaW4tdG9wOiAzcHgnIHZpZXdCb3g9JzAgMCAyNCAyNCc+PHBhdGggZmlsbD0nY3VycmVudENvbG9yJyBkPSdNNS41IDRjMSAwIDEuNS41IDEuNSAxLjV2NWMwIDEtLjUgMS41LTEuNSAxLjVoLTNjLTEgMC0xLjUtLjUtMS41LTEuNXYtNUMxIDQuNSAxLjUgNCAyLjUgNHpNNyAwdi41QzcgMS41IDYuNSAyIDUuNSAyaC0zQzEuNSAyIDEgMS41IDEgLjVWMGg2ek03IDE2di0uNWMwLTEtLjUtMS41LTEuNS0xLjVoLTNjLTEgMC0xLjUuNS0xLjUgMS41di41aDZ6TTEzLjUgNGMxIDAgMS41LjUgMS41IDEuNXY1YzAgMS0uNSAxLjUtMS41IDEuNWgtM2MtMSAwLTEuNS0uNS0xLjUtMS41di01YzAtMSAuNS0xLjUgMS41LTEuNXpNMTUgMHYuNWMwIDEtLjUgMS41LTEuNSAxLjVoLTNDOS41IDIgOSAxLjUgOSAuNVYwaDZ6TTE1IDE2di0uNTA3YzAtMS0uNS0xLjUtMS41LTEuNWgtM0M5LjUgMTQgOSAxNC41IDkgMTUuNXYuNWg2eicgLz48L3N2Zz5cIlxyXG4+XHJcbjwvcGRmLXNoeS1idXR0b24+XHJcbiJdfQ==