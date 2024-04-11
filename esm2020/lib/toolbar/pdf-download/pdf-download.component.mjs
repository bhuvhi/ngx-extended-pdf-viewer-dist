import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../pdf-shy-button/pdf-shy-button.component";
import * as i2 from "../../responsive-visibility";
export class PdfDownloadComponent {
    constructor() {
        this.showDownloadButton = true;
    }
}
/** @nocollapse */ PdfDownloadComponent.ɵfac = function PdfDownloadComponent_Factory(t) { return new (t || PdfDownloadComponent)(); };
/** @nocollapse */ PdfDownloadComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfDownloadComponent, selectors: [["pdf-download"]], inputs: { showDownloadButton: "showDownloadButton" }, decls: 4, vars: 5, consts: [["primaryToolbarId", "download", "title", "Download", "l10nId", "save", "l10nLabel", "save", "image", "<svg style= 'width: 20px; height: 20px ' viewBox= '0 0 24 24 '><path fill= 'currentColor ' d= 'M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M12,19L8,15H10.5V12H13.5V15H16L12,19Z ' /></svg>", 3, "cssClass", "order"], ["data-l10n-id", "save_label"]], template: function PdfDownloadComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "pdf-shy-button", 0);
        i0.ɵɵpipe(1, "responsiveCSSClass");
        i0.ɵɵelementStart(2, "span", 1);
        i0.ɵɵtext(3, "Download");
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵproperty("cssClass", i0.ɵɵpipeBind2(1, 2, ctx.showDownloadButton, "hiddenSmallView"))("order", 400);
    } }, directives: [i1.PdfShyButtonComponent], pipes: [i2.ResponsiveCSSClassPipe], styles: ["[_nghost-%COMP%]{margin-top:0}[_nghost-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]:focus{outline:none}svg[_ngcontent-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]{padding:0}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfDownloadComponent, [{
        type: Component,
        args: [{ selector: 'pdf-download', template: "<pdf-shy-button\r\n  primaryToolbarId=\"download\"\r\n  [cssClass]=\"showDownloadButton | responsiveCSSClass : 'hiddenSmallView'\"\r\n  title=\"Download\"\r\n  l10nId=\"save\"\r\n  l10nLabel=\"save\"\r\n  image=\"<svg style= 'width: 20px; height: 20px ' viewBox= '0 0 24 24 '><path fill= 'currentColor ' d= 'M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M12,19L8,15H10.5V12H13.5V15H16L12,19Z ' /></svg>\"\r\n  [order]=\"400\"\r\n>\r\n  <span data-l10n-id=\"save_label\">Download</span>\r\n</pdf-shy-button>\r\n", styles: [":host{margin-top:0}:host:focus{outline:none}button:focus{outline:none}svg:focus{outline:none}button{padding:0}\n"] }]
    }], null, { showDownloadButton: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWRvd25sb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtZG93bmxvYWQvcGRmLWRvd25sb2FkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtZG93bmxvYWQvcGRmLWRvd25sb2FkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBUWpELE1BQU0sT0FBTyxvQkFBb0I7SUFMakM7UUFPUyx1QkFBa0IsR0FBeUIsSUFBSSxDQUFDO0tBQ3hEOzsyR0FIWSxvQkFBb0I7c0dBQXBCLG9CQUFvQjtRQ1JqQyx5Q0FRQzs7UUFDQywrQkFBZ0M7UUFBQSx3QkFBUTtRQUFBLGlCQUFPLEVBQUE7O1FBUC9DLDBGQUF3RSxjQUFBOzt1RkRNN0Qsb0JBQW9CO2NBTGhDLFNBQVM7MkJBQ0UsY0FBYztnQkFNakIsa0JBQWtCO2tCQUR4QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSZXNwb25zaXZlVmlzaWJpbGl0eSB9IGZyb20gJy4uLy4uL3Jlc3BvbnNpdmUtdmlzaWJpbGl0eSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BkZi1kb3dubG9hZCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BkZi1kb3dubG9hZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGRmLWRvd25sb2FkLmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBkZkRvd25sb2FkQ29tcG9uZW50IHtcclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93RG93bmxvYWRCdXR0b246IFJlc3BvbnNpdmVWaXNpYmlsaXR5ID0gdHJ1ZTtcclxufVxyXG4iLCI8cGRmLXNoeS1idXR0b25cclxuICBwcmltYXJ5VG9vbGJhcklkPVwiZG93bmxvYWRcIlxyXG4gIFtjc3NDbGFzc109XCJzaG93RG93bmxvYWRCdXR0b24gfCByZXNwb25zaXZlQ1NTQ2xhc3MgOiAnaGlkZGVuU21hbGxWaWV3J1wiXHJcbiAgdGl0bGU9XCJEb3dubG9hZFwiXHJcbiAgbDEwbklkPVwic2F2ZVwiXHJcbiAgbDEwbkxhYmVsPVwic2F2ZVwiXHJcbiAgaW1hZ2U9XCI8c3ZnIHN0eWxlPSAnd2lkdGg6IDIwcHg7IGhlaWdodDogMjBweCAnIHZpZXdCb3g9ICcwIDAgMjQgMjQgJz48cGF0aCBmaWxsPSAnY3VycmVudENvbG9yICcgZD0gJ00xNCwyTDIwLDhWMjBBMiwyIDAgMCwxIDE4LDIySDZBMiwyIDAgMCwxIDQsMjBWNEEyLDIgMCAwLDEgNiwySDE0TTE4LDIwVjlIMTNWNEg2VjIwSDE4TTEyLDE5TDgsMTVIMTAuNVYxMkgxMy41VjE1SDE2TDEyLDE5WiAnIC8+PC9zdmc+XCJcclxuICBbb3JkZXJdPVwiNDAwXCJcclxuPlxyXG4gIDxzcGFuIGRhdGEtbDEwbi1pZD1cInNhdmVfbGFiZWxcIj5Eb3dubG9hZDwvc3Bhbj5cclxuPC9wZGYtc2h5LWJ1dHRvbj5cclxuIl19