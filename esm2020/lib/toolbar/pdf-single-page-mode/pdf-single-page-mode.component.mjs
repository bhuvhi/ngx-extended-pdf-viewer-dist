import { Component, EventEmitter, Input, NgZone, Output } from '@angular/core';
import { take } from 'rxjs/operators';
import { ScrollMode } from '../../options/pdf-scroll-mode';
import { ScrollModeType } from '../../options/pdf-viewer';
import { PDFNotificationService } from '../../pdf-notification-service';
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
/** @nocollapse */ PdfSinglePageModeComponent.ɵfac = function PdfSinglePageModeComponent_Factory(t) { return new (t || PdfSinglePageModeComponent)(i0.ɵɵdirectiveInject(i1.PDFNotificationService), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ PdfSinglePageModeComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfSinglePageModeComponent, selectors: [["pdf-single-page-mode"]], inputs: { show: "show", scrollMode: "scrollMode", pageViewMode: "pageViewMode" }, outputs: { pageViewModeChange: "pageViewModeChange" }, decls: 2, vars: 8, consts: [["title", "Use Page Scrolling", "primaryToolbarId", "scrollPage", "l10nId", "scroll_page", "l10nLabel", "scroll_page_label", "image", "<svg style='width: 24px; height: 24px' viewBox='0 0 24 24'><path fill='currentColor' d='M10,7V9H12V17H14V7H10Z' /></svg>", 3, "cssClass", "toggled", "action", "order", "closeOnClick"]], template: function PdfSinglePageModeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "pdf-shy-button", 0);
        i0.ɵɵpipe(1, "responsiveCSSClass");
    } if (rf & 2) {
        i0.ɵɵproperty("cssClass", i0.ɵɵpipeBind2(1, 5, ctx.show, "always-in-secondary-menu"))("toggled", ctx.scrollMode == 3)("action", ctx.onClick)("order", 3000)("closeOnClick", false);
    } }, directives: [i2.PdfShyButtonComponent], pipes: [i3.ResponsiveCSSClassPipe], styles: ["button[_ngcontent-%COMP%]{padding:0;margin-top:0;margin-bottom:0}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfSinglePageModeComponent, [{
        type: Component,
        args: [{ selector: 'pdf-single-page-mode', template: "<pdf-shy-button\r\n  [cssClass]=\"show | responsiveCSSClass : 'always-in-secondary-menu'\"\r\n  title=\"Use Page Scrolling\"\r\n  primaryToolbarId=\"scrollPage\"\r\n  [toggled]=\"scrollMode == 3\"\r\n  l10nId=\"scroll_page\"\r\n  [action]=\"onClick\"\r\n  l10nLabel=\"scroll_page_label\"\r\n  [order]=\"3000\"\r\n  [closeOnClick]=\"false\"\r\n  image=\"<svg style='width: 24px; height: 24px' viewBox='0 0 24 24'><path fill='currentColor' d='M10,7V9H12V17H14V7H10Z' /></svg>\"\r\n>\r\n</pdf-shy-button>\r\n", styles: ["button{padding:0;margin-top:0;margin-bottom:0}\n"] }]
    }], function () { return [{ type: i1.PDFNotificationService }, { type: i0.NgZone }]; }, { show: [{
            type: Input
        }], scrollMode: [{
            type: Input
        }], pageViewMode: [{
            type: Input
        }], pageViewModeChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXNpbmdsZS1wYWdlLW1vZGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi90b29sYmFyL3BkZi1zaW5nbGUtcGFnZS1tb2RlL3BkZi1zaW5nbGUtcGFnZS1tb2RlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtc2luZ2xlLXBhZ2UtbW9kZS9wZGYtc2luZ2xlLXBhZ2UtbW9kZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzNELE9BQU8sRUFBb0IsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFNUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7O0FBUXhFLE1BQU0sT0FBTywwQkFBMEI7SUFlckMsWUFBb0IsbUJBQTJDLEVBQVUsTUFBYztRQUFuRSx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQWJoRixTQUFJLEdBQXlCLElBQUksQ0FBQztRQVNsQyx1QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBb0IsQ0FBQztRQUsvRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ2hFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxFQUFFO1lBQ2xCLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFO2dCQUNkLE1BQU0sb0JBQW9CLEdBQTJCLE1BQWMsQ0FBQyxvQkFBb0IsQ0FBQztnQkFDekYsb0JBQW9CLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUN4RixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFTSxXQUFXO1FBQ2hCLE1BQU0sb0JBQW9CLEdBQTJCLE1BQWMsQ0FBQyxvQkFBb0IsQ0FBQztRQUN6RixvQkFBb0IsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDN0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFO2dCQUNuQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDL0IsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7O3VIQW5DVSwwQkFBMEI7NEdBQTFCLDBCQUEwQjtRQ2J2QyxvQ0FZaUI7OztRQVhmLHFGQUFtRSxnQ0FBQSx1QkFBQSxlQUFBLHVCQUFBOzt1RkRZeEQsMEJBQTBCO2NBTHRDLFNBQVM7MkJBQ0Usc0JBQXNCOzhGQU16QixJQUFJO2tCQURWLEtBQUs7WUFJQyxVQUFVO2tCQURoQixLQUFLO1lBSUMsWUFBWTtrQkFEbEIsS0FBSztZQUlDLGtCQUFrQjtrQkFEeEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgTmdab25lLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgU2Nyb2xsTW9kZSB9IGZyb20gJy4uLy4uL29wdGlvbnMvcGRmLXNjcm9sbC1tb2RlJztcclxuaW1wb3J0IHsgUGFnZVZpZXdNb2RlVHlwZSwgU2Nyb2xsTW9kZVR5cGUgfSBmcm9tICcuLi8uLi9vcHRpb25zL3BkZi12aWV3ZXInO1xyXG5pbXBvcnQgeyBJUERGVmlld2VyQXBwbGljYXRpb24gfSBmcm9tICcuLi8uLi9vcHRpb25zL3BkZi12aWV3ZXItYXBwbGljYXRpb24nO1xyXG5pbXBvcnQgeyBQREZOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcGRmLW5vdGlmaWNhdGlvbi1zZXJ2aWNlJztcclxuaW1wb3J0IHsgUmVzcG9uc2l2ZVZpc2liaWxpdHkgfSBmcm9tICcuLi8uLi9yZXNwb25zaXZlLXZpc2liaWxpdHknO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwZGYtc2luZ2xlLXBhZ2UtbW9kZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BkZi1zaW5nbGUtcGFnZS1tb2RlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wZGYtc2luZ2xlLXBhZ2UtbW9kZS5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQZGZTaW5nbGVQYWdlTW9kZUNvbXBvbmVudCB7XHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvdzogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzY3JvbGxNb2RlOiBTY3JvbGxNb2RlVHlwZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgcGFnZVZpZXdNb2RlOiBQYWdlVmlld01vZGVUeXBlO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgcGFnZVZpZXdNb2RlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxQYWdlVmlld01vZGVUeXBlPigpO1xyXG5cclxuICBwdWJsaWMgb25DbGljazogKCkgPT4gdm9pZDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBub3RpZmljYXRpb25TZXJ2aWNlOiBQREZOb3RpZmljYXRpb25TZXJ2aWNlLCBwcml2YXRlIG5nWm9uZTogTmdab25lKSB7XHJcbiAgICB0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2Uub25QREZKU0luaXQucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLm9uUGRmSnNJbml0KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLm9uQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgIG5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XHJcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMuZGlzcGF0Y2goJ3N3aXRjaHNjcm9sbG1vZGUnLCB7IG1vZGU6IFNjcm9sbE1vZGUuUEFHRSB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uUGRmSnNJbml0KCk6IHZvaWQge1xyXG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdzd2l0Y2hzY3JvbGxtb2RlJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxNb2RlID0gZXZlbnQubW9kZTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiPHBkZi1zaHktYnV0dG9uXHJcbiAgW2Nzc0NsYXNzXT1cInNob3cgfCByZXNwb25zaXZlQ1NTQ2xhc3MgOiAnYWx3YXlzLWluLXNlY29uZGFyeS1tZW51J1wiXHJcbiAgdGl0bGU9XCJVc2UgUGFnZSBTY3JvbGxpbmdcIlxyXG4gIHByaW1hcnlUb29sYmFySWQ9XCJzY3JvbGxQYWdlXCJcclxuICBbdG9nZ2xlZF09XCJzY3JvbGxNb2RlID09IDNcIlxyXG4gIGwxMG5JZD1cInNjcm9sbF9wYWdlXCJcclxuICBbYWN0aW9uXT1cIm9uQ2xpY2tcIlxyXG4gIGwxMG5MYWJlbD1cInNjcm9sbF9wYWdlX2xhYmVsXCJcclxuICBbb3JkZXJdPVwiMzAwMFwiXHJcbiAgW2Nsb3NlT25DbGlja109XCJmYWxzZVwiXHJcbiAgaW1hZ2U9XCI8c3ZnIHN0eWxlPSd3aWR0aDogMjRweDsgaGVpZ2h0OiAyNHB4JyB2aWV3Qm94PScwIDAgMjQgMjQnPjxwYXRoIGZpbGw9J2N1cnJlbnRDb2xvcicgZD0nTTEwLDdWOUgxMlYxN0gxNFY3SDEwWicgLz48L3N2Zz5cIlxyXG4+XHJcbjwvcGRmLXNoeS1idXR0b24+XHJcbiJdfQ==