import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../pdf-shy-button/pdf-shy-button.component";
import * as i2 from "../../responsive-visibility";
export class PdfDocumentPropertiesComponent {
    show = true;
    /** @nocollapse */ static ɵfac = function PdfDocumentPropertiesComponent_Factory(t) { return new (t || PdfDocumentPropertiesComponent)(); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfDocumentPropertiesComponent, selectors: [["pdf-document-properties"]], inputs: { show: "show" }, decls: 2, vars: 6, consts: [["title", "Document Properties\u2026", "primaryToolbarId", "documentProperties", "l10nId", "pdfjs-document-properties-button", "l10nLabel", "pdfjs-document-properties-button-label", "eventBusName", "documentproperties", "image", "<svg class='pdf-margin-top-3px' width='16px' height='16px' viewBox='0 0 16 16'><path fill='currentColor' d='M8 16a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8zM8 2a6 6 0 1 0 6 6 6.006 6.006 0 0 0-6-6z' /><path fill='currentColor' d='M8 7a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1z' /><circle fill='currentColor' cx='8' cy='5' r='1.188' /></svg>", 3, "cssClass", "order", "closeOnClick"]], template: function PdfDocumentPropertiesComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "pdf-shy-button", 0);
            i0.ɵɵpipe(1, "responsiveCSSClass");
        } if (rf & 2) {
            i0.ɵɵproperty("cssClass", i0.ɵɵpipeBind2(1, 3, ctx.show, "always-in-secondary-menu"))("order", 5000)("closeOnClick", true);
        } }, dependencies: [i1.PdfShyButtonComponent, i2.ResponsiveCSSClassPipe], styles: ["button[_ngcontent-%COMP%]{padding:0;margin-top:0;margin-bottom:0}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfDocumentPropertiesComponent, [{
        type: Component,
        args: [{ selector: 'pdf-document-properties', template: "<pdf-shy-button\r\n  title=\"Document Properties\u2026\"\r\n  primaryToolbarId=\"documentProperties\"\r\n  [cssClass]=\"show | responsiveCSSClass : 'always-in-secondary-menu'\"\r\n  l10nId=\"pdfjs-document-properties-button\"\r\n  l10nLabel=\"pdfjs-document-properties-button-label\"\r\n  [order]=\"5000\"\r\n  eventBusName=\"documentproperties\"\r\n  [closeOnClick]=\"true\"\r\n  image=\"<svg class='pdf-margin-top-3px' width='16px' height='16px' viewBox='0 0 16 16'><path fill='currentColor' d='M8 16a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8zM8 2a6 6 0 1 0 6 6 6.006 6.006 0 0 0-6-6z' /><path fill='currentColor' d='M8 7a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1z' /><circle fill='currentColor' cx='8' cy='5' r='1.188' /></svg>\"\r\n>\r\n</pdf-shy-button>\r\n", styles: ["button{padding:0;margin-top:0;margin-bottom:0}\n"] }]
    }], null, { show: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PdfDocumentPropertiesComponent, { className: "PdfDocumentPropertiesComponent", filePath: "lib\\toolbar\\pdf-document-properties\\pdf-document-properties.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWRvY3VtZW50LXByb3BlcnRpZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi90b29sYmFyL3BkZi1kb2N1bWVudC1wcm9wZXJ0aWVzL3BkZi1kb2N1bWVudC1wcm9wZXJ0aWVzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtZG9jdW1lbnQtcHJvcGVydGllcy9wZGYtZG9jdW1lbnQtcHJvcGVydGllcy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQVFqRCxNQUFNLE9BQU8sOEJBQThCO0lBRWxDLElBQUksR0FBeUIsSUFBSSxDQUFDOzJHQUY5Qiw4QkFBOEI7NEZBQTlCLDhCQUE4QjtZQ1IzQyxvQ0FXaUI7OztZQUhmLEFBRkEsQUFIQSxxRkFBbUUsZUFHckQsc0JBRU87OztpRkRBViw4QkFBOEI7Y0FMMUMsU0FBUzsyQkFDRSx5QkFBeUI7Z0JBTTVCLElBQUk7a0JBRFYsS0FBSzs7a0ZBREssOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSZXNwb25zaXZlVmlzaWJpbGl0eSB9IGZyb20gJy4uLy4uL3Jlc3BvbnNpdmUtdmlzaWJpbGl0eSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BkZi1kb2N1bWVudC1wcm9wZXJ0aWVzJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGRmLWRvY3VtZW50LXByb3BlcnRpZXMuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3BkZi1kb2N1bWVudC1wcm9wZXJ0aWVzLmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBkZkRvY3VtZW50UHJvcGVydGllc0NvbXBvbmVudCB7XHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvdzogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSB0cnVlO1xyXG59XHJcbiIsIjxwZGYtc2h5LWJ1dHRvblxyXG4gIHRpdGxlPVwiRG9jdW1lbnQgUHJvcGVydGllc+KAplwiXHJcbiAgcHJpbWFyeVRvb2xiYXJJZD1cImRvY3VtZW50UHJvcGVydGllc1wiXHJcbiAgW2Nzc0NsYXNzXT1cInNob3cgfCByZXNwb25zaXZlQ1NTQ2xhc3MgOiAnYWx3YXlzLWluLXNlY29uZGFyeS1tZW51J1wiXHJcbiAgbDEwbklkPVwicGRmanMtZG9jdW1lbnQtcHJvcGVydGllcy1idXR0b25cIlxyXG4gIGwxMG5MYWJlbD1cInBkZmpzLWRvY3VtZW50LXByb3BlcnRpZXMtYnV0dG9uLWxhYmVsXCJcclxuICBbb3JkZXJdPVwiNTAwMFwiXHJcbiAgZXZlbnRCdXNOYW1lPVwiZG9jdW1lbnRwcm9wZXJ0aWVzXCJcclxuICBbY2xvc2VPbkNsaWNrXT1cInRydWVcIlxyXG4gIGltYWdlPVwiPHN2ZyBjbGFzcz0ncGRmLW1hcmdpbi10b3AtM3B4JyB3aWR0aD0nMTZweCcgaGVpZ2h0PScxNnB4JyB2aWV3Qm94PScwIDAgMTYgMTYnPjxwYXRoIGZpbGw9J2N1cnJlbnRDb2xvcicgZD0nTTggMTZhOCA4IDAgMSAxIDgtOCA4LjAwOSA4LjAwOSAwIDAgMS04IDh6TTggMmE2IDYgMCAxIDAgNiA2IDYuMDA2IDYuMDA2IDAgMCAwLTYtNnonIC8+PHBhdGggZmlsbD0nY3VycmVudENvbG9yJyBkPSdNOCA3YTEgMSAwIDAgMC0xIDF2M2ExIDEgMCAwIDAgMiAwVjhhMSAxIDAgMCAwLTEtMXonIC8+PGNpcmNsZSBmaWxsPSdjdXJyZW50Q29sb3InIGN4PSc4JyBjeT0nNScgcj0nMS4xODgnIC8+PC9zdmc+XCJcclxuPlxyXG48L3BkZi1zaHktYnV0dG9uPlxyXG4iXX0=