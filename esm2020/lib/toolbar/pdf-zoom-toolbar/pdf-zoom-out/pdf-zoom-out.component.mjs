import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../pdf-shy-button/pdf-shy-button.component";
import * as i2 from "../../../responsive-visibility";
export class PdfZoomOutComponent {
    constructor() {
        this.showZoomButtons = true;
    }
}
/** @nocollapse */ PdfZoomOutComponent.ɵfac = function PdfZoomOutComponent_Factory(t) { return new (t || PdfZoomOutComponent)(); };
/** @nocollapse */ PdfZoomOutComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfZoomOutComponent, selectors: [["pdf-zoom-out"]], inputs: { showZoomButtons: "showZoomButtons" }, decls: 2, vars: 5, consts: [["primaryToolbarId", "zoomOut", "title", "Zoom Out", "l10nId", "zoom_out", "l10nLabel", "zoom_out_label", "eventBusName", "zoomout", "image", "<svg style='width: 24px; height: 24px' viewBox='0 0 24 24'><path fill='currentColor' d='M19,13H5V11H19V13Z' /></svg>", 1, "zoomOut", 3, "cssClass", "order"]], template: function PdfZoomOutComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "pdf-shy-button", 0);
        i0.ɵɵpipe(1, "responsiveCSSClass");
    } if (rf & 2) {
        i0.ɵɵproperty("cssClass", i0.ɵɵpipeBind2(1, 2, ctx.showZoomButtons, "always-visible"))("order", 1500);
    } }, directives: [i1.PdfShyButtonComponent], pipes: [i2.ResponsiveCSSClassPipe], styles: ["button[_ngcontent-%COMP%]{margin-left:-2px!important;margin-right:-2px!important;padding:0}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfZoomOutComponent, [{
        type: Component,
        args: [{ selector: 'pdf-zoom-out', template: "<pdf-shy-button\n  primaryToolbarId=\"zoomOut\"\n  class=\"zoomOut\"\n  title=\"Zoom Out\"\n  l10nId=\"zoom_out\"\n  l10nLabel=\"zoom_out_label\"\n  eventBusName=\"zoomout\"\n  [cssClass]=\"showZoomButtons | responsiveCSSClass : 'always-visible'\"\n  [order]=\"1500\"\n  image=\"<svg style='width: 24px; height: 24px' viewBox='0 0 24 24'><path fill='currentColor' d='M19,13H5V11H19V13Z' /></svg>\"\n>\n</pdf-shy-button>\n", styles: ["button{margin-left:-2px!important;margin-right:-2px!important;padding:0}\n"] }]
    }], null, { showZoomButtons: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXpvb20tb3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtem9vbS10b29sYmFyL3BkZi16b29tLW91dC9wZGYtem9vbS1vdXQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi90b29sYmFyL3BkZi16b29tLXRvb2xiYXIvcGRmLXpvb20tb3V0L3BkZi16b29tLW91dC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQVFqRCxNQUFNLE9BQU8sbUJBQW1CO0lBTGhDO1FBT1Msb0JBQWUsR0FBeUIsSUFBSSxDQUFDO0tBQ3JEOzt5R0FIWSxtQkFBbUI7cUdBQW5CLG1CQUFtQjtRQ1JoQyxvQ0FXaUI7OztRQUpmLHNGQUFvRSxlQUFBOzt1RkRDekQsbUJBQW1CO2NBTC9CLFNBQVM7MkJBQ0UsY0FBYztnQkFNakIsZUFBZTtrQkFEckIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3BvbnNpdmVWaXNpYmlsaXR5IH0gZnJvbSAnLi4vLi4vLi4vcmVzcG9uc2l2ZS12aXNpYmlsaXR5JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGRmLXpvb20tb3V0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BkZi16b29tLW91dC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3BkZi16b29tLW91dC5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFBkZlpvb21PdXRDb21wb25lbnQge1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd1pvb21CdXR0b25zOiBSZXNwb25zaXZlVmlzaWJpbGl0eSA9IHRydWU7XG59XG4iLCI8cGRmLXNoeS1idXR0b25cbiAgcHJpbWFyeVRvb2xiYXJJZD1cInpvb21PdXRcIlxuICBjbGFzcz1cInpvb21PdXRcIlxuICB0aXRsZT1cIlpvb20gT3V0XCJcbiAgbDEwbklkPVwiem9vbV9vdXRcIlxuICBsMTBuTGFiZWw9XCJ6b29tX291dF9sYWJlbFwiXG4gIGV2ZW50QnVzTmFtZT1cInpvb21vdXRcIlxuICBbY3NzQ2xhc3NdPVwic2hvd1pvb21CdXR0b25zIHwgcmVzcG9uc2l2ZUNTU0NsYXNzIDogJ2Fsd2F5cy12aXNpYmxlJ1wiXG4gIFtvcmRlcl09XCIxNTAwXCJcbiAgaW1hZ2U9XCI8c3ZnIHN0eWxlPSd3aWR0aDogMjRweDsgaGVpZ2h0OiAyNHB4JyB2aWV3Qm94PScwIDAgMjQgMjQnPjxwYXRoIGZpbGw9J2N1cnJlbnRDb2xvcicgZD0nTTE5LDEzSDVWMTFIMTlWMTNaJyAvPjwvc3ZnPlwiXG4+XG48L3BkZi1zaHktYnV0dG9uPlxuIl19