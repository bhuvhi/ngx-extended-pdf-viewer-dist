import { Component, EventEmitter, Input, NgZone, Output } from '@angular/core';
import { take } from 'rxjs/operators';
import { ScrollMode } from '../../options/pdf-scroll-mode';
import { ScrollModeType } from '../../options/pdf-viewer';
import { PDFNotificationService } from '../../pdf-notification-service';
import * as i0 from "@angular/core";
import * as i1 from "../../pdf-notification-service";
import * as i2 from "../pdf-shy-button/pdf-shy-button.component";
import * as i3 from "../../responsive-visibility";
export class PdfHorizontalScrollComponent {
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
                PDFViewerApplication.eventBus.dispatch('switchscrollmode', { mode: ScrollMode.HORIZONTAL });
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
/** @nocollapse */ PdfHorizontalScrollComponent.ɵfac = function PdfHorizontalScrollComponent_Factory(t) { return new (t || PdfHorizontalScrollComponent)(i0.ɵɵdirectiveInject(i1.PDFNotificationService), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ PdfHorizontalScrollComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfHorizontalScrollComponent, selectors: [["pdf-horizontal-scroll"]], inputs: { show: "show", scrollMode: "scrollMode", pageViewMode: "pageViewMode" }, outputs: { pageViewModeChange: "pageViewModeChange" }, decls: 2, vars: 8, consts: [["title", "Use Horizontal Scrolling", "primaryToolbarId", "scrollHorizontal", "l10nId", "scroll_horizontal", "l10nLabel", "scroll_horizontal_label", "image", "<svg style='width: 24px; height: 24px; margin-top: 3px'> <path fill='currentColor' d='M0 4h1.5c1 0 1.5.5 1.5 1.5v5c0 1-.5 1.5-1.5 1.5H0zM9.5 4c1 0 1.5.5 1.5 1.5v5c0 1-.5 1.5-1.5 1.5h-3c-1 0-1.5-.5-1.5-1.5v-5C5 4.5 5.5 4 6.5 4zM16 4h-1.5c-1 0-1.5.5-1.5 1.5v5c0 1 .5 1.5 1.5 1.5H16z' /> </svg>", 3, "cssClass", "toggled", "action", "order", "closeOnClick"]], template: function PdfHorizontalScrollComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "pdf-shy-button", 0);
        i0.ɵɵpipe(1, "responsiveCSSClass");
    } if (rf & 2) {
        i0.ɵɵproperty("cssClass", i0.ɵɵpipeBind2(1, 5, ctx.show, "always-in-secondary-menu"))("toggled", ctx.scrollMode == 1)("action", ctx.onClick)("order", 3200)("closeOnClick", false);
    } }, directives: [i2.PdfShyButtonComponent], pipes: [i3.ResponsiveCSSClassPipe], styles: ["button[_ngcontent-%COMP%]{padding:0;margin-top:0;margin-bottom:0}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfHorizontalScrollComponent, [{
        type: Component,
        args: [{ selector: 'pdf-horizontal-scroll', template: "<pdf-shy-button\n  [cssClass]=\"show | responsiveCSSClass : 'always-in-secondary-menu'\"\n  title=\"Use Horizontal Scrolling\"\n  primaryToolbarId=\"scrollHorizontal\"\n  l10nId=\"scroll_horizontal\"\n  [toggled]=\"scrollMode == 1\"\n  [action]=\"onClick\"\n  l10nLabel=\"scroll_horizontal_label\"\n  [order]=\"3200\"\n  [closeOnClick]=\"false\"\n  image=\"<svg style='width: 24px; height: 24px; margin-top: 3px'> <path fill='currentColor' d='M0 4h1.5c1 0 1.5.5 1.5 1.5v5c0 1-.5 1.5-1.5 1.5H0zM9.5 4c1 0 1.5.5 1.5 1.5v5c0 1-.5 1.5-1.5 1.5h-3c-1 0-1.5-.5-1.5-1.5v-5C5 4.5 5.5 4 6.5 4zM16 4h-1.5c-1 0-1.5.5-1.5 1.5v5c0 1 .5 1.5 1.5 1.5H16z' /> </svg>\"\n>\n</pdf-shy-button>\n", styles: ["button{padding:0;margin-top:0;margin-bottom:0}\n"] }]
    }], function () { return [{ type: i1.PDFNotificationService }, { type: i0.NgZone }]; }, { show: [{
            type: Input
        }], scrollMode: [{
            type: Input
        }], pageViewMode: [{
            type: Input
        }], pageViewModeChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWhvcml6b250YWwtc2Nyb2xsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtaG9yaXpvbnRhbC1zY3JvbGwvcGRmLWhvcml6b250YWwtc2Nyb2xsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtaG9yaXpvbnRhbC1zY3JvbGwvcGRmLWhvcml6b250YWwtc2Nyb2xsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDM0QsT0FBTyxFQUFvQixjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUU1RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7QUFReEUsTUFBTSxPQUFPLDRCQUE0QjtJQWV2QyxZQUFvQixtQkFBMkMsRUFBVSxNQUFjO1FBQW5FLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBd0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBYmhGLFNBQUksR0FBeUIsSUFBSSxDQUFDO1FBU2xDLHVCQUFrQixHQUFHLElBQUksWUFBWSxFQUFvQixDQUFDO1FBSy9ELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDaEUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1FBQ3hDLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRTtnQkFDbkIsSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLFVBQVUsSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLGlCQUFpQixFQUFFO29CQUMvRSxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2lCQUMxQjtnQkFDRCxNQUFNLG9CQUFvQixHQUEyQixNQUFjLENBQUMsb0JBQW9CLENBQUM7Z0JBQ3pGLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7WUFDOUYsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUM7SUFDSixDQUFDO0lBRU0sV0FBVztRQUNoQixNQUFNLG9CQUFvQixHQUEyQixNQUFjLENBQUMsb0JBQW9CLENBQUM7UUFDekYsb0JBQW9CLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQzdELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRTtnQkFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQy9CLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzsySEF0Q1UsNEJBQTRCOzhHQUE1Qiw0QkFBNEI7UUNiekMsb0NBWWlCOzs7UUFYZixxRkFBbUUsZ0NBQUEsdUJBQUEsZUFBQSx1QkFBQTs7dUZEWXhELDRCQUE0QjtjQUx4QyxTQUFTOzJCQUNFLHVCQUF1Qjs4RkFNMUIsSUFBSTtrQkFEVixLQUFLO1lBSUMsVUFBVTtrQkFEaEIsS0FBSztZQUlDLFlBQVk7a0JBRGxCLEtBQUs7WUFJQyxrQkFBa0I7a0JBRHhCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE5nWm9uZSwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU2Nyb2xsTW9kZSB9IGZyb20gJy4uLy4uL29wdGlvbnMvcGRmLXNjcm9sbC1tb2RlJztcbmltcG9ydCB7IFBhZ2VWaWV3TW9kZVR5cGUsIFNjcm9sbE1vZGVUeXBlIH0gZnJvbSAnLi4vLi4vb3B0aW9ucy9wZGYtdmlld2VyJztcbmltcG9ydCB7IElQREZWaWV3ZXJBcHBsaWNhdGlvbiB9IGZyb20gJy4uLy4uL29wdGlvbnMvcGRmLXZpZXdlci1hcHBsaWNhdGlvbic7XG5pbXBvcnQgeyBQREZOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcGRmLW5vdGlmaWNhdGlvbi1zZXJ2aWNlJztcbmltcG9ydCB7IFJlc3BvbnNpdmVWaXNpYmlsaXR5IH0gZnJvbSAnLi4vLi4vcmVzcG9uc2l2ZS12aXNpYmlsaXR5JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGRmLWhvcml6b250YWwtc2Nyb2xsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BkZi1ob3Jpem9udGFsLXNjcm9sbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3BkZi1ob3Jpem9udGFsLXNjcm9sbC5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFBkZkhvcml6b250YWxTY3JvbGxDb21wb25lbnQge1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvdzogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzY3JvbGxNb2RlOiBTY3JvbGxNb2RlVHlwZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgcGFnZVZpZXdNb2RlOiBQYWdlVmlld01vZGVUeXBlO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgcGFnZVZpZXdNb2RlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxQYWdlVmlld01vZGVUeXBlPigpO1xuXG4gIHB1YmxpYyBvbkNsaWNrOiAoKSA9PiB2b2lkO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbm90aWZpY2F0aW9uU2VydmljZTogUERGTm90aWZpY2F0aW9uU2VydmljZSwgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSkge1xuICAgIHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5vblBERkpTSW5pdC5waXBlKHRha2UoMSkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLm9uUGRmSnNJbml0KCk7XG4gICAgfSk7XG4gICAgY29uc3QgZW1pdHRlciA9IHRoaXMucGFnZVZpZXdNb2RlQ2hhbmdlO1xuICAgIHRoaXMub25DbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnBhZ2VWaWV3TW9kZSAhPT0gJ211bHRpcGxlJyAmJiB0aGlzLnBhZ2VWaWV3TW9kZSAhPT0gJ2luZmluaXRlLXNjcm9sbCcpIHtcbiAgICAgICAgICBlbWl0dGVyLmVtaXQoJ211bHRpcGxlJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMuZGlzcGF0Y2goJ3N3aXRjaHNjcm9sbG1vZGUnLCB7IG1vZGU6IFNjcm9sbE1vZGUuSE9SSVpPTlRBTCB9KTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH1cblxuICBwdWJsaWMgb25QZGZKc0luaXQoKTogdm9pZCB7XG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcbiAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbignc3dpdGNoc2Nyb2xsbW9kZScsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5zY3JvbGxNb2RlID0gZXZlbnQubW9kZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iLCI8cGRmLXNoeS1idXR0b25cbiAgW2Nzc0NsYXNzXT1cInNob3cgfCByZXNwb25zaXZlQ1NTQ2xhc3MgOiAnYWx3YXlzLWluLXNlY29uZGFyeS1tZW51J1wiXG4gIHRpdGxlPVwiVXNlIEhvcml6b250YWwgU2Nyb2xsaW5nXCJcbiAgcHJpbWFyeVRvb2xiYXJJZD1cInNjcm9sbEhvcml6b250YWxcIlxuICBsMTBuSWQ9XCJzY3JvbGxfaG9yaXpvbnRhbFwiXG4gIFt0b2dnbGVkXT1cInNjcm9sbE1vZGUgPT0gMVwiXG4gIFthY3Rpb25dPVwib25DbGlja1wiXG4gIGwxMG5MYWJlbD1cInNjcm9sbF9ob3Jpem9udGFsX2xhYmVsXCJcbiAgW29yZGVyXT1cIjMyMDBcIlxuICBbY2xvc2VPbkNsaWNrXT1cImZhbHNlXCJcbiAgaW1hZ2U9XCI8c3ZnIHN0eWxlPSd3aWR0aDogMjRweDsgaGVpZ2h0OiAyNHB4OyBtYXJnaW4tdG9wOiAzcHgnPiA8cGF0aCBmaWxsPSdjdXJyZW50Q29sb3InIGQ9J00wIDRoMS41YzEgMCAxLjUuNSAxLjUgMS41djVjMCAxLS41IDEuNS0xLjUgMS41SDB6TTkuNSA0YzEgMCAxLjUuNSAxLjUgMS41djVjMCAxLS41IDEuNS0xLjUgMS41aC0zYy0xIDAtMS41LS41LTEuNS0xLjV2LTVDNSA0LjUgNS41IDQgNi41IDR6TTE2IDRoLTEuNWMtMSAwLTEuNS41LTEuNSAxLjV2NWMwIDEgLjUgMS41IDEuNSAxLjVIMTZ6JyAvPiA8L3N2Zz5cIlxuPlxuPC9wZGYtc2h5LWJ1dHRvbj5cbiJdfQ==