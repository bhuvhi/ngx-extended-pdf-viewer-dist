import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../pdf-shy-button/pdf-shy-button.component";
import * as i2 from "../../../responsive-visibility";
export class PdfZoomInComponent {
    constructor() {
        this.showZoomButtons = true;
    }
}
/** @nocollapse */ PdfZoomInComponent.ɵfac = function PdfZoomInComponent_Factory(t) { return new (t || PdfZoomInComponent)(); };
/** @nocollapse */ PdfZoomInComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfZoomInComponent, selectors: [["pdf-zoom-in"]], inputs: { showZoomButtons: "showZoomButtons" }, decls: 2, vars: 5, consts: [["primaryToolbarId", "zoomIn", "title", "Zoom In", "l10nId", "zoom_in", "l10nLabel", "zoom_in_label", "eventBusName", "zoomin", "image", "<svg style='width: 24px; height: 24px' viewBox='0 0 24 24'><path fill='currentColor' d='M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z' /></svg>", 1, "zoomIn", 3, "cssClass", "order"]], template: function PdfZoomInComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "pdf-shy-button", 0);
        i0.ɵɵpipe(1, "responsiveCSSClass");
    } if (rf & 2) {
        i0.ɵɵproperty("cssClass", i0.ɵɵpipeBind2(1, 2, ctx.showZoomButtons, "always-visible"))("order", 1600);
    } }, directives: [i1.PdfShyButtonComponent], pipes: [i2.ResponsiveCSSClassPipe], styles: ["button[_ngcontent-%COMP%]{margin-left:-2px!important;margin-right:-2px!important;padding:0}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfZoomInComponent, [{
        type: Component,
        args: [{ selector: 'pdf-zoom-in', template: "<pdf-shy-button\r\n  primaryToolbarId=\"zoomIn\"\r\n  [cssClass]=\"showZoomButtons | responsiveCSSClass : 'always-visible'\"\r\n  class=\"zoomIn\"\r\n  title=\"Zoom In\"\r\n  l10nId=\"zoom_in\"\r\n  l10nLabel=\"zoom_in_label\"\r\n  eventBusName=\"zoomin\"\r\n  [order]=\"1600\"\r\n  image=\"<svg style='width: 24px; height: 24px' viewBox='0 0 24 24'><path fill='currentColor' d='M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z' /></svg>\"\r\n>\r\n</pdf-shy-button>\r\n", styles: ["button{margin-left:-2px!important;margin-right:-2px!important;padding:0}\n"] }]
    }], null, { showZoomButtons: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXpvb20taW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi90b29sYmFyL3BkZi16b29tLXRvb2xiYXIvcGRmLXpvb20taW4vcGRmLXpvb20taW4uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi90b29sYmFyL3BkZi16b29tLXRvb2xiYXIvcGRmLXpvb20taW4vcGRmLXpvb20taW4uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFRakQsTUFBTSxPQUFPLGtCQUFrQjtJQUwvQjtRQU9TLG9CQUFlLEdBQXlCLElBQUksQ0FBQztLQUNyRDs7dUdBSFksa0JBQWtCO29HQUFsQixrQkFBa0I7UUNSL0Isb0NBV2lCOzs7UUFUZixzRkFBb0UsZUFBQTs7dUZETXpELGtCQUFrQjtjQUw5QixTQUFTOzJCQUNFLGFBQWE7Z0JBTWhCLGVBQWU7a0JBRHJCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJlc3BvbnNpdmVWaXNpYmlsaXR5IH0gZnJvbSAnLi4vLi4vLi4vcmVzcG9uc2l2ZS12aXNpYmlsaXR5JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncGRmLXpvb20taW4nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wZGYtem9vbS1pbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGRmLXpvb20taW4uY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGRmWm9vbUluQ29tcG9uZW50IHtcclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93Wm9vbUJ1dHRvbnM6IFJlc3BvbnNpdmVWaXNpYmlsaXR5ID0gdHJ1ZTtcclxufVxyXG4iLCI8cGRmLXNoeS1idXR0b25cclxuICBwcmltYXJ5VG9vbGJhcklkPVwiem9vbUluXCJcclxuICBbY3NzQ2xhc3NdPVwic2hvd1pvb21CdXR0b25zIHwgcmVzcG9uc2l2ZUNTU0NsYXNzIDogJ2Fsd2F5cy12aXNpYmxlJ1wiXHJcbiAgY2xhc3M9XCJ6b29tSW5cIlxyXG4gIHRpdGxlPVwiWm9vbSBJblwiXHJcbiAgbDEwbklkPVwiem9vbV9pblwiXHJcbiAgbDEwbkxhYmVsPVwiem9vbV9pbl9sYWJlbFwiXHJcbiAgZXZlbnRCdXNOYW1lPVwiem9vbWluXCJcclxuICBbb3JkZXJdPVwiMTYwMFwiXHJcbiAgaW1hZ2U9XCI8c3ZnIHN0eWxlPSd3aWR0aDogMjRweDsgaGVpZ2h0OiAyNHB4JyB2aWV3Qm94PScwIDAgMjQgMjQnPjxwYXRoIGZpbGw9J2N1cnJlbnRDb2xvcicgZD0nTTE5LDEzSDEzVjE5SDExVjEzSDVWMTFIMTFWNUgxM1YxMUgxOVYxM1onIC8+PC9zdmc+XCJcclxuPlxyXG48L3BkZi1zaHktYnV0dG9uPlxyXG4iXX0=