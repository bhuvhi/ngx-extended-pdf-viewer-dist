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
        args: [{ selector: 'pdf-zoom-in', template: "<pdf-shy-button\n  primaryToolbarId=\"zoomIn\"\n  [cssClass]=\"showZoomButtons | responsiveCSSClass : 'always-visible'\"\n  class=\"zoomIn\"\n  title=\"Zoom In\"\n  l10nId=\"zoom_in\"\n  l10nLabel=\"zoom_in_label\"\n  eventBusName=\"zoomin\"\n  [order]=\"1600\"\n  image=\"<svg style='width: 24px; height: 24px' viewBox='0 0 24 24'><path fill='currentColor' d='M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z' /></svg>\"\n>\n</pdf-shy-button>\n", styles: ["button{margin-left:-2px!important;margin-right:-2px!important;padding:0}\n"] }]
    }], null, { showZoomButtons: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXpvb20taW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi90b29sYmFyL3BkZi16b29tLXRvb2xiYXIvcGRmLXpvb20taW4vcGRmLXpvb20taW4uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi90b29sYmFyL3BkZi16b29tLXRvb2xiYXIvcGRmLXpvb20taW4vcGRmLXpvb20taW4uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFRakQsTUFBTSxPQUFPLGtCQUFrQjtJQUwvQjtRQU9TLG9CQUFlLEdBQXlCLElBQUksQ0FBQztLQUNyRDs7dUdBSFksa0JBQWtCO29HQUFsQixrQkFBa0I7UUNSL0Isb0NBV2lCOzs7UUFUZixzRkFBb0UsZUFBQTs7dUZETXpELGtCQUFrQjtjQUw5QixTQUFTOzJCQUNFLGFBQWE7Z0JBTWhCLGVBQWU7a0JBRHJCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXNwb25zaXZlVmlzaWJpbGl0eSB9IGZyb20gJy4uLy4uLy4uL3Jlc3BvbnNpdmUtdmlzaWJpbGl0eSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BkZi16b29tLWluJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BkZi16b29tLWluLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGRmLXpvb20taW4uY29tcG9uZW50LmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBQZGZab29tSW5Db21wb25lbnQge1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd1pvb21CdXR0b25zOiBSZXNwb25zaXZlVmlzaWJpbGl0eSA9IHRydWU7XG59XG4iLCI8cGRmLXNoeS1idXR0b25cbiAgcHJpbWFyeVRvb2xiYXJJZD1cInpvb21JblwiXG4gIFtjc3NDbGFzc109XCJzaG93Wm9vbUJ1dHRvbnMgfCByZXNwb25zaXZlQ1NTQ2xhc3MgOiAnYWx3YXlzLXZpc2libGUnXCJcbiAgY2xhc3M9XCJ6b29tSW5cIlxuICB0aXRsZT1cIlpvb20gSW5cIlxuICBsMTBuSWQ9XCJ6b29tX2luXCJcbiAgbDEwbkxhYmVsPVwiem9vbV9pbl9sYWJlbFwiXG4gIGV2ZW50QnVzTmFtZT1cInpvb21pblwiXG4gIFtvcmRlcl09XCIxNjAwXCJcbiAgaW1hZ2U9XCI8c3ZnIHN0eWxlPSd3aWR0aDogMjRweDsgaGVpZ2h0OiAyNHB4JyB2aWV3Qm94PScwIDAgMjQgMjQnPjxwYXRoIGZpbGw9J2N1cnJlbnRDb2xvcicgZD0nTTE5LDEzSDEzVjE5SDExVjEzSDVWMTFIMTFWNUgxM1YxMUgxOVYxM1onIC8+PC9zdmc+XCJcbj5cbjwvcGRmLXNoeS1idXR0b24+XG4iXX0=