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
        args: [{ selector: 'pdf-toggle-secondary-toolbar', template: "<button\n  type=\"button\"\n  [class]=\"showSecondaryToolbarButton | responsiveCSSClass : 'always-visible'\"\n  id=\"secondaryToolbarToggle\"\n  class=\"toolbarButton\"\n  title=\"Tools\"\n  data-l10n-id=\"tools\"\n  aria-label=\"Tools\"\n  [class.hidden]=\"service.secondaryMenuIsEmpty\"\n>\n  <svg role=\"img\" aria-label=\"Tools\" style=\"width: 27px; height: 27px\" viewBox=\"0 0 24 24\" (click)=\"onClick($event)\">\n    <path fill=\"currentColor\" d=\"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z\" />\n  </svg>\n  <span data-l10n-id=\"tools_label\">Tools</span>\n</button>\n", styles: ["button>svg{margin-top:-3px}:host:focus{outline:none}button:focus{outline:none}svg:focus{outline:none}button{padding:0}\n"] }]
    }], function () { return [{ type: i1.NgxExtendedPdfViewerService }]; }, { showSecondaryToolbarButton: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXRvZ2dsZS1zZWNvbmRhcnktdG9vbGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL3Rvb2xiYXIvcGRmLXRvZ2dsZS1zZWNvbmRhcnktdG9vbGJhci9wZGYtdG9nZ2xlLXNlY29uZGFyeS10b29sYmFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtdG9nZ2xlLXNlY29uZGFyeS10b29sYmFyL3BkZi10b2dnbGUtc2Vjb25kYXJ5LXRvb2xiYXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7Ozs7QUFPcEYsTUFBTSxPQUFPLGtDQUFrQztJQUk3QyxZQUFtQixPQUFvQztRQUFwQyxZQUFPLEdBQVAsT0FBTyxDQUE2QjtRQUZoRCwrQkFBMEIsR0FBeUIsSUFBSSxDQUFDO0lBRUwsQ0FBQztJQUVwRCxPQUFPLENBQUMsS0FBWTtRQUN6QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzt1SUFUVSxrQ0FBa0M7b0hBQWxDLGtDQUFrQztRQ1QvQyxpQ0FTQzs7UUFDQyxtQkFBbUg7UUFBbkgsOEJBQW1IO1FBQTFCLHVIQUFTLG1CQUFlLElBQUM7UUFDaEgsMEJBQStFO1FBQ2pGLGlCQUFNO1FBQ04sb0JBQWlDO1FBQWpDLCtCQUFpQztRQUFBLHFCQUFLO1FBQUEsaUJBQU8sRUFBQTs7UUFYN0MscUZBQTRFO1FBTTVFLDBEQUE2Qzs7dUZEQ2xDLGtDQUFrQztjQUw5QyxTQUFTOzJCQUNFLDhCQUE4Qjs4RUFNakMsMEJBQTBCO2tCQURoQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzcG9uc2l2ZVZpc2liaWxpdHkgfSBmcm9tICcuLi8uLi9yZXNwb25zaXZlLXZpc2liaWxpdHknO1xuaW1wb3J0IHsgTmd4RXh0ZW5kZWRQZGZWaWV3ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BkZi10b2dnbGUtc2Vjb25kYXJ5LXRvb2xiYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vcGRmLXRvZ2dsZS1zZWNvbmRhcnktdG9vbGJhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3BkZi10b2dnbGUtc2Vjb25kYXJ5LXRvb2xiYXIuY29tcG9uZW50LmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBQZGZUb2dnbGVTZWNvbmRhcnlUb29sYmFyQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgcHVibGljIHNob3dTZWNvbmRhcnlUb29sYmFyQnV0dG9uOiBSZXNwb25zaXZlVmlzaWJpbGl0eSA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHNlcnZpY2U6IE5neEV4dGVuZGVkUGRmVmlld2VyU2VydmljZSkge31cblxuICBwdWJsaWMgb25DbGljayhldmVudDogRXZlbnQpOiBib29sZWFuIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIiwiPGJ1dHRvblxuICB0eXBlPVwiYnV0dG9uXCJcbiAgW2NsYXNzXT1cInNob3dTZWNvbmRhcnlUb29sYmFyQnV0dG9uIHwgcmVzcG9uc2l2ZUNTU0NsYXNzIDogJ2Fsd2F5cy12aXNpYmxlJ1wiXG4gIGlkPVwic2Vjb25kYXJ5VG9vbGJhclRvZ2dsZVwiXG4gIGNsYXNzPVwidG9vbGJhckJ1dHRvblwiXG4gIHRpdGxlPVwiVG9vbHNcIlxuICBkYXRhLWwxMG4taWQ9XCJ0b29sc1wiXG4gIGFyaWEtbGFiZWw9XCJUb29sc1wiXG4gIFtjbGFzcy5oaWRkZW5dPVwic2VydmljZS5zZWNvbmRhcnlNZW51SXNFbXB0eVwiXG4+XG4gIDxzdmcgcm9sZT1cImltZ1wiIGFyaWEtbGFiZWw9XCJUb29sc1wiIHN0eWxlPVwid2lkdGg6IDI3cHg7IGhlaWdodDogMjdweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiAoY2xpY2spPVwib25DbGljaygkZXZlbnQpXCI+XG4gICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMyw2SDIxVjhIM1Y2TTMsMTFIMjFWMTNIM1YxMU0zLDE2SDIxVjE4SDNWMTZaXCIgLz5cbiAgPC9zdmc+XG4gIDxzcGFuIGRhdGEtbDEwbi1pZD1cInRvb2xzX2xhYmVsXCI+VG9vbHM8L3NwYW4+XG48L2J1dHRvbj5cbiJdfQ==