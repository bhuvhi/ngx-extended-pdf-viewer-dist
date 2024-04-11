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
        args: [{ selector: 'pdf-zoom-toolbar', template: "<div id=\"toolbarViewerMiddle\" [class]=\"showZoomButtons | responsiveCSSClass : 'always-visible'\">\r\n  <pdf-zoom-out [showZoomButtons]=\"showZoomButtons\"></pdf-zoom-out>\r\n  <pdf-zoom-in [showZoomButtons]=\"showZoomButtons\"></pdf-zoom-in>\r\n  <pdf-zoom-dropdown style=\"width: unset; max-width: unset; padding-top: 3px\" [zoomLevels]=\"zoomLevels\"> </pdf-zoom-dropdown>\r\n</div>\r\n", styles: [""] }]
    }], null, { showZoomButtons: [{
            type: Input
        }], zoomLevels: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXpvb20tdG9vbGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL3Rvb2xiYXIvcGRmLXpvb20tdG9vbGJhci9wZGYtem9vbS10b29sYmFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtem9vbS10b29sYmFyL3BkZi16b29tLXRvb2xiYXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7OztBQVFqRCxNQUFNLE9BQU8sdUJBQXVCO0lBTHBDO1FBT1Msb0JBQWUsR0FBeUIsSUFBSSxDQUFDO1FBRzdDLGVBQVUsR0FBRyxDQUFDLE1BQU0sRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDekc7O2lIQU5ZLHVCQUF1Qjt5R0FBdkIsdUJBQXVCO1FDUnBDLDhCQUFnRzs7UUFDOUYsa0NBQWlFLHFCQUFBLDJCQUFBO1FBR25FLGlCQUFNOztRQUp3QiwwRUFBaUU7UUFDL0UsZUFBbUM7UUFBbkMscURBQW1DO1FBQ3BDLGVBQW1DO1FBQW5DLHFEQUFtQztRQUM0QixlQUF5QjtRQUF6QiwyQ0FBeUI7O3VGREsxRix1QkFBdUI7Y0FMbkMsU0FBUzsyQkFDRSxrQkFBa0I7Z0JBTXJCLGVBQWU7a0JBRHJCLEtBQUs7WUFJQyxVQUFVO2tCQURoQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSZXNwb25zaXZlVmlzaWJpbGl0eSB9IGZyb20gJy4uLy4uL3Jlc3BvbnNpdmUtdmlzaWJpbGl0eSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BkZi16b29tLXRvb2xiYXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wZGYtem9vbS10b29sYmFyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wZGYtem9vbS10b29sYmFyLmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBkZlpvb21Ub29sYmFyQ29tcG9uZW50IHtcclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93Wm9vbUJ1dHRvbnM6IFJlc3BvbnNpdmVWaXNpYmlsaXR5ID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgem9vbUxldmVscyA9IFsnYXV0bycsICdwYWdlLWFjdHVhbCcsICdwYWdlLWZpdCcsICdwYWdlLXdpZHRoJywgMC41LCAwLjc1LCAxLCAxLjI1LCAxLjUsIDIsIDMsIDRdO1xyXG59XHJcbiIsIjxkaXYgaWQ9XCJ0b29sYmFyVmlld2VyTWlkZGxlXCIgW2NsYXNzXT1cInNob3dab29tQnV0dG9ucyB8IHJlc3BvbnNpdmVDU1NDbGFzcyA6ICdhbHdheXMtdmlzaWJsZSdcIj5cclxuICA8cGRmLXpvb20tb3V0IFtzaG93Wm9vbUJ1dHRvbnNdPVwic2hvd1pvb21CdXR0b25zXCI+PC9wZGYtem9vbS1vdXQ+XHJcbiAgPHBkZi16b29tLWluIFtzaG93Wm9vbUJ1dHRvbnNdPVwic2hvd1pvb21CdXR0b25zXCI+PC9wZGYtem9vbS1pbj5cclxuICA8cGRmLXpvb20tZHJvcGRvd24gc3R5bGU9XCJ3aWR0aDogdW5zZXQ7IG1heC13aWR0aDogdW5zZXQ7IHBhZGRpbmctdG9wOiAzcHhcIiBbem9vbUxldmVsc109XCJ6b29tTGV2ZWxzXCI+IDwvcGRmLXpvb20tZHJvcGRvd24+XHJcbjwvZGl2PlxyXG4iXX0=