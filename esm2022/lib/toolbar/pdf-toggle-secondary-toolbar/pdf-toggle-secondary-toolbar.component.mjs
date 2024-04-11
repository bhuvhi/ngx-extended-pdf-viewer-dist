import { Component, Input } from '@angular/core';
import { NgxExtendedPdfViewerService } from '../../ngx-extended-pdf-viewer.service';
import * as i0 from "@angular/core";
import * as i1 from "../../ngx-extended-pdf-viewer.service";
import * as i2 from "../../responsive-visibility";
export class PdfToggleSecondaryToolbarComponent {
    service;
    showSecondaryToolbarButton = true;
    constructor(service) {
        this.service = service;
    }
    onClick(event) {
        event.preventDefault();
        return false;
    }
    /** @nocollapse */ static ɵfac = function PdfToggleSecondaryToolbarComponent_Factory(t) { return new (t || PdfToggleSecondaryToolbarComponent)(i0.ɵɵdirectiveInject(i1.NgxExtendedPdfViewerService)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfToggleSecondaryToolbarComponent, selectors: [["pdf-toggle-secondary-toolbar"]], inputs: { showSecondaryToolbarButton: "showSecondaryToolbarButton" }, decls: 6, vars: 7, consts: [["type", "button", "id", "secondaryToolbarToggle", "title", "Tools", "data-l10n-id", "pdfjs-tools-button", "aria-label", "Tools", 1, "toolbarButton"], ["role", "img", "aria-label", "Tools", "width", "27px", "height", "27px", "viewBox", "0 0 24 24", 3, "click"], ["fill", "currentColor", "d", "M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"], ["data-l10n-id", "pdfjs-tools-button-label"]], template: function PdfToggleSecondaryToolbarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵpipe(1, "responsiveCSSClass");
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(2, "svg", 1);
            i0.ɵɵlistener("click", function PdfToggleSecondaryToolbarComponent_Template_svg_click_2_listener($event) { return ctx.onClick($event); });
            i0.ɵɵelement(3, "path", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(4, "span", 3);
            i0.ɵɵtext(5, "Tools");
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵclassMap(i0.ɵɵpipeBind2(1, 4, ctx.showSecondaryToolbarButton, "always-visible"));
            i0.ɵɵclassProp("hidden", ctx.service.secondaryMenuIsEmpty);
        } }, dependencies: [i2.ResponsiveCSSClassPipe], styles: ["button[_ngcontent-%COMP%] > svg[_ngcontent-%COMP%]{margin-top:-3px}[_nghost-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]:focus{outline:none}svg[_ngcontent-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]{padding:0}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfToggleSecondaryToolbarComponent, [{
        type: Component,
        args: [{ selector: 'pdf-toggle-secondary-toolbar', template: "<button\r\n  type=\"button\"\r\n  [class]=\"showSecondaryToolbarButton | responsiveCSSClass : 'always-visible'\"\r\n  id=\"secondaryToolbarToggle\"\r\n  class=\"toolbarButton\"\r\n  title=\"Tools\"\r\n  data-l10n-id=\"pdfjs-tools-button\"\r\n  aria-label=\"Tools\"\r\n  [class.hidden]=\"service.secondaryMenuIsEmpty\"\r\n>\r\n  <svg role=\"img\" aria-label=\"Tools\" width=\"27px\" height=\"27px\" viewBox=\"0 0 24 24\" (click)=\"onClick($event)\">\r\n    <path fill=\"currentColor\" d=\"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z\" />\r\n  </svg>\r\n  <span data-l10n-id=\"pdfjs-tools-button-label\">Tools</span>\r\n</button>\r\n", styles: ["button>svg{margin-top:-3px}:host:focus{outline:none}button:focus{outline:none}svg:focus{outline:none}button{padding:0}\n"] }]
    }], () => [{ type: i1.NgxExtendedPdfViewerService }], { showSecondaryToolbarButton: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PdfToggleSecondaryToolbarComponent, { className: "PdfToggleSecondaryToolbarComponent", filePath: "lib\\toolbar\\pdf-toggle-secondary-toolbar\\pdf-toggle-secondary-toolbar.component.ts", lineNumber: 10 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXRvZ2dsZS1zZWNvbmRhcnktdG9vbGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL3Rvb2xiYXIvcGRmLXRvZ2dsZS1zZWNvbmRhcnktdG9vbGJhci9wZGYtdG9nZ2xlLXNlY29uZGFyeS10b29sYmFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtdG9nZ2xlLXNlY29uZGFyeS10b29sYmFyL3BkZi10b2dnbGUtc2Vjb25kYXJ5LXRvb2xiYXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7Ozs7QUFPcEYsTUFBTSxPQUFPLGtDQUFrQztJQUkxQjtJQUZaLDBCQUEwQixHQUF5QixJQUFJLENBQUM7SUFFL0QsWUFBbUIsT0FBb0M7UUFBcEMsWUFBTyxHQUFQLE9BQU8sQ0FBNkI7SUFBRyxDQUFDO0lBRXBELE9BQU8sQ0FBQyxLQUFZO1FBQ3pCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7K0dBVFUsa0NBQWtDOzRGQUFsQyxrQ0FBa0M7WUNUL0MsaUNBU0M7OztZQUNDLDhCQUE0RztZQUExQixrSEFBUyxtQkFBZSxJQUFDO1lBQ3pHLDBCQUErRTtZQUNqRixpQkFBTTs7WUFDTiwrQkFBOEM7WUFBQSxxQkFBSztZQUNyRCxBQURxRCxpQkFBTyxFQUNuRDs7WUFaUCxxRkFBNEU7WUFNNUUsMERBQTZDOzs7aUZEQ2xDLGtDQUFrQztjQUw5QyxTQUFTOzJCQUNFLDhCQUE4Qjs0REFNakMsMEJBQTBCO2tCQURoQyxLQUFLOztrRkFESyxrQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJlc3BvbnNpdmVWaXNpYmlsaXR5IH0gZnJvbSAnLi4vLi4vcmVzcG9uc2l2ZS12aXNpYmlsaXR5JztcclxuaW1wb3J0IHsgTmd4RXh0ZW5kZWRQZGZWaWV3ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BkZi10b2dnbGUtc2Vjb25kYXJ5LXRvb2xiYXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wZGYtdG9nZ2xlLXNlY29uZGFyeS10b29sYmFyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wZGYtdG9nZ2xlLXNlY29uZGFyeS10b29sYmFyLmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBkZlRvZ2dsZVNlY29uZGFyeVRvb2xiYXJDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dTZWNvbmRhcnlUb29sYmFyQnV0dG9uOiBSZXNwb25zaXZlVmlzaWJpbGl0eSA9IHRydWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzZXJ2aWNlOiBOZ3hFeHRlbmRlZFBkZlZpZXdlclNlcnZpY2UpIHt9XHJcblxyXG4gIHB1YmxpYyBvbkNsaWNrKGV2ZW50OiBFdmVudCk6IGJvb2xlYW4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuIiwiPGJ1dHRvblxyXG4gIHR5cGU9XCJidXR0b25cIlxyXG4gIFtjbGFzc109XCJzaG93U2Vjb25kYXJ5VG9vbGJhckJ1dHRvbiB8IHJlc3BvbnNpdmVDU1NDbGFzcyA6ICdhbHdheXMtdmlzaWJsZSdcIlxyXG4gIGlkPVwic2Vjb25kYXJ5VG9vbGJhclRvZ2dsZVwiXHJcbiAgY2xhc3M9XCJ0b29sYmFyQnV0dG9uXCJcclxuICB0aXRsZT1cIlRvb2xzXCJcclxuICBkYXRhLWwxMG4taWQ9XCJwZGZqcy10b29scy1idXR0b25cIlxyXG4gIGFyaWEtbGFiZWw9XCJUb29sc1wiXHJcbiAgW2NsYXNzLmhpZGRlbl09XCJzZXJ2aWNlLnNlY29uZGFyeU1lbnVJc0VtcHR5XCJcclxuPlxyXG4gIDxzdmcgcm9sZT1cImltZ1wiIGFyaWEtbGFiZWw9XCJUb29sc1wiIHdpZHRoPVwiMjdweFwiIGhlaWdodD1cIjI3cHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgKGNsaWNrKT1cIm9uQ2xpY2soJGV2ZW50KVwiPlxyXG4gICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMyw2SDIxVjhIM1Y2TTMsMTFIMjFWMTNIM1YxMU0zLDE2SDIxVjE4SDNWMTZaXCIgLz5cclxuICA8L3N2Zz5cclxuICA8c3BhbiBkYXRhLWwxMG4taWQ9XCJwZGZqcy10b29scy1idXR0b24tbGFiZWxcIj5Ub29sczwvc3Bhbj5cclxuPC9idXR0b24+XHJcbiJdfQ==