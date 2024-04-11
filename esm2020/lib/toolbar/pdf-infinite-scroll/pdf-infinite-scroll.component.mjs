import { Component, EventEmitter, Input, NgZone, Output } from '@angular/core';
import { ScrollMode } from '../../options/pdf-scroll-mode';
import { ScrollModeType } from '../../options/pdf-viewer';
import * as i0 from "@angular/core";
import * as i1 from "../pdf-shy-button/pdf-shy-button.component";
import * as i2 from "../../responsive-visibility";
export class PdfInfiniteScrollComponent {
    constructor(ngZone) {
        this.ngZone = ngZone;
        this.show = true;
        this.pageViewModeChange = new EventEmitter();
        const emitter = this.pageViewModeChange;
        this.onClick = () => {
            this.ngZone.run(() => {
                if (this.pageViewMode === 'infinite-scroll') {
                    emitter.emit('multiple');
                }
                else {
                    const PDFViewerApplication = window.PDFViewerApplication;
                    if (this.scrollMode !== ScrollModeType.wrapped && this.scrollMode !== ScrollModeType.vertical) {
                        PDFViewerApplication.eventBus.dispatch('switchscrollmode', { mode: ScrollMode.VERTICAL });
                    }
                    emitter.emit('infinite-scroll');
                }
            });
        };
    }
}
/** @nocollapse */ PdfInfiniteScrollComponent.ɵfac = function PdfInfiniteScrollComponent_Factory(t) { return new (t || PdfInfiniteScrollComponent)(i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ PdfInfiniteScrollComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfInfiniteScrollComponent, selectors: [["pdf-infinite-scroll"]], inputs: { show: "show", pageViewMode: "pageViewMode", scrollMode: "scrollMode" }, outputs: { pageViewModeChange: "pageViewModeChange" }, decls: 2, vars: 8, consts: [["title", "Infinite scroll", "primaryToolbarId", "infiniteScroll", "l10nLabel", "infinite_scroll_label", "image", "<svg xmlns='http://www.w3.org/2000/svg' height= '24' viewBox= '0 -960 960 960' width='24'><path d= 'M212-260q-90 0-151-65.5T0-482q0-90 61.5-154T212-700q36 0 69.5 12t59.5 37l93 90-42 42-89-87q-18-18-41.5-26t-49.5-8q-64 0-108 46.5T60-482q0 66 43.5 114T212-320q25 0 48.5-8t42.5-25l316-298q26-25 59.5-37t68.5-12q90 0 151.5 64T960-482q0 91-61.5 156.5T747-260q-35 0-69-11.5T619-308l-91-90 42-42 87 87q17 17 41 25t49 8q65 0 109-48t44-114q0-65-44.5-111.5T747-640q-25 0-48.5 9T657-605L341-307q-26 24-60 35.5T212-260Z '/></svg>", 3, "cssClass", "toggled", "action", "order", "closeOnClick"]], template: function PdfInfiniteScrollComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "pdf-shy-button", 0);
        i0.ɵɵpipe(1, "responsiveCSSClass");
    } if (rf & 2) {
        i0.ɵɵproperty("cssClass", i0.ɵɵpipeBind2(1, 5, ctx.show, "always-in-secondary-menu"))("toggled", ctx.pageViewMode == "infinite-scroll")("action", ctx.onClick)("order", 3400)("closeOnClick", false);
    } }, directives: [i1.PdfShyButtonComponent], pipes: [i2.ResponsiveCSSClassPipe], styles: ["button[_ngcontent-%COMP%]{padding:0;margin-top:0;margin-bottom:0}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfInfiniteScrollComponent, [{
        type: Component,
        args: [{ selector: 'pdf-infinite-scroll', template: "<pdf-shy-button\n  [cssClass]=\"show | responsiveCSSClass : 'always-in-secondary-menu'\"\n  title=\"Infinite scroll\"\n  primaryToolbarId=\"infiniteScroll\"\n  [toggled]=\"pageViewMode == 'infinite-scroll'\"\n  [action]=\"onClick\"\n  l10nLabel=\"infinite_scroll_label\"\n  [order]=\"3400\"\n  [closeOnClick]=\"false\"\n  image=\"<svg xmlns='http://www.w3.org/2000/svg' height= '24' viewBox= '0 -960 960 960' width='24'><path d= 'M212-260q-90 0-151-65.5T0-482q0-90 61.5-154T212-700q36 0 69.5 12t59.5 37l93 90-42 42-89-87q-18-18-41.5-26t-49.5-8q-64 0-108 46.5T60-482q0 66 43.5 114T212-320q25 0 48.5-8t42.5-25l316-298q26-25 59.5-37t68.5-12q90 0 151.5 64T960-482q0 91-61.5 156.5T747-260q-35 0-69-11.5T619-308l-91-90 42-42 87 87q17 17 41 25t49 8q65 0 109-48t44-114q0-65-44.5-111.5T747-640q-25 0-48.5 9T657-605L341-307q-26 24-60 35.5T212-260Z '/></svg>\"\n>\n</pdf-shy-button>\n", styles: ["button{padding:0;margin-top:0;margin-bottom:0}\n"] }]
    }], function () { return [{ type: i0.NgZone }]; }, { show: [{
            type: Input
        }], pageViewMode: [{
            type: Input
        }], scrollMode: [{
            type: Input
        }], pageViewModeChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWluZmluaXRlLXNjcm9sbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL3Rvb2xiYXIvcGRmLWluZmluaXRlLXNjcm9sbC9wZGYtaW5maW5pdGUtc2Nyb2xsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtaW5maW5pdGUtc2Nyb2xsL3BkZi1pbmZpbml0ZS1zY3JvbGwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzNELE9BQU8sRUFBb0IsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUFTNUUsTUFBTSxPQUFPLDBCQUEwQjtJQWVyQyxZQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQWIzQixTQUFJLEdBQXlCLElBQUksQ0FBQztRQVNsQyx1QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBb0IsQ0FBQztRQUsvRCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUM7UUFDeEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUU7WUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFO2dCQUNuQixJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssaUJBQWlCLEVBQUU7b0JBQzNDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7aUJBQzFCO3FCQUFNO29CQUNMLE1BQU0sb0JBQW9CLEdBQTJCLE1BQWMsQ0FBQyxvQkFBb0IsQ0FBQztvQkFDekYsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLGNBQWMsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxjQUFjLENBQUMsUUFBUSxFQUFFO3dCQUM3RixvQkFBb0IsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGtCQUFrQixFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO3FCQUMzRjtvQkFDRCxPQUFPLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7aUJBQ2pDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUM7SUFDSixDQUFDOzt1SEE5QlUsMEJBQTBCOzRHQUExQiwwQkFBMEI7UUNYdkMsb0NBV2lCOzs7UUFWZixxRkFBbUUsa0RBQUEsdUJBQUEsZUFBQSx1QkFBQTs7dUZEVXhELDBCQUEwQjtjQUx0QyxTQUFTOzJCQUNFLHFCQUFxQjt5REFNeEIsSUFBSTtrQkFEVixLQUFLO1lBSUMsWUFBWTtrQkFEbEIsS0FBSztZQUlDLFVBQVU7a0JBRGhCLEtBQUs7WUFJQyxrQkFBa0I7a0JBRHhCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE5nWm9uZSwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTY3JvbGxNb2RlIH0gZnJvbSAnLi4vLi4vb3B0aW9ucy9wZGYtc2Nyb2xsLW1vZGUnO1xuaW1wb3J0IHsgUGFnZVZpZXdNb2RlVHlwZSwgU2Nyb2xsTW9kZVR5cGUgfSBmcm9tICcuLi8uLi9vcHRpb25zL3BkZi12aWV3ZXInO1xuaW1wb3J0IHsgSVBERlZpZXdlckFwcGxpY2F0aW9uIH0gZnJvbSAnLi4vLi4vb3B0aW9ucy9wZGYtdmlld2VyLWFwcGxpY2F0aW9uJztcbmltcG9ydCB7IFJlc3BvbnNpdmVWaXNpYmlsaXR5IH0gZnJvbSAnLi4vLi4vcmVzcG9uc2l2ZS12aXNpYmlsaXR5JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGRmLWluZmluaXRlLXNjcm9sbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9wZGYtaW5maW5pdGUtc2Nyb2xsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGRmLWluZmluaXRlLXNjcm9sbC5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFBkZkluZmluaXRlU2Nyb2xsQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgcHVibGljIHNob3c6IFJlc3BvbnNpdmVWaXNpYmlsaXR5ID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgcGFnZVZpZXdNb2RlOiBQYWdlVmlld01vZGVUeXBlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzY3JvbGxNb2RlOiBTY3JvbGxNb2RlVHlwZTtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIHBhZ2VWaWV3TW9kZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8UGFnZVZpZXdNb2RlVHlwZT4oKTtcblxuICBwdWJsaWMgb25DbGljazogKCkgPT4gdm9pZDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5nWm9uZTogTmdab25lKSB7XG4gICAgY29uc3QgZW1pdHRlciA9IHRoaXMucGFnZVZpZXdNb2RlQ2hhbmdlO1xuICAgIHRoaXMub25DbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnBhZ2VWaWV3TW9kZSA9PT0gJ2luZmluaXRlLXNjcm9sbCcpIHtcbiAgICAgICAgICBlbWl0dGVyLmVtaXQoJ211bHRpcGxlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcbiAgICAgICAgICBpZiAodGhpcy5zY3JvbGxNb2RlICE9PSBTY3JvbGxNb2RlVHlwZS53cmFwcGVkICYmIHRoaXMuc2Nyb2xsTW9kZSAhPT0gU2Nyb2xsTW9kZVR5cGUudmVydGljYWwpIHtcbiAgICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLmRpc3BhdGNoKCdzd2l0Y2hzY3JvbGxtb2RlJywgeyBtb2RlOiBTY3JvbGxNb2RlLlZFUlRJQ0FMIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbWl0dGVyLmVtaXQoJ2luZmluaXRlLXNjcm9sbCcpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG59XG4iLCI8cGRmLXNoeS1idXR0b25cbiAgW2Nzc0NsYXNzXT1cInNob3cgfCByZXNwb25zaXZlQ1NTQ2xhc3MgOiAnYWx3YXlzLWluLXNlY29uZGFyeS1tZW51J1wiXG4gIHRpdGxlPVwiSW5maW5pdGUgc2Nyb2xsXCJcbiAgcHJpbWFyeVRvb2xiYXJJZD1cImluZmluaXRlU2Nyb2xsXCJcbiAgW3RvZ2dsZWRdPVwicGFnZVZpZXdNb2RlID09ICdpbmZpbml0ZS1zY3JvbGwnXCJcbiAgW2FjdGlvbl09XCJvbkNsaWNrXCJcbiAgbDEwbkxhYmVsPVwiaW5maW5pdGVfc2Nyb2xsX2xhYmVsXCJcbiAgW29yZGVyXT1cIjM0MDBcIlxuICBbY2xvc2VPbkNsaWNrXT1cImZhbHNlXCJcbiAgaW1hZ2U9XCI8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgaGVpZ2h0PSAnMjQnIHZpZXdCb3g9ICcwIC05NjAgOTYwIDk2MCcgd2lkdGg9JzI0Jz48cGF0aCBkPSAnTTIxMi0yNjBxLTkwIDAtMTUxLTY1LjVUMC00ODJxMC05MCA2MS41LTE1NFQyMTItNzAwcTM2IDAgNjkuNSAxMnQ1OS41IDM3bDkzIDkwLTQyIDQyLTg5LTg3cS0xOC0xOC00MS41LTI2dC00OS41LThxLTY0IDAtMTA4IDQ2LjVUNjAtNDgycTAgNjYgNDMuNSAxMTRUMjEyLTMyMHEyNSAwIDQ4LjUtOHQ0Mi41LTI1bDMxNi0yOThxMjYtMjUgNTkuNS0zN3Q2OC41LTEycTkwIDAgMTUxLjUgNjRUOTYwLTQ4MnEwIDkxLTYxLjUgMTU2LjVUNzQ3LTI2MHEtMzUgMC02OS0xMS41VDYxOS0zMDhsLTkxLTkwIDQyLTQyIDg3IDg3cTE3IDE3IDQxIDI1dDQ5IDhxNjUgMCAxMDktNDh0NDQtMTE0cTAtNjUtNDQuNS0xMTEuNVQ3NDctNjQwcS0yNSAwLTQ4LjUgOVQ2NTctNjA1TDM0MS0zMDdxLTI2IDI0LTYwIDM1LjVUMjEyLTI2MFogJy8+PC9zdmc+XCJcbj5cbjwvcGRmLXNoeS1idXR0b24+XG4iXX0=