import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../pdf-shy-button/pdf-shy-button.component";
import * as i2 from "../../responsive-visibility";
export class PdfFindButtonComponent {
    constructor() {
        this.showFindButton = undefined;
        this.textLayer = undefined;
        this.findbarVisible = false;
    }
    onClick() {
        const PDFViewerApplication = window.PDFViewerApplication;
        if (PDFViewerApplication.findBar.opened) {
            PDFViewerApplication.findBar.close();
        }
        else {
            PDFViewerApplication.findBar.open();
        }
    }
}
/** @nocollapse */ PdfFindButtonComponent.ɵfac = function PdfFindButtonComponent_Factory(t) { return new (t || PdfFindButtonComponent)(); };
/** @nocollapse */ PdfFindButtonComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfFindButtonComponent, selectors: [["pdf-find-button"]], inputs: { showFindButton: "showFindButton", textLayer: "textLayer", findbarVisible: "findbarVisible" }, decls: 2, vars: 7, consts: [["primaryToolbarId", "primaryViewFind", "title", "Find in Document", "l10nId", "findbar", "l10nLabel", "findbar_label", "image", "<svg style='width: 24px; height: 24px' viewBox='0 0 24 24'> <path fill='currentColor' d='M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z' /> </svg>", 3, "cssClass", "order", "action", "toggled"]], template: function PdfFindButtonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "pdf-shy-button", 0);
        i0.ɵɵpipe(1, "responsiveCSSClass");
    } if (rf & 2) {
        i0.ɵɵproperty("cssClass", i0.ɵɵpipeBind2(1, 4, ctx.showFindButton, ctx.textLayer ? "always-visible" : "invisible"))("order", 1400)("action", ctx.onClick)("toggled", ctx.findbarVisible);
    } }, directives: [i1.PdfShyButtonComponent], pipes: [i2.ResponsiveCSSClassPipe], styles: ["[_nghost-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]:focus{outline:none}svg[_ngcontent-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]{padding:0}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfFindButtonComponent, [{
        type: Component,
        args: [{ selector: 'pdf-find-button', template: "<pdf-shy-button\n  [cssClass]=\"showFindButton | responsiveCSSClass : (textLayer ? 'always-visible' : 'invisible')\"\n  primaryToolbarId=\"primaryViewFind\"\n  title=\"Find in Document\"\n  l10nId=\"findbar\"\n  l10nLabel=\"findbar_label\"\n  [order]=\"1400\"\n  [action]=\"onClick\"\n  [toggled]=\"findbarVisible\"\n  image=\"<svg style='width: 24px; height: 24px' viewBox='0 0 24 24'> <path fill='currentColor' d='M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z' /> </svg>\"\n>\n</pdf-shy-button>\n", styles: [":host:focus{outline:none}button:focus{outline:none}svg:focus{outline:none}button{padding:0}\n"] }]
    }], null, { showFindButton: [{
            type: Input
        }], textLayer: [{
            type: Input
        }], findbarVisible: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWZpbmQtYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtZmluZC1idXR0b24vcGRmLWZpbmQtYnV0dG9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtZmluZC1idXR0b24vcGRmLWZpbmQtYnV0dG9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBUWpELE1BQU0sT0FBTyxzQkFBc0I7SUFMbkM7UUFPUyxtQkFBYyxHQUFxQyxTQUFTLENBQUM7UUFHN0QsY0FBUyxHQUF3QixTQUFTLENBQUM7UUFHM0MsbUJBQWMsR0FBRyxLQUFLLENBQUM7S0FVL0I7SUFSUSxPQUFPO1FBQ1osTUFBTSxvQkFBb0IsR0FBUyxNQUFjLENBQUMsb0JBQW9CLENBQUM7UUFDdkUsSUFBSSxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQ3ZDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN0QzthQUFNO1lBQ0wsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQzs7K0dBakJVLHNCQUFzQjt3R0FBdEIsc0JBQXNCO1FDUm5DLG9DQVdpQjs7O1FBVmYsbUhBQStGLGVBQUEsdUJBQUEsK0JBQUE7O3VGRE9wRixzQkFBc0I7Y0FMbEMsU0FBUzsyQkFDRSxpQkFBaUI7Z0JBTXBCLGNBQWM7a0JBRHBCLEtBQUs7WUFJQyxTQUFTO2tCQURmLEtBQUs7WUFJQyxjQUFjO2tCQURwQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzcG9uc2l2ZVZpc2liaWxpdHkgfSBmcm9tICcuLi8uLi9yZXNwb25zaXZlLXZpc2liaWxpdHknO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwZGYtZmluZC1idXR0b24nLFxuICB0ZW1wbGF0ZVVybDogJy4vcGRmLWZpbmQtYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGRmLWZpbmQtYnV0dG9uLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgUGRmRmluZEJ1dHRvbkNvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93RmluZEJ1dHRvbjogUmVzcG9uc2l2ZVZpc2liaWxpdHkgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHRleHRMYXllcjogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgZmluZGJhclZpc2libGUgPSBmYWxzZTtcblxuICBwdWJsaWMgb25DbGljaygpIHtcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogYW55ID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xuICAgIGlmIChQREZWaWV3ZXJBcHBsaWNhdGlvbi5maW5kQmFyLm9wZW5lZCkge1xuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZmluZEJhci5jbG9zZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5maW5kQmFyLm9wZW4oKTtcbiAgICB9XG4gIH1cbn1cbiIsIjxwZGYtc2h5LWJ1dHRvblxuICBbY3NzQ2xhc3NdPVwic2hvd0ZpbmRCdXR0b24gfCByZXNwb25zaXZlQ1NTQ2xhc3MgOiAodGV4dExheWVyID8gJ2Fsd2F5cy12aXNpYmxlJyA6ICdpbnZpc2libGUnKVwiXG4gIHByaW1hcnlUb29sYmFySWQ9XCJwcmltYXJ5Vmlld0ZpbmRcIlxuICB0aXRsZT1cIkZpbmQgaW4gRG9jdW1lbnRcIlxuICBsMTBuSWQ9XCJmaW5kYmFyXCJcbiAgbDEwbkxhYmVsPVwiZmluZGJhcl9sYWJlbFwiXG4gIFtvcmRlcl09XCIxNDAwXCJcbiAgW2FjdGlvbl09XCJvbkNsaWNrXCJcbiAgW3RvZ2dsZWRdPVwiZmluZGJhclZpc2libGVcIlxuICBpbWFnZT1cIjxzdmcgc3R5bGU9J3dpZHRoOiAyNHB4OyBoZWlnaHQ6IDI0cHgnIHZpZXdCb3g9JzAgMCAyNCAyNCc+IDxwYXRoIGZpbGw9J2N1cnJlbnRDb2xvcicgZD0nTTkuNSwzQTYuNSw2LjUgMCAwLDEgMTYsOS41QzE2LDExLjExIDE1LjQxLDEyLjU5IDE0LjQ0LDEzLjczTDE0LjcxLDE0SDE1LjVMMjAuNSwxOUwxOSwyMC41TDE0LDE1LjVWMTQuNzFMMTMuNzMsMTQuNDRDMTIuNTksMTUuNDEgMTEuMTEsMTYgOS41LDE2QTYuNSw2LjUgMCAwLDEgMyw5LjVBNi41LDYuNSAwIDAsMSA5LjUsM005LjUsNUM3LDUgNSw3IDUsOS41QzUsMTIgNywxNCA5LjUsMTRDMTIsMTQgMTQsMTIgMTQsOS41QzE0LDcgMTIsNSA5LjUsNVonIC8+IDwvc3ZnPlwiXG4+XG48L3BkZi1zaHktYnV0dG9uPlxuIl19