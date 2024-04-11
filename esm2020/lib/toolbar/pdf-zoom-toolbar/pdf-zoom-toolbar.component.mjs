import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./pdf-zoom-out/pdf-zoom-out.component";
import * as i2 from "./pdf-zoom-in/pdf-zoom-in.component";
import * as i3 from "./pdf-zoom-dropdown/pdf-zoom-dropdown.component";
import * as i4 from "../../responsive-visibility";
export class PdfZoomToolbarComponent {
    constructor() {
        this.showZoomButtons = true;
        this.zoomLevels = ['auto', 'page-actual', 'page-fit', 'page-width', 0.5, 0.75, 1, 1.25, 1.5, 2, 3, 4];
    }
}
/** @nocollapse */ PdfZoomToolbarComponent.ɵfac = function PdfZoomToolbarComponent_Factory(t) { return new (t || PdfZoomToolbarComponent)(); };
/** @nocollapse */ PdfZoomToolbarComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfZoomToolbarComponent, selectors: [["pdf-zoom-toolbar"]], inputs: { showZoomButtons: "showZoomButtons", zoomLevels: "zoomLevels" }, decls: 5, vars: 8, consts: [["id", "toolbarViewerMiddle"], [3, "showZoomButtons"], [2, "width", "unset", "max-width", "unset", "padding-top", "3px", 3, "zoomLevels"]], template: function PdfZoomToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵpipe(1, "responsiveCSSClass");
        i0.ɵɵelement(2, "pdf-zoom-out", 1)(3, "pdf-zoom-in", 1)(4, "pdf-zoom-dropdown", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassMap(i0.ɵɵpipeBind2(1, 5, ctx.showZoomButtons, "always-visible"));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("showZoomButtons", ctx.showZoomButtons);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("showZoomButtons", ctx.showZoomButtons);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("zoomLevels", ctx.zoomLevels);
    } }, directives: [i1.PdfZoomOutComponent, i2.PdfZoomInComponent, i3.PdfZoomDropdownComponent], pipes: [i4.ResponsiveCSSClassPipe], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfZoomToolbarComponent, [{
        type: Component,
        args: [{ selector: 'pdf-zoom-toolbar', template: "<div id=\"toolbarViewerMiddle\" [class]=\"showZoomButtons | responsiveCSSClass : 'always-visible'\">\n  <pdf-zoom-out [showZoomButtons]=\"showZoomButtons\"></pdf-zoom-out>\n  <pdf-zoom-in [showZoomButtons]=\"showZoomButtons\"></pdf-zoom-in>\n  <pdf-zoom-dropdown style=\"width: unset; max-width: unset; padding-top: 3px\" [zoomLevels]=\"zoomLevels\"> </pdf-zoom-dropdown>\n</div>\n", styles: [""] }]
    }], null, { showZoomButtons: [{
            type: Input
        }], zoomLevels: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXpvb20tdG9vbGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL3Rvb2xiYXIvcGRmLXpvb20tdG9vbGJhci9wZGYtem9vbS10b29sYmFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtem9vbS10b29sYmFyL3BkZi16b29tLXRvb2xiYXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7OztBQVFqRCxNQUFNLE9BQU8sdUJBQXVCO0lBTHBDO1FBT1Msb0JBQWUsR0FBeUIsSUFBSSxDQUFDO1FBRzdDLGVBQVUsR0FBRyxDQUFDLE1BQU0sRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDekc7O2lIQU5ZLHVCQUF1Qjt5R0FBdkIsdUJBQXVCO1FDUnBDLDhCQUFnRzs7UUFDOUYsa0NBQWlFLHFCQUFBLDJCQUFBO1FBR25FLGlCQUFNOztRQUp3QiwwRUFBaUU7UUFDL0UsZUFBbUM7UUFBbkMscURBQW1DO1FBQ3BDLGVBQW1DO1FBQW5DLHFEQUFtQztRQUM0QixlQUF5QjtRQUF6QiwyQ0FBeUI7O3VGREsxRix1QkFBdUI7Y0FMbkMsU0FBUzsyQkFDRSxrQkFBa0I7Z0JBTXJCLGVBQWU7a0JBRHJCLEtBQUs7WUFJQyxVQUFVO2tCQURoQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzcG9uc2l2ZVZpc2liaWxpdHkgfSBmcm9tICcuLi8uLi9yZXNwb25zaXZlLXZpc2liaWxpdHknO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwZGYtem9vbS10b29sYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BkZi16b29tLXRvb2xiYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wZGYtem9vbS10b29sYmFyLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgUGRmWm9vbVRvb2xiYXJDb21wb25lbnQge1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd1pvb21CdXR0b25zOiBSZXNwb25zaXZlVmlzaWJpbGl0eSA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHpvb21MZXZlbHMgPSBbJ2F1dG8nLCAncGFnZS1hY3R1YWwnLCAncGFnZS1maXQnLCAncGFnZS13aWR0aCcsIDAuNSwgMC43NSwgMSwgMS4yNSwgMS41LCAyLCAzLCA0XTtcbn1cbiIsIjxkaXYgaWQ9XCJ0b29sYmFyVmlld2VyTWlkZGxlXCIgW2NsYXNzXT1cInNob3dab29tQnV0dG9ucyB8IHJlc3BvbnNpdmVDU1NDbGFzcyA6ICdhbHdheXMtdmlzaWJsZSdcIj5cbiAgPHBkZi16b29tLW91dCBbc2hvd1pvb21CdXR0b25zXT1cInNob3dab29tQnV0dG9uc1wiPjwvcGRmLXpvb20tb3V0PlxuICA8cGRmLXpvb20taW4gW3Nob3dab29tQnV0dG9uc109XCJzaG93Wm9vbUJ1dHRvbnNcIj48L3BkZi16b29tLWluPlxuICA8cGRmLXpvb20tZHJvcGRvd24gc3R5bGU9XCJ3aWR0aDogdW5zZXQ7IG1heC13aWR0aDogdW5zZXQ7IHBhZGRpbmctdG9wOiAzcHhcIiBbem9vbUxldmVsc109XCJ6b29tTGV2ZWxzXCI+IDwvcGRmLXpvb20tZHJvcGRvd24+XG48L2Rpdj5cbiJdfQ==