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
        args: [{ selector: 'pdf-download', template: "<pdf-shy-button\n  primaryToolbarId=\"download\"\n  [cssClass]=\"showDownloadButton | responsiveCSSClass : 'hiddenSmallView'\"\n  title=\"Download\"\n  l10nId=\"save\"\n  l10nLabel=\"save\"\n  image=\"<svg style= 'width: 20px; height: 20px ' viewBox= '0 0 24 24 '><path fill= 'currentColor ' d= 'M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M12,19L8,15H10.5V12H13.5V15H16L12,19Z ' /></svg>\"\n  [order]=\"400\"\n>\n  <span data-l10n-id=\"save_label\">Download</span>\n</pdf-shy-button>\n", styles: [":host{margin-top:0}:host:focus{outline:none}button:focus{outline:none}svg:focus{outline:none}button{padding:0}\n"] }]
    }], null, { showDownloadButton: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWRvd25sb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtZG93bmxvYWQvcGRmLWRvd25sb2FkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtZG93bmxvYWQvcGRmLWRvd25sb2FkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBUWpELE1BQU0sT0FBTyxvQkFBb0I7SUFMakM7UUFPUyx1QkFBa0IsR0FBeUIsSUFBSSxDQUFDO0tBQ3hEOzsyR0FIWSxvQkFBb0I7c0dBQXBCLG9CQUFvQjtRQ1JqQyx5Q0FRQzs7UUFDQywrQkFBZ0M7UUFBQSx3QkFBUTtRQUFBLGlCQUFPLEVBQUE7O1FBUC9DLDBGQUF3RSxjQUFBOzt1RkRNN0Qsb0JBQW9CO2NBTGhDLFNBQVM7MkJBQ0UsY0FBYztnQkFNakIsa0JBQWtCO2tCQUR4QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzcG9uc2l2ZVZpc2liaWxpdHkgfSBmcm9tICcuLi8uLi9yZXNwb25zaXZlLXZpc2liaWxpdHknO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwZGYtZG93bmxvYWQnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGRmLWRvd25sb2FkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGRmLWRvd25sb2FkLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgUGRmRG93bmxvYWRDb21wb25lbnQge1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd0Rvd25sb2FkQnV0dG9uOiBSZXNwb25zaXZlVmlzaWJpbGl0eSA9IHRydWU7XG59XG4iLCI8cGRmLXNoeS1idXR0b25cbiAgcHJpbWFyeVRvb2xiYXJJZD1cImRvd25sb2FkXCJcbiAgW2Nzc0NsYXNzXT1cInNob3dEb3dubG9hZEJ1dHRvbiB8IHJlc3BvbnNpdmVDU1NDbGFzcyA6ICdoaWRkZW5TbWFsbFZpZXcnXCJcbiAgdGl0bGU9XCJEb3dubG9hZFwiXG4gIGwxMG5JZD1cInNhdmVcIlxuICBsMTBuTGFiZWw9XCJzYXZlXCJcbiAgaW1hZ2U9XCI8c3ZnIHN0eWxlPSAnd2lkdGg6IDIwcHg7IGhlaWdodDogMjBweCAnIHZpZXdCb3g9ICcwIDAgMjQgMjQgJz48cGF0aCBmaWxsPSAnY3VycmVudENvbG9yICcgZD0gJ00xNCwyTDIwLDhWMjBBMiwyIDAgMCwxIDE4LDIySDZBMiwyIDAgMCwxIDQsMjBWNEEyLDIgMCAwLDEgNiwySDE0TTE4LDIwVjlIMTNWNEg2VjIwSDE4TTEyLDE5TDgsMTVIMTAuNVYxMkgxMy41VjE1SDE2TDEyLDE5WiAnIC8+PC9zdmc+XCJcbiAgW29yZGVyXT1cIjQwMFwiXG4+XG4gIDxzcGFuIGRhdGEtbDEwbi1pZD1cInNhdmVfbGFiZWxcIj5Eb3dubG9hZDwvc3Bhbj5cbjwvcGRmLXNoeS1idXR0b24+XG4iXX0=