import { Component, Input } from '@angular/core';
import { NgxExtendedPdfViewerService } from '../../ngx-extended-pdf-viewer.service';
import * as i0 from "@angular/core";
import * as i1 from "../../ngx-extended-pdf-viewer.service";
import * as i2 from "../../responsive-visibility";
export class PdfToggleSecondaryToolbarComponent {
    constructor(service) {
        this.service = service;
        this.showSecondaryToolbarButton = true;
    }
    onClick(event) {
        event.preventDefault();
        return false;
    }
}
/** @nocollapse */ PdfToggleSecondaryToolbarComponent.ɵfac = function PdfToggleSecondaryToolbarComponent_Factory(t) { return new (t || PdfToggleSecondaryToolbarComponent)(i0.ɵɵdirectiveInject(i1.NgxExtendedPdfViewerService)); };
/** @nocollapse */ PdfToggleSecondaryToolbarComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfToggleSecondaryToolbarComponent, selectors: [["pdf-toggle-secondary-toolbar"]], inputs: { showSecondaryToolbarButton: "showSecondaryToolbarButton" }, decls: 6, vars: 7, consts: [["type", "button", "id", "secondaryToolbarToggle", "title", "Tools", "data-l10n-id", "tools", "aria-label", "Tools", 1, "toolbarButton"], ["role", "img", "aria-label", "Tools", "viewBox", "0 0 24 24", 2, "width", "27px", "height", "27px", 3, "click"], ["fill", "currentColor", "d", "M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"], ["data-l10n-id", "tools_label"]], template: function PdfToggleSecondaryToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵpipe(1, "responsiveCSSClass");
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(2, "svg", 1);
        i0.ɵɵlistener("click", function PdfToggleSecondaryToolbarComponent_Template__svg_svg_click_2_listener($event) { return ctx.onClick($event); });
        i0.ɵɵelement(3, "path", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(4, "span", 3);
        i0.ɵɵtext(5, "Tools");
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵclassMap(i0.ɵɵpipeBind2(1, 4, ctx.showSecondaryToolbarButton, "always-visible"));
        i0.ɵɵclassProp("hidden", ctx.service.secondaryMenuIsEmpty);
    } }, pipes: [i2.ResponsiveCSSClassPipe], styles: ["button[_ngcontent-%COMP%] > svg[_ngcontent-%COMP%]{margin-top:-3px}[_nghost-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]:focus{outline:none}svg[_ngcontent-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]{padding:0}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfToggleSecondaryToolbarComponent, [{
        type: Component,
        args: [{ selector: 'pdf-toggle-secondary-toolbar', template: "<button\r\n  type=\"button\"\r\n  [class]=\"showSecondaryToolbarButton | responsiveCSSClass : 'always-visible'\"\r\n  id=\"secondaryToolbarToggle\"\r\n  class=\"toolbarButton\"\r\n  title=\"Tools\"\r\n  data-l10n-id=\"tools\"\r\n  aria-label=\"Tools\"\r\n  [class.hidden]=\"service.secondaryMenuIsEmpty\"\r\n>\r\n  <svg role=\"img\" aria-label=\"Tools\" style=\"width: 27px; height: 27px\" viewBox=\"0 0 24 24\" (click)=\"onClick($event)\">\r\n    <path fill=\"currentColor\" d=\"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z\" />\r\n  </svg>\r\n  <span data-l10n-id=\"tools_label\">Tools</span>\r\n</button>\r\n", styles: ["button>svg{margin-top:-3px}:host:focus{outline:none}button:focus{outline:none}svg:focus{outline:none}button{padding:0}\n"] }]
    }], function () { return [{ type: i1.NgxExtendedPdfViewerService }]; }, { showSecondaryToolbarButton: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXRvZ2dsZS1zZWNvbmRhcnktdG9vbGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL3Rvb2xiYXIvcGRmLXRvZ2dsZS1zZWNvbmRhcnktdG9vbGJhci9wZGYtdG9nZ2xlLXNlY29uZGFyeS10b29sYmFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtdG9nZ2xlLXNlY29uZGFyeS10b29sYmFyL3BkZi10b2dnbGUtc2Vjb25kYXJ5LXRvb2xiYXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7Ozs7QUFPcEYsTUFBTSxPQUFPLGtDQUFrQztJQUk3QyxZQUFtQixPQUFvQztRQUFwQyxZQUFPLEdBQVAsT0FBTyxDQUE2QjtRQUZoRCwrQkFBMEIsR0FBeUIsSUFBSSxDQUFDO0lBRUwsQ0FBQztJQUVwRCxPQUFPLENBQUMsS0FBWTtRQUN6QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzt1SUFUVSxrQ0FBa0M7b0hBQWxDLGtDQUFrQztRQ1QvQyxpQ0FTQzs7UUFDQyxtQkFBbUg7UUFBbkgsOEJBQW1IO1FBQTFCLHVIQUFTLG1CQUFlLElBQUM7UUFDaEgsMEJBQStFO1FBQ2pGLGlCQUFNO1FBQ04sb0JBQWlDO1FBQWpDLCtCQUFpQztRQUFBLHFCQUFLO1FBQUEsaUJBQU8sRUFBQTs7UUFYN0MscUZBQTRFO1FBTTVFLDBEQUE2Qzs7dUZEQ2xDLGtDQUFrQztjQUw5QyxTQUFTOzJCQUNFLDhCQUE4Qjs4RUFNakMsMEJBQTBCO2tCQURoQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSZXNwb25zaXZlVmlzaWJpbGl0eSB9IGZyb20gJy4uLy4uL3Jlc3BvbnNpdmUtdmlzaWJpbGl0eSc7XHJcbmltcG9ydCB7IE5neEV4dGVuZGVkUGRmVmlld2VyU2VydmljZSB9IGZyb20gJy4uLy4uL25neC1leHRlbmRlZC1wZGYtdmlld2VyLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwZGYtdG9nZ2xlLXNlY29uZGFyeS10b29sYmFyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGRmLXRvZ2dsZS1zZWNvbmRhcnktdG9vbGJhci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGRmLXRvZ2dsZS1zZWNvbmRhcnktdG9vbGJhci5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQZGZUb2dnbGVTZWNvbmRhcnlUb29sYmFyQ29tcG9uZW50IHtcclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93U2Vjb25kYXJ5VG9vbGJhckJ1dHRvbjogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSB0cnVlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2VydmljZTogTmd4RXh0ZW5kZWRQZGZWaWV3ZXJTZXJ2aWNlKSB7fVxyXG5cclxuICBwdWJsaWMgb25DbGljayhldmVudDogRXZlbnQpOiBib29sZWFuIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcbiIsIjxidXR0b25cclxuICB0eXBlPVwiYnV0dG9uXCJcclxuICBbY2xhc3NdPVwic2hvd1NlY29uZGFyeVRvb2xiYXJCdXR0b24gfCByZXNwb25zaXZlQ1NTQ2xhc3MgOiAnYWx3YXlzLXZpc2libGUnXCJcclxuICBpZD1cInNlY29uZGFyeVRvb2xiYXJUb2dnbGVcIlxyXG4gIGNsYXNzPVwidG9vbGJhckJ1dHRvblwiXHJcbiAgdGl0bGU9XCJUb29sc1wiXHJcbiAgZGF0YS1sMTBuLWlkPVwidG9vbHNcIlxyXG4gIGFyaWEtbGFiZWw9XCJUb29sc1wiXHJcbiAgW2NsYXNzLmhpZGRlbl09XCJzZXJ2aWNlLnNlY29uZGFyeU1lbnVJc0VtcHR5XCJcclxuPlxyXG4gIDxzdmcgcm9sZT1cImltZ1wiIGFyaWEtbGFiZWw9XCJUb29sc1wiIHN0eWxlPVwid2lkdGg6IDI3cHg7IGhlaWdodDogMjdweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiAoY2xpY2spPVwib25DbGljaygkZXZlbnQpXCI+XHJcbiAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0zLDZIMjFWOEgzVjZNMywxMUgyMVYxM0gzVjExTTMsMTZIMjFWMThIM1YxNlpcIiAvPlxyXG4gIDwvc3ZnPlxyXG4gIDxzcGFuIGRhdGEtbDEwbi1pZD1cInRvb2xzX2xhYmVsXCI+VG9vbHM8L3NwYW4+XHJcbjwvYnV0dG9uPlxyXG4iXX0=