import { Component, EventEmitter, Input, Output } from '@angular/core';
import { take } from 'rxjs/operators';
import { ScrollMode } from '../../options/pdf-scroll-mode';
import * as i0 from "@angular/core";
import * as i1 from "../../pdf-notification-service";
import * as i2 from "../pdf-shy-button/pdf-shy-button.component";
import * as i3 from "../../responsive-visibility";
export class PdfSinglePageModeComponent {
    constructor(notificationService, ngZone) {
        this.notificationService = notificationService;
        this.ngZone = ngZone;
        this.show = true;
        this.pageViewModeChange = new EventEmitter();
        this.notificationService.onPDFJSInit.pipe(take(1)).subscribe(() => {
            this.onPdfJsInit();
        });
        this.onClick = () => {
            ngZone.run(() => {
                const PDFViewerApplication = window.PDFViewerApplication;
                PDFViewerApplication.eventBus.dispatch('switchscrollmode', { mode: ScrollMode.PAGE });
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
PdfSinglePageModeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfSinglePageModeComponent, deps: [{ token: i1.PDFNotificationService }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
PdfSinglePageModeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfSinglePageModeComponent, selector: "pdf-single-page-mode", inputs: { show: "show", scrollMode: "scrollMode", pageViewMode: "pageViewMode" }, outputs: { pageViewModeChange: "pageViewModeChange" }, ngImport: i0, template: "<pdf-shy-button\r\n  [cssClass]=\"show | responsiveCSSClass : 'always-in-secondary-menu'\"\r\n  title=\"Use Page Scrolling\"\r\n  primaryToolbarId=\"scrollPage\"\r\n  [toggled]=\"scrollMode == 3\"\r\n  l10nId=\"scroll_page\"\r\n  [action]=\"onClick\"\r\n  l10nLabel=\"scroll_page_label\"\r\n  [order]=\"3000\"\r\n  [closeOnClick]=\"false\"\r\n  image=\"<svg style='width: 24px; height: 24px' viewBox='0 0 24 24'><path fill='currentColor' d='M10,7V9H12V17H14V7H10Z' /></svg>\"\r\n>\r\n</pdf-shy-button>\r\n", styles: ["button{padding:0;margin-top:0;margin-bottom:0}\n"], components: [{ type: i2.PdfShyButtonComponent, selector: "pdf-shy-button", inputs: ["primaryToolbarId", "secondaryMenuId", "cssClass", "eventBusName", "l10nId", "l10nLabel", "title", "toggled", "disabled", "order", "action", "closeOnClick", "onlySecondaryMenu", "image"] }], pipes: { "responsiveCSSClass": i3.ResponsiveCSSClassPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfSinglePageModeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-single-page-mode', template: "<pdf-shy-button\r\n  [cssClass]=\"show | responsiveCSSClass : 'always-in-secondary-menu'\"\r\n  title=\"Use Page Scrolling\"\r\n  primaryToolbarId=\"scrollPage\"\r\n  [toggled]=\"scrollMode == 3\"\r\n  l10nId=\"scroll_page\"\r\n  [action]=\"onClick\"\r\n  l10nLabel=\"scroll_page_label\"\r\n  [order]=\"3000\"\r\n  [closeOnClick]=\"false\"\r\n  image=\"<svg style='width: 24px; height: 24px' viewBox='0 0 24 24'><path fill='currentColor' d='M10,7V9H12V17H14V7H10Z' /></svg>\"\r\n>\r\n</pdf-shy-button>\r\n", styles: ["button{padding:0;margin-top:0;margin-bottom:0}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.PDFNotificationService }, { type: i0.NgZone }]; }, propDecorators: { show: [{
                type: Input
            }], scrollMode: [{
                type: Input
            }], pageViewMode: [{
                type: Input
            }], pageViewModeChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXNpbmdsZS1wYWdlLW1vZGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi90b29sYmFyL3BkZi1zaW5nbGUtcGFnZS1tb2RlL3BkZi1zaW5nbGUtcGFnZS1tb2RlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtc2luZ2xlLXBhZ2UtbW9kZS9wZGYtc2luZ2xlLXBhZ2UtbW9kZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sK0JBQStCLENBQUM7Ozs7O0FBVzNELE1BQU0sT0FBTywwQkFBMEI7SUFlckMsWUFBb0IsbUJBQTJDLEVBQVUsTUFBYztRQUFuRSx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQWJoRixTQUFJLEdBQXlCLElBQUksQ0FBQztRQVNsQyx1QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBb0IsQ0FBQztRQUsvRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ2hFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxFQUFFO1lBQ2xCLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFO2dCQUNkLE1BQU0sb0JBQW9CLEdBQTJCLE1BQWMsQ0FBQyxvQkFBb0IsQ0FBQztnQkFDekYsb0JBQW9CLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUN4RixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFTSxXQUFXO1FBQ2hCLE1BQU0sb0JBQW9CLEdBQTJCLE1BQWMsQ0FBQyxvQkFBb0IsQ0FBQztRQUN6RixvQkFBb0IsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDN0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFO2dCQUNuQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDL0IsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7O3VIQW5DVSwwQkFBMEI7MkdBQTFCLDBCQUEwQixxTUNidkMsMmZBYUE7MkZEQWEsMEJBQTBCO2tCQUx0QyxTQUFTOytCQUNFLHNCQUFzQjtrSUFNekIsSUFBSTtzQkFEVixLQUFLO2dCQUlDLFVBQVU7c0JBRGhCLEtBQUs7Z0JBSUMsWUFBWTtzQkFEbEIsS0FBSztnQkFJQyxrQkFBa0I7c0JBRHhCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE5nWm9uZSwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFNjcm9sbE1vZGUgfSBmcm9tICcuLi8uLi9vcHRpb25zL3BkZi1zY3JvbGwtbW9kZSc7XHJcbmltcG9ydCB7IFBhZ2VWaWV3TW9kZVR5cGUsIFNjcm9sbE1vZGVUeXBlIH0gZnJvbSAnLi4vLi4vb3B0aW9ucy9wZGYtdmlld2VyJztcclxuaW1wb3J0IHsgSVBERlZpZXdlckFwcGxpY2F0aW9uIH0gZnJvbSAnLi4vLi4vb3B0aW9ucy9wZGYtdmlld2VyLWFwcGxpY2F0aW9uJztcclxuaW1wb3J0IHsgUERGTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3BkZi1ub3RpZmljYXRpb24tc2VydmljZSc7XHJcbmltcG9ydCB7IFJlc3BvbnNpdmVWaXNpYmlsaXR5IH0gZnJvbSAnLi4vLi4vcmVzcG9uc2l2ZS12aXNpYmlsaXR5JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncGRmLXNpbmdsZS1wYWdlLW1vZGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wZGYtc2luZ2xlLXBhZ2UtbW9kZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGRmLXNpbmdsZS1wYWdlLW1vZGUuY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGRmU2luZ2xlUGFnZU1vZGVDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3c6IFJlc3BvbnNpdmVWaXNpYmlsaXR5ID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2Nyb2xsTW9kZTogU2Nyb2xsTW9kZVR5cGU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHBhZ2VWaWV3TW9kZTogUGFnZVZpZXdNb2RlVHlwZTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHBhZ2VWaWV3TW9kZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8UGFnZVZpZXdNb2RlVHlwZT4oKTtcclxuXHJcbiAgcHVibGljIG9uQ2xpY2s6ICgpID0+IHZvaWQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbm90aWZpY2F0aW9uU2VydmljZTogUERGTm90aWZpY2F0aW9uU2VydmljZSwgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSkge1xyXG4gICAgdGhpcy5ub3RpZmljYXRpb25TZXJ2aWNlLm9uUERGSlNJbml0LnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5vblBkZkpzSW5pdCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5vbkNsaWNrID0gKCkgPT4ge1xyXG4gICAgICBuZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xyXG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLmRpc3BhdGNoKCdzd2l0Y2hzY3JvbGxtb2RlJywgeyBtb2RlOiBTY3JvbGxNb2RlLlBBR0UgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvblBkZkpzSW5pdCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XHJcbiAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbignc3dpdGNoc2Nyb2xsbW9kZScsIChldmVudCkgPT4ge1xyXG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsTW9kZSA9IGV2ZW50Lm1vZGU7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsIjxwZGYtc2h5LWJ1dHRvblxyXG4gIFtjc3NDbGFzc109XCJzaG93IHwgcmVzcG9uc2l2ZUNTU0NsYXNzIDogJ2Fsd2F5cy1pbi1zZWNvbmRhcnktbWVudSdcIlxyXG4gIHRpdGxlPVwiVXNlIFBhZ2UgU2Nyb2xsaW5nXCJcclxuICBwcmltYXJ5VG9vbGJhcklkPVwic2Nyb2xsUGFnZVwiXHJcbiAgW3RvZ2dsZWRdPVwic2Nyb2xsTW9kZSA9PSAzXCJcclxuICBsMTBuSWQ9XCJzY3JvbGxfcGFnZVwiXHJcbiAgW2FjdGlvbl09XCJvbkNsaWNrXCJcclxuICBsMTBuTGFiZWw9XCJzY3JvbGxfcGFnZV9sYWJlbFwiXHJcbiAgW29yZGVyXT1cIjMwMDBcIlxyXG4gIFtjbG9zZU9uQ2xpY2tdPVwiZmFsc2VcIlxyXG4gIGltYWdlPVwiPHN2ZyBzdHlsZT0nd2lkdGg6IDI0cHg7IGhlaWdodDogMjRweCcgdmlld0JveD0nMCAwIDI0IDI0Jz48cGF0aCBmaWxsPSdjdXJyZW50Q29sb3InIGQ9J00xMCw3VjlIMTJWMTdIMTRWN0gxMFonIC8+PC9zdmc+XCJcclxuPlxyXG48L3BkZi1zaHktYnV0dG9uPlxyXG4iXX0=