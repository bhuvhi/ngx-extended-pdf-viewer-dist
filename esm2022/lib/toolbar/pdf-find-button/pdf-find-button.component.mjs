import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../pdf-shy-button/pdf-shy-button.component";
import * as i2 from "../../responsive-visibility";
export class PdfFindButtonComponent {
    showFindButton = undefined;
    textLayer = undefined;
    findbarVisible = false;
    onClick() {
        const PDFViewerApplication = window.PDFViewerApplication;
        if (PDFViewerApplication.findBar.opened) {
            PDFViewerApplication.findBar.close();
        }
        else {
            PDFViewerApplication.findBar.open();
        }
    }
    /** @nocollapse */ static ɵfac = function PdfFindButtonComponent_Factory(t) { return new (t || PdfFindButtonComponent)(); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfFindButtonComponent, selectors: [["pdf-find-button"]], inputs: { showFindButton: "showFindButton", textLayer: "textLayer", findbarVisible: "findbarVisible" }, decls: 2, vars: 7, consts: [["primaryToolbarId", "primaryViewFind", "title", "Find in Document", "l10nId", "pdfjs-findbar-button", "l10nLabel", "pdfjs-findbar-button-label", "image", "<svg width='24px' height='24px' viewBox='0 0 24 24'> <path fill='currentColor' d='M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z' /> </svg>", 3, "cssClass", "order", "action", "toggled"]], template: function PdfFindButtonComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "pdf-shy-button", 0);
            i0.ɵɵpipe(1, "responsiveCSSClass");
        } if (rf & 2) {
            i0.ɵɵproperty("cssClass", i0.ɵɵpipeBind2(1, 4, ctx.showFindButton, ctx.textLayer ? "always-visible" : "invisible"))("order", 1400)("action", ctx.onClick)("toggled", ctx.findbarVisible);
        } }, dependencies: [i1.PdfShyButtonComponent, i2.ResponsiveCSSClassPipe], styles: ["[_nghost-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]:focus{outline:none}svg[_ngcontent-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]{padding:0}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfFindButtonComponent, [{
        type: Component,
        args: [{ selector: 'pdf-find-button', template: "<pdf-shy-button\r\n  [cssClass]=\"showFindButton | responsiveCSSClass : (textLayer ? 'always-visible' : 'invisible')\"\r\n  primaryToolbarId=\"primaryViewFind\"\r\n  title=\"Find in Document\"\r\n  l10nId=\"pdfjs-findbar-button\"\r\n  l10nLabel=\"pdfjs-findbar-button-label\"\r\n  [order]=\"1400\"\r\n  [action]=\"onClick\"\r\n  [toggled]=\"findbarVisible\"\r\n  image=\"<svg width='24px' height='24px' viewBox='0 0 24 24'> <path fill='currentColor' d='M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z' /> </svg>\"\r\n>\r\n</pdf-shy-button>\r\n", styles: [":host:focus{outline:none}button:focus{outline:none}svg:focus{outline:none}button{padding:0}\n"] }]
    }], null, { showFindButton: [{
            type: Input
        }], textLayer: [{
            type: Input
        }], findbarVisible: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PdfFindButtonComponent, { className: "PdfFindButtonComponent", filePath: "lib\\toolbar\\pdf-find-button\\pdf-find-button.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWZpbmQtYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtZmluZC1idXR0b24vcGRmLWZpbmQtYnV0dG9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtZmluZC1idXR0b24vcGRmLWZpbmQtYnV0dG9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBUWpELE1BQU0sT0FBTyxzQkFBc0I7SUFFMUIsY0FBYyxHQUFxQyxTQUFTLENBQUM7SUFHN0QsU0FBUyxHQUF3QixTQUFTLENBQUM7SUFHM0MsY0FBYyxHQUFHLEtBQUssQ0FBQztJQUV2QixPQUFPO1FBQ1osTUFBTSxvQkFBb0IsR0FBUyxNQUFjLENBQUMsb0JBQW9CLENBQUM7UUFDdkUsSUFBSSxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQ3ZDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN0QzthQUFNO1lBQ0wsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQzttR0FqQlUsc0JBQXNCOzRGQUF0QixzQkFBc0I7WUNSbkMsb0NBV2lCOzs7WUFIZixBQURBLEFBREEsQUFMQSxtSEFBK0YsZUFLakYsdUJBQ0ksK0JBQ1E7OztpRkRBZixzQkFBc0I7Y0FMbEMsU0FBUzsyQkFDRSxpQkFBaUI7Z0JBTXBCLGNBQWM7a0JBRHBCLEtBQUs7WUFJQyxTQUFTO2tCQURmLEtBQUs7WUFJQyxjQUFjO2tCQURwQixLQUFLOztrRkFQSyxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJlc3BvbnNpdmVWaXNpYmlsaXR5IH0gZnJvbSAnLi4vLi4vcmVzcG9uc2l2ZS12aXNpYmlsaXR5JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncGRmLWZpbmQtYnV0dG9uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGRmLWZpbmQtYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wZGYtZmluZC1idXR0b24uY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGRmRmluZEJ1dHRvbkNvbXBvbmVudCB7XHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd0ZpbmRCdXR0b246IFJlc3BvbnNpdmVWaXNpYmlsaXR5IHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyB0ZXh0TGF5ZXI6IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGZpbmRiYXJWaXNpYmxlID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyBvbkNsaWNrKCkge1xyXG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IGFueSA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgIGlmIChQREZWaWV3ZXJBcHBsaWNhdGlvbi5maW5kQmFyLm9wZW5lZCkge1xyXG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5maW5kQmFyLmNsb3NlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5maW5kQmFyLm9wZW4oKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPHBkZi1zaHktYnV0dG9uXHJcbiAgW2Nzc0NsYXNzXT1cInNob3dGaW5kQnV0dG9uIHwgcmVzcG9uc2l2ZUNTU0NsYXNzIDogKHRleHRMYXllciA/ICdhbHdheXMtdmlzaWJsZScgOiAnaW52aXNpYmxlJylcIlxyXG4gIHByaW1hcnlUb29sYmFySWQ9XCJwcmltYXJ5Vmlld0ZpbmRcIlxyXG4gIHRpdGxlPVwiRmluZCBpbiBEb2N1bWVudFwiXHJcbiAgbDEwbklkPVwicGRmanMtZmluZGJhci1idXR0b25cIlxyXG4gIGwxMG5MYWJlbD1cInBkZmpzLWZpbmRiYXItYnV0dG9uLWxhYmVsXCJcclxuICBbb3JkZXJdPVwiMTQwMFwiXHJcbiAgW2FjdGlvbl09XCJvbkNsaWNrXCJcclxuICBbdG9nZ2xlZF09XCJmaW5kYmFyVmlzaWJsZVwiXHJcbiAgaW1hZ2U9XCI8c3ZnIHdpZHRoPScyNHB4JyBoZWlnaHQ9JzI0cHgnIHZpZXdCb3g9JzAgMCAyNCAyNCc+IDxwYXRoIGZpbGw9J2N1cnJlbnRDb2xvcicgZD0nTTkuNSwzQTYuNSw2LjUgMCAwLDEgMTYsOS41QzE2LDExLjExIDE1LjQxLDEyLjU5IDE0LjQ0LDEzLjczTDE0LjcxLDE0SDE1LjVMMjAuNSwxOUwxOSwyMC41TDE0LDE1LjVWMTQuNzFMMTMuNzMsMTQuNDRDMTIuNTksMTUuNDEgMTEuMTEsMTYgOS41LDE2QTYuNSw2LjUgMCAwLDEgMyw5LjVBNi41LDYuNSAwIDAsMSA5LjUsM005LjUsNUM3LDUgNSw3IDUsOS41QzUsMTIgNywxNCA5LjUsMTRDMTIsMTQgMTQsMTIgMTQsOS41QzE0LDcgMTIsNSA5LjUsNVonIC8+IDwvc3ZnPlwiXHJcbj5cclxuPC9wZGYtc2h5LWJ1dHRvbj5cclxuIl19