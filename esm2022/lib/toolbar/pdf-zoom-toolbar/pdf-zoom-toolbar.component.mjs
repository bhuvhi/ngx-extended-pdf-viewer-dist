import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./pdf-zoom-dropdown/pdf-zoom-dropdown.component";
import * as i2 from "./pdf-zoom-in/pdf-zoom-in.component";
import * as i3 from "./pdf-zoom-out/pdf-zoom-out.component";
import * as i4 from "../../responsive-visibility";
export class PdfZoomToolbarComponent {
    showZoomButtons = true;
    zoomLevels = ['auto', 'page-actual', 'page-fit', 'page-width', 0.5, 0.75, 1, 1.25, 1.5, 2, 3, 4];
    /** @nocollapse */ static ɵfac = function PdfZoomToolbarComponent_Factory(t) { return new (t || PdfZoomToolbarComponent)(); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfZoomToolbarComponent, selectors: [["pdf-zoom-toolbar"]], inputs: { showZoomButtons: "showZoomButtons", zoomLevels: "zoomLevels" }, decls: 5, vars: 8, consts: [["id", "toolbarViewerMiddle"], [3, "showZoomButtons"], [1, "reset-width-padding", 3, "zoomLevels"]], template: function PdfZoomToolbarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵpipe(1, "responsiveCSSClass");
            i0.ɵɵelement(2, "pdf-zoom-out", 1)(3, "pdf-zoom-in", 1)(4, "pdf-zoom-dropdown", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassMap(i0.ɵɵpipeBind2(1, 5, ctx.showZoomButtons, "always-visible"));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("showZoomButtons", ctx.showZoomButtons);
            i0.ɵɵadvance();
            i0.ɵɵproperty("showZoomButtons", ctx.showZoomButtons);
            i0.ɵɵadvance();
            i0.ɵɵproperty("zoomLevels", ctx.zoomLevels);
        } }, dependencies: [i1.PdfZoomDropdownComponent, i2.PdfZoomInComponent, i3.PdfZoomOutComponent, i4.ResponsiveCSSClassPipe], styles: [".reset-width-padding[_ngcontent-%COMP%]{width:unset;max-width:unset;padding-top:3px}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfZoomToolbarComponent, [{
        type: Component,
        args: [{ selector: 'pdf-zoom-toolbar', template: "<div id=\"toolbarViewerMiddle\" [class]=\"showZoomButtons | responsiveCSSClass : 'always-visible'\">\r\n  <pdf-zoom-out [showZoomButtons]=\"showZoomButtons\"></pdf-zoom-out>\r\n  <pdf-zoom-in [showZoomButtons]=\"showZoomButtons\"></pdf-zoom-in>\r\n  <pdf-zoom-dropdown class=\"reset-width-padding\" [zoomLevels]=\"zoomLevels\"> </pdf-zoom-dropdown>\r\n</div>\r\n", styles: [".reset-width-padding{width:unset;max-width:unset;padding-top:3px}\n"] }]
    }], null, { showZoomButtons: [{
            type: Input
        }], zoomLevels: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PdfZoomToolbarComponent, { className: "PdfZoomToolbarComponent", filePath: "lib\\toolbar\\pdf-zoom-toolbar\\pdf-zoom-toolbar.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXpvb20tdG9vbGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL3Rvb2xiYXIvcGRmLXpvb20tdG9vbGJhci9wZGYtem9vbS10b29sYmFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtem9vbS10b29sYmFyL3BkZi16b29tLXRvb2xiYXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7OztBQVFqRCxNQUFNLE9BQU8sdUJBQXVCO0lBRTNCLGVBQWUsR0FBeUIsSUFBSSxDQUFDO0lBRzdDLFVBQVUsR0FBRyxDQUFDLE1BQU0sRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0dBTDdGLHVCQUF1Qjs0RkFBdkIsdUJBQXVCO1lDUnBDLDhCQUFnRzs7WUFHOUYsQUFEQSxBQURBLGtDQUFpRSxxQkFDRiwyQkFDK0I7WUFDaEcsaUJBQU07O1lBSndCLDBFQUFpRTtZQUMvRSxlQUFtQztZQUFuQyxxREFBbUM7WUFDcEMsY0FBbUM7WUFBbkMscURBQW1DO1lBQ0QsY0FBeUI7WUFBekIsMkNBQXlCOzs7aUZESzdELHVCQUF1QjtjQUxuQyxTQUFTOzJCQUNFLGtCQUFrQjtnQkFNckIsZUFBZTtrQkFEckIsS0FBSztZQUlDLFVBQVU7a0JBRGhCLEtBQUs7O2tGQUpLLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUmVzcG9uc2l2ZVZpc2liaWxpdHkgfSBmcm9tICcuLi8uLi9yZXNwb25zaXZlLXZpc2liaWxpdHknO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwZGYtem9vbS10b29sYmFyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGRmLXpvb20tdG9vbGJhci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGRmLXpvb20tdG9vbGJhci5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQZGZab29tVG9vbGJhckNvbXBvbmVudCB7XHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd1pvb21CdXR0b25zOiBSZXNwb25zaXZlVmlzaWJpbGl0eSA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHpvb21MZXZlbHMgPSBbJ2F1dG8nLCAncGFnZS1hY3R1YWwnLCAncGFnZS1maXQnLCAncGFnZS13aWR0aCcsIDAuNSwgMC43NSwgMSwgMS4yNSwgMS41LCAyLCAzLCA0XTtcclxufVxyXG4iLCI8ZGl2IGlkPVwidG9vbGJhclZpZXdlck1pZGRsZVwiIFtjbGFzc109XCJzaG93Wm9vbUJ1dHRvbnMgfCByZXNwb25zaXZlQ1NTQ2xhc3MgOiAnYWx3YXlzLXZpc2libGUnXCI+XHJcbiAgPHBkZi16b29tLW91dCBbc2hvd1pvb21CdXR0b25zXT1cInNob3dab29tQnV0dG9uc1wiPjwvcGRmLXpvb20tb3V0PlxyXG4gIDxwZGYtem9vbS1pbiBbc2hvd1pvb21CdXR0b25zXT1cInNob3dab29tQnV0dG9uc1wiPjwvcGRmLXpvb20taW4+XHJcbiAgPHBkZi16b29tLWRyb3Bkb3duIGNsYXNzPVwicmVzZXQtd2lkdGgtcGFkZGluZ1wiIFt6b29tTGV2ZWxzXT1cInpvb21MZXZlbHNcIj4gPC9wZGYtem9vbS1kcm9wZG93bj5cclxuPC9kaXY+XHJcbiJdfQ==