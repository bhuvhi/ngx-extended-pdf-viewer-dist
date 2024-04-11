import { Component, EventEmitter, Input, NgZone, Output } from '@angular/core';
import { ScrollMode } from '../../options/pdf-scroll-mode';
import { ScrollModeType } from '../../options/pdf-viewer';
import * as i0 from "@angular/core";
import * as i1 from "../pdf-shy-button/pdf-shy-button.component";
import * as i2 from "../../responsive-visibility";
export class PdfInfiniteScrollComponent {
    ngZone;
    show = true;
    pageViewMode;
    scrollMode;
    pageViewModeChange = new EventEmitter();
    onClick;
    constructor(ngZone) {
        this.ngZone = ngZone;
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
    /** @nocollapse */ static ɵfac = function PdfInfiniteScrollComponent_Factory(t) { return new (t || PdfInfiniteScrollComponent)(i0.ɵɵdirectiveInject(i0.NgZone)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfInfiniteScrollComponent, selectors: [["pdf-infinite-scroll"]], inputs: { show: "show", pageViewMode: "pageViewMode", scrollMode: "scrollMode" }, outputs: { pageViewModeChange: "pageViewModeChange" }, decls: 2, vars: 8, consts: [["title", "Infinite scroll", "primaryToolbarId", "infiniteScroll", "l10nLabel", "pdfjs-infinite-scroll-button-label", "image", "<svg xmlns='http://www.w3.org/2000/svg' height= '24' viewBox= '0 -960 960 960' width='24'><path d= 'M212-260q-90 0-151-65.5T0-482q0-90 61.5-154T212-700q36 0 69.5 12t59.5 37l93 90-42 42-89-87q-18-18-41.5-26t-49.5-8q-64 0-108 46.5T60-482q0 66 43.5 114T212-320q25 0 48.5-8t42.5-25l316-298q26-25 59.5-37t68.5-12q90 0 151.5 64T960-482q0 91-61.5 156.5T747-260q-35 0-69-11.5T619-308l-91-90 42-42 87 87q17 17 41 25t49 8q65 0 109-48t44-114q0-65-44.5-111.5T747-640q-25 0-48.5 9T657-605L341-307q-26 24-60 35.5T212-260Z '/></svg>", 3, "cssClass", "toggled", "action", "order", "closeOnClick"]], template: function PdfInfiniteScrollComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "pdf-shy-button", 0);
            i0.ɵɵpipe(1, "responsiveCSSClass");
        } if (rf & 2) {
            i0.ɵɵproperty("cssClass", i0.ɵɵpipeBind2(1, 5, ctx.show, "always-in-secondary-menu"))("toggled", ctx.pageViewMode == "infinite-scroll")("action", ctx.onClick)("order", 3400)("closeOnClick", false);
        } }, dependencies: [i1.PdfShyButtonComponent, i2.ResponsiveCSSClassPipe], styles: ["button[_ngcontent-%COMP%]{padding:0;margin-top:0;margin-bottom:0}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfInfiniteScrollComponent, [{
        type: Component,
        args: [{ selector: 'pdf-infinite-scroll', template: "<pdf-shy-button\r\n  [cssClass]=\"show | responsiveCSSClass : 'always-in-secondary-menu'\"\r\n  title=\"Infinite scroll\"\r\n  primaryToolbarId=\"infiniteScroll\"\r\n  [toggled]=\"pageViewMode == 'infinite-scroll'\"\r\n  [action]=\"onClick\"\r\n  l10nLabel=\"pdfjs-infinite-scroll-button-label\"\r\n  [order]=\"3400\"\r\n  [closeOnClick]=\"false\"\r\n  image=\"<svg xmlns='http://www.w3.org/2000/svg' height= '24' viewBox= '0 -960 960 960' width='24'><path d= 'M212-260q-90 0-151-65.5T0-482q0-90 61.5-154T212-700q36 0 69.5 12t59.5 37l93 90-42 42-89-87q-18-18-41.5-26t-49.5-8q-64 0-108 46.5T60-482q0 66 43.5 114T212-320q25 0 48.5-8t42.5-25l316-298q26-25 59.5-37t68.5-12q90 0 151.5 64T960-482q0 91-61.5 156.5T747-260q-35 0-69-11.5T619-308l-91-90 42-42 87 87q17 17 41 25t49 8q65 0 109-48t44-114q0-65-44.5-111.5T747-640q-25 0-48.5 9T657-605L341-307q-26 24-60 35.5T212-260Z '/></svg>\"\r\n>\r\n</pdf-shy-button>\r\n", styles: ["button{padding:0;margin-top:0;margin-bottom:0}\n"] }]
    }], () => [{ type: i0.NgZone }], { show: [{
            type: Input
        }], pageViewMode: [{
            type: Input
        }], scrollMode: [{
            type: Input
        }], pageViewModeChange: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PdfInfiniteScrollComponent, { className: "PdfInfiniteScrollComponent", filePath: "lib\\toolbar\\pdf-infinite-scroll\\pdf-infinite-scroll.component.ts", lineNumber: 12 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWluZmluaXRlLXNjcm9sbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL3Rvb2xiYXIvcGRmLWluZmluaXRlLXNjcm9sbC9wZGYtaW5maW5pdGUtc2Nyb2xsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtaW5maW5pdGUtc2Nyb2xsL3BkZi1pbmZpbml0ZS1zY3JvbGwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzNELE9BQU8sRUFBb0IsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUFTNUUsTUFBTSxPQUFPLDBCQUEwQjtJQWVqQjtJQWJiLElBQUksR0FBeUIsSUFBSSxDQUFDO0lBR2xDLFlBQVksQ0FBbUI7SUFHL0IsVUFBVSxDQUFpQjtJQUczQixrQkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBb0IsQ0FBQztJQUUxRCxPQUFPLENBQWE7SUFFM0IsWUFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDaEMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1FBQ3hDLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRTtnQkFDbkIsSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLGlCQUFpQixFQUFFO29CQUMzQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2lCQUMxQjtxQkFBTTtvQkFDTCxNQUFNLG9CQUFvQixHQUEyQixNQUFjLENBQUMsb0JBQW9CLENBQUM7b0JBQ3pGLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxjQUFjLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssY0FBYyxDQUFDLFFBQVEsRUFBRTt3QkFDN0Ysb0JBQW9CLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztxQkFDM0Y7b0JBQ0QsT0FBTyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2lCQUNqQztZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDO0lBQ0osQ0FBQzt1R0E5QlUsMEJBQTBCOzRGQUExQiwwQkFBMEI7WUNYdkMsb0NBV2lCOzs7WUFIZixBQURBLEFBRkEsQUFEQSxBQUhBLHFGQUFtRSxrREFHdEIsdUJBQzNCLGVBRUosdUJBQ1E7OztpRkRHWCwwQkFBMEI7Y0FMdEMsU0FBUzsyQkFDRSxxQkFBcUI7dUNBTXhCLElBQUk7a0JBRFYsS0FBSztZQUlDLFlBQVk7a0JBRGxCLEtBQUs7WUFJQyxVQUFVO2tCQURoQixLQUFLO1lBSUMsa0JBQWtCO2tCQUR4QixNQUFNOztrRkFWSSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE5nWm9uZSwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNjcm9sbE1vZGUgfSBmcm9tICcuLi8uLi9vcHRpb25zL3BkZi1zY3JvbGwtbW9kZSc7XHJcbmltcG9ydCB7IFBhZ2VWaWV3TW9kZVR5cGUsIFNjcm9sbE1vZGVUeXBlIH0gZnJvbSAnLi4vLi4vb3B0aW9ucy9wZGYtdmlld2VyJztcclxuaW1wb3J0IHsgSVBERlZpZXdlckFwcGxpY2F0aW9uIH0gZnJvbSAnLi4vLi4vb3B0aW9ucy9wZGYtdmlld2VyLWFwcGxpY2F0aW9uJztcclxuaW1wb3J0IHsgUmVzcG9uc2l2ZVZpc2liaWxpdHkgfSBmcm9tICcuLi8uLi9yZXNwb25zaXZlLXZpc2liaWxpdHknO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwZGYtaW5maW5pdGUtc2Nyb2xsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGRmLWluZmluaXRlLXNjcm9sbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGRmLWluZmluaXRlLXNjcm9sbC5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQZGZJbmZpbml0ZVNjcm9sbENvbXBvbmVudCB7XHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvdzogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBwYWdlVmlld01vZGU6IFBhZ2VWaWV3TW9kZVR5cGU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNjcm9sbE1vZGU6IFNjcm9sbE1vZGVUeXBlO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgcGFnZVZpZXdNb2RlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxQYWdlVmlld01vZGVUeXBlPigpO1xyXG5cclxuICBwdWJsaWMgb25DbGljazogKCkgPT4gdm9pZDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSkge1xyXG4gICAgY29uc3QgZW1pdHRlciA9IHRoaXMucGFnZVZpZXdNb2RlQ2hhbmdlO1xyXG4gICAgdGhpcy5vbkNsaWNrID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnBhZ2VWaWV3TW9kZSA9PT0gJ2luZmluaXRlLXNjcm9sbCcpIHtcclxuICAgICAgICAgIGVtaXR0ZXIuZW1pdCgnbXVsdGlwbGUnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgICAgICAgIGlmICh0aGlzLnNjcm9sbE1vZGUgIT09IFNjcm9sbE1vZGVUeXBlLndyYXBwZWQgJiYgdGhpcy5zY3JvbGxNb2RlICE9PSBTY3JvbGxNb2RlVHlwZS52ZXJ0aWNhbCkge1xyXG4gICAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5kaXNwYXRjaCgnc3dpdGNoc2Nyb2xsbW9kZScsIHsgbW9kZTogU2Nyb2xsTW9kZS5WRVJUSUNBTCB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVtaXR0ZXIuZW1pdCgnaW5maW5pdGUtc2Nyb2xsJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiIsIjxwZGYtc2h5LWJ1dHRvblxyXG4gIFtjc3NDbGFzc109XCJzaG93IHwgcmVzcG9uc2l2ZUNTU0NsYXNzIDogJ2Fsd2F5cy1pbi1zZWNvbmRhcnktbWVudSdcIlxyXG4gIHRpdGxlPVwiSW5maW5pdGUgc2Nyb2xsXCJcclxuICBwcmltYXJ5VG9vbGJhcklkPVwiaW5maW5pdGVTY3JvbGxcIlxyXG4gIFt0b2dnbGVkXT1cInBhZ2VWaWV3TW9kZSA9PSAnaW5maW5pdGUtc2Nyb2xsJ1wiXHJcbiAgW2FjdGlvbl09XCJvbkNsaWNrXCJcclxuICBsMTBuTGFiZWw9XCJwZGZqcy1pbmZpbml0ZS1zY3JvbGwtYnV0dG9uLWxhYmVsXCJcclxuICBbb3JkZXJdPVwiMzQwMFwiXHJcbiAgW2Nsb3NlT25DbGlja109XCJmYWxzZVwiXHJcbiAgaW1hZ2U9XCI8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgaGVpZ2h0PSAnMjQnIHZpZXdCb3g9ICcwIC05NjAgOTYwIDk2MCcgd2lkdGg9JzI0Jz48cGF0aCBkPSAnTTIxMi0yNjBxLTkwIDAtMTUxLTY1LjVUMC00ODJxMC05MCA2MS41LTE1NFQyMTItNzAwcTM2IDAgNjkuNSAxMnQ1OS41IDM3bDkzIDkwLTQyIDQyLTg5LTg3cS0xOC0xOC00MS41LTI2dC00OS41LThxLTY0IDAtMTA4IDQ2LjVUNjAtNDgycTAgNjYgNDMuNSAxMTRUMjEyLTMyMHEyNSAwIDQ4LjUtOHQ0Mi41LTI1bDMxNi0yOThxMjYtMjUgNTkuNS0zN3Q2OC41LTEycTkwIDAgMTUxLjUgNjRUOTYwLTQ4MnEwIDkxLTYxLjUgMTU2LjVUNzQ3LTI2MHEtMzUgMC02OS0xMS41VDYxOS0zMDhsLTkxLTkwIDQyLTQyIDg3IDg3cTE3IDE3IDQxIDI1dDQ5IDhxNjUgMCAxMDktNDh0NDQtMTE0cTAtNjUtNDQuNS0xMTEuNVQ3NDctNjQwcS0yNSAwLTQ4LjUgOVQ2NTctNjA1TDM0MS0zMDdxLTI2IDI0LTYwIDM1LjVUMjEyLTI2MFogJy8+PC9zdmc+XCJcclxuPlxyXG48L3BkZi1zaHktYnV0dG9uPlxyXG4iXX0=